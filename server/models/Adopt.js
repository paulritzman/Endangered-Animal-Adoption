import query from "../functions/query.js";

class Adopt {
  constructor({id, name, phone_number, home_status, pet_type_id, petTypeId}) {
    this.id = id
    this.name = name
    this.phone_number= phone_number
    this.home_status= home_status
    this.pet_type_id = pet_type_id || petTypeId

  }

  async save () {
    try {
      const client = await pool.connect()
      const queryString =
     "INSERT INTO adoption_applications (name, phone_number, email, home_status, pet_type_id ) VALUES ($1, $2, $3, $4, $5) RETURNING id;";
      const values = [this.name, this.phone_number, this.home_status, this.petTypeId]
      const result = await client.query(queryString, values)

      const adoptId = result.rows[0].id
      this.id = adoptId
      client.release()
      return true

  
    } catch (error) {
  	      console.error(error)
  	      pool.end()
  	      return false
  	      
  	    }
  	  }  
}

export default Adopt
