import pg from "pg"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/monolith_adventures_development"
})

const query = async ({ queryString, values }) => {
  try {
    const client = await pool.connect()
    const result = await client.query(queryString, values)
    client.release()
    return result.rows
  } catch (error) {
    console.error(error)
    pool.end()
    throw error
  }
}

export default query
