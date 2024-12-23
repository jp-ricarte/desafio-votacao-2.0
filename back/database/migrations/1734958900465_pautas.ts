import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pautas extends BaseSchema {
    protected tableName = 'pautas'

    public async up () {
        this.schema.alterTable(this.tableName, (table) => {
            table.integer('categoria_id').unsigned().references('id').inTable('categorias').onDelete('CASCADE')
        })
    }

    public async down () {
        this.schema.alterTable(this.tableName, (table) => {
            table.dropColumn('categoria_id')
        })
    }
}
