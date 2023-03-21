import pg from 'pg'

const { Pool } = pg
const pool = new Pool({
    connectionString: process.env.DB_CONNECTION,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})


pool.on('connect', () => console.log('DB Connected Successfully'))
pool.on('remove', () => console.log('DB Removed Successfully'))

export default pool