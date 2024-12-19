import { Exception } from '@adonisjs/core/build/standalone';
import Database from '@ioc:Adonis/Lucid/Database';
import { Pauta } from 'App/Models/PautaModel';
import { Voto } from 'App/Models/VotoModel';
import { DateTime } from 'luxon';

export default class PautaService {
    private addStatusQuery(query) {
        return query.select(
            Database.raw(
                `CASE WHEN voting_end > NOW() THEN true ELSE false END AS status`
            )
        );
    }

    public async listarPautas(): Promise<Pauta[]> {
        const pautas: Pauta[] = await this.addStatusQuery(
            Database.from('pautas').select('*')
        );
        return pautas;
    }

    public async getPauta(id: number): Promise<Pauta> {
        const pauta: Pauta = await this.addStatusQuery(
            Database.from('pautas').select('*').where('id', id)
        ).first();

        return pauta;
    }

    public async criarPauta(data: Pauta, user): Promise<string> {
        await Database.table('pautas').insert({
            ...data,
            voting_end: !data.voting_end
                ? DateTime.now().plus({ minutes: 1 })
                : data.voting_end,
        });

        return 'Votação de ' + data.title + ' iniciada!';
    }

    public async listarVotosUsuario() {}

    public async votarPauta(data: Voto) {
        const pauta = await this.getPauta(data.pauta_id);
        if (DateTime.now() > DateTime.fromJSDate(pauta.voting_end)) {
            throw new Exception('Votação Encerrada', 412);
        } else {
            await Database.table('votos').insert(data);
        }

        return 'Voto ' + data.vote ? 'Sim' : 'Não' + ' Computado';
    }
}
