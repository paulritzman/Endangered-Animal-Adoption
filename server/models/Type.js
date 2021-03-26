import query from "../functions/query.js";
import pg from "pg"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/adoption_center"
})


class Type {
  constructor({id, type}) {
    this.id = id
    this.type = type
  }

  // FIND ALL PET TYPES
  static async findAll() {
    const queryData = { queryString: "SELECT DISTINCT group_title FROM pet_groups;" };
    const petData = await query(queryData);
    return petData.map((pet) => new this(pet));
  }

  static async findById(id) {
    const queryData = { queryString: "SELECT group_title FROM pet_groups WHERE id = $1;", values: [id] };
    const petData = await query(queryData);
    return new this(petData[0]);
  }

  async saveType() {
    try{
      const client = await pool.connect()
      const query = "INSERT INTO pet_types (type) VALUES ($1)"
      
      const values = [this.type]
      await client.query(query, values)

      const result = await client.query("SELECT * FROM pet_types ORDER BY id DESC LIMIT 1")
      const newType = result.rows[0]

      this.id = newType.id

      client.release()
      return true
    }catch (error){
      console.error(error)
      return false
    }
  }
}

export default Type
