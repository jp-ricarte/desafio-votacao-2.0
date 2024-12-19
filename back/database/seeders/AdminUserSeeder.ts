import Database from '@ioc:Adonis/Lucid/Database';
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Hash from '@ioc:Adonis/Core/Hash';

export default class AdminUserSeederSeeder extends BaseSeeder {
    public async run() {
        const adminExists = await Database.from('usuarios')
            .where('is_admin', true)
            .first();

        if (!adminExists) {
            await Database.table('usuarios').insert({
                username: 'admin',
                email: 'admin@example.com',
                cpf: '00000000000',
                password: await Hash.make('admin'),
                is_admin: true,
                remember_me_token: true,
            });
        }
    }
}
