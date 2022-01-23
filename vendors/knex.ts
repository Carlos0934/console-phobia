import { Knex, knex } from 'knex'

const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: process.env.DB_PATH,
  },
}

export const getKnex = (): Knex => knex(config)
