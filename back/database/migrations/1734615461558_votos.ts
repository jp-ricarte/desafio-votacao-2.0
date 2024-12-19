import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Votos extends BaseSchema {
  protected tableName = 'votos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('usuarios').onDelete('CASCADE').notNullable()
      table.integer('pauta_id').unsigned().references('id').inTable('pautas').onDelete('CASCADE').notNullable()
      table.boolean('vote').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
