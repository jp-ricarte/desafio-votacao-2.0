import Database from '@ioc:Adonis/Lucid/Database';
import Hash from '@ioc:Adonis/Core/Hash';
import { Login } from 'App/Models/LoginModel';

export default class LoginModel {

    public async listarUsuarios(): Promise<Login[]> {
       const usuarios: Login[] = await Database.from('usuarios').select('email', 'username', 'created_at');

       if (usuarios.length === 0) {
           return 'Não há usuários!';
       } else {
           return usuarios;
       }

    }

    public async getUsuario(id) {
        const usuario: Login = await Database.from('usuarios').where('id', id).first();

        return usuario;

     }

   public async salvarUsuario(data: Login): Promise<string> {
        const senhaCriptografada = await Hash.make(data.password);
        data.password = senhaCriptografada;

        await Database.table('usuarios').insert(data);

        this.getUsuario(data.email);

        return 'Usuário adicionado!';
    }

    public async editarUsuario(data, id): Promise<string> {
        await Database.from('usuarios').where('id',id).update(data);

        return 'Usuário editado!';

    }

    public async excluirUsuario(id): Promise<string> {
        await Database.from('usuarios').where('id',id).delete();

        return 'Usuário excluído!';

    }
}