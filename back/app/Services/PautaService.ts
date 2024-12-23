import { Exception } from '@adonisjs/core/build/standalone';
import Database from '@ioc:Adonis/Lucid/Database';
import { Categorias } from 'App/Models/CategoriasModel';
import { Login } from 'App/Models/LoginModel';
import { MessageResponse } from 'App/Models/MessageSucessModel';
import { CreatePauta, Pauta } from 'App/Models/PautaModel';
import { VotoResult } from 'App/Models/VotoModel';
import moment from 'moment';

export default class PautaService {
    private addStatusQuery(query) {
        return query.select(
            Database.raw(
                `CASE WHEN DATETIME(voting_end) > DATETIME('now', 'localtime') THEN true ELSE false END AS status`
            )
        );
    }

    public async listarPautas(): Promise<Pauta[]> {
        const pautas: Pauta[] = await this.addStatusQuery(
            Database.from('pautas')
                .select('pautas.*', 'categorias.category as categoria_name')
                .join('categorias', 'pautas.categoria_id', 'categorias.id')
        );
        return pautas;
    }

    public async listarCategorias(): Promise<Categorias[]> {
        const categorias: Categorias[] = await Database.from(
            'categorias'
        ).select('*');
        return categorias;
    }

    public async getPauta(id: number): Promise<Pauta> {
        const pauta: Pauta = await this.addStatusQuery(
            Database.from('pautas')
                .select('pautas.*', 'categorias.category as categoria_name')
                .join('categorias', 'pautas.categoria_id', 'categorias.id')
                .where('pautas.id', id)
        ).first();

        if (!pauta) {
            throw new Exception('Pauta não encontrada', 404);
        }

        return pauta;
    }

    public async criarPauta(data: CreatePauta, user: Login): Promise<number> {
        if (!user.is_admin) {
            throw new Exception('Usuário não autorizado', 401);
        }

        const defaultTime = new Date(Date.now() + 1 * 60 * 1000);
        const formattedDefaultTime = moment(defaultTime).format(
            'YYYY-MM-DDTHH:mm:ss'
        );
        const id = await Database.table('pautas').insert({
            ...data,
            voting_end: !data.voting_end
                ? formattedDefaultTime
                : data.voting_end,
        });

        return id[0];
    }

    public async resultadoVotosPauta(idPauta): Promise<VotoResult> {
        const votosResult = await Database.from('votos')
            .select(
                Database.raw('COUNT(*) as total'),
                Database.raw(
                    'COUNT(CASE WHEN vote = "true" THEN 1 END) as yes'
                ),
                Database.raw(
                    'COUNT(CASE WHEN vote = "false" THEN 1 END) as no'
                ),
                Database.raw(
                    'ROUND(COUNT(CASE WHEN vote = "true" THEN 1 END) * 100.0 / COUNT(*), 2) as percentageYes'
                ),
                Database.raw(
                    'ROUND(COUNT(CASE WHEN vote = "false" THEN 1 END) * 100.0 / COUNT(*), 2) as percentageNo'
                )
            )
            .where('pauta_id', idPauta)
            .first();

        return votosResult;
    }

    public async votarPauta(
        idPauta: number,
        voto: boolean,
        user: Login
    ): Promise<MessageResponse> {
        const pauta = await this.getPauta(idPauta);
        const votoExistente = await Database.from('votos')
            .where('pauta_id', idPauta)
            .where('cpf', user.cpf)
            .first();

        if (new Date() > new Date(pauta.voting_end)) {
            throw new Exception('Votação encerrada', 412);
        } else if (!!votoExistente) {
            throw new Exception('CPF já possui voto', 412);
        } else {
            await Database.table('votos').insert({
                pauta_id: idPauta,
                cpf: user.cpf,
                vote: voto,
            });
        }

        return {
            type: 'success',
            message: `Voto ${voto ? 'Sim' : 'Não'} Computado`,
        };
    }
}
