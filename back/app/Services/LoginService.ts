import Database from '@ioc:Adonis/Lucid/Database';
import Hash from '@ioc:Adonis/Core/Hash';
import { CreateUser, Login } from 'App/Models/LoginModel';
import { Exception } from '@adonisjs/core/build/standalone';
import { cpf } from 'cpf-cnpj-validator';
import { MessageResponse } from 'App/Models/MessageSucessModel';

export default class LoginService {
    public async listarUsuarios(): Promise<Login[]> {
        const usuarios: Login[] = await Database.from('usuarios').select(
            'email',
            'username',
            'created_at'
        );

        return usuarios;
    }

    public async getUsuario(id) {
        const usuario: Login = await Database.from('usuarios')
            .where('id', id)
            .first();

        return usuario;
    }

    public async salvarUsuario(data: CreateUser, user: Login): Promise<MessageResponse> {
        const senhaCriptografada = await Hash.make(data.password);
        data.password = senhaCriptografada;
        
        if (!cpf.isValid(data.cpf)) {
            throw new Exception('CPF inválido', 412);
        }

        if (!user?.is_admin) {
            data.is_admin = false;
        }

        try {
            await Database.table('usuarios').insert(data);
        } catch (error) {
            if (error.code === 'SQLITE_CONSTRAINT') {
                throw new Exception(
                    'O CPF ou e-mail já está em uso. Tente com valores diferentes.',
                    412
                );
            }
        }
        return { type: 'success', message: 'Usuário adicionado!' };
    }
}
