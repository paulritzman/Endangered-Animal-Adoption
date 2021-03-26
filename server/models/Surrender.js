import pg from "pg"
import _ from "lodash"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/adoption_center"
})


class Surrender {
  constructor({id, name, phone_number, phoneNumber, email}){
    this.id = id
    this.name = name
    this.phoneNumber = phoneNumber || phone_number
    this.email =email
  }

  async saveSurrender() {
    try{
      const client = await pool.connect()
      const query = "INSERT INTO pet_surrender_applications (name, phone_number, email) VALUES ($1,$2,$3)"
      
      const values = [this.name, this.phoneNumber, this.email]
      await client.query(query, values)

      const result = await client.query("SELECT * FROM pet_surrender_applications ORDER BY id DESC LIMIT 1")
      const newsurrender = result.rows[0]

      this.id = newsurrender.id

      client.release()
      return true
    }catch (error){
      console.error(error)
      return false
    }
  }
}

export default Surrender