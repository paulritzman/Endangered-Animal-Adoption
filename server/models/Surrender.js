import query from "../functions/query.js";
import _ from "lodash"

class Surrender {
  constructor({id, name, phone_number, phoneNumber, email, pet_name, petName, pet_age, petAge, pet_image_url, petImageUrl,
              vaccination_status, vaccinationStatus, application_status, applicationStatus, pet_type_id, petTypeId}){
    this.id = id
    this.name = name
    this.email = email
    this.petAge = petAge || pet_age
    this.petName = petName || pet_name
    this.phoneNumber = phoneNumber || phone_number
    this.petImageUrl = petImageUrl || pet_image_url
    this.vaccinationStatus = vaccinationStatus || vaccination_status
    this.applicationStatus = applicationStatus || application_status || 'pending'
    this.petTypeId = petTypeId || pet_type_id || 1
  }

  async saveSurrender() {
    try{
      const { name, phoneNumber, email, petName, petAge, petImageUrl, vaccinationStatus, applicationStatus, petTypeId } = this
      const queryString = "INSERT INTO pet_surrender_applications (name, phone_number, email, pet_name, pet_age, pet_image_url, vaccination_status, application_status, pet_type_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id;"
      const values = [name, phoneNumber, email, petName, petAge, petImageUrl, vaccinationStatus, applicationStatus, petTypeId]
      const queryData = {queryString, values}      
      const result = await query(queryData)
      this.id = result[0].id
      console.log(result[0].id)
      
      return this
    }catch (error){
      console.error(error)
      return false
    }
  }
}

export default Surrender