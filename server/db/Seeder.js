import pg from "pg"
import path from "path"
import LineReader from "line-reader"
import { fileURLToPath } from "url"

import query from "../functions/query.js"
import { result } from "lodash"

//setup __dirname to work with ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// file location
const petTypes = path.join(__dirname, "../../pet_type.txt")
const continents = path.join(__dirname, "../../continents.text")
const petGroups = path.join(__dirname, "../../pet_groups.txt")
const adoptablePets = path.join(__dirname, "../../adoptable_pets.txt")
const petSurrenderApplications = path.join(__dirname, "../../pet_surrender_applications.txt")
const adoptionApplications = path.join(__dirname, "../../adoption_applications.txt")


class Seeder {
  static async seed() {
    await seedPetTypes()
    await seedContinents()
    await seedPetGroups()
    await seedPetSurrenderApplications()
    await seedAdoptablePets()
    await seedAdoptionApplications()
  }
  

  async seedPetTypes() {
    LineReader.eachLine(petTypes, async(line, last, done) => {
      const [type, description] = line.split(";")
      const petTypeString = "INSERT INTO pet_types (type, description) VALUES ($1, $2)"
      await query({ queryString: petTypeString, values: [type, description] })
      done()
    })
  }

  async seedContinents() {
    LineReader.eachLine(continents, async(line, last, done) => {
      const [name] = line.split(";")
      const continentString = "INSERT INTO continents (name) VALUES ($1)"
      await query({ queryString: continentString, values: [name] })
      done()
    })
  }

  async seedPetGroups() {
    LineReader.eachLine(petGroups, async(line, last, done) => {
      const [group_title, continent_id, pet_type_id] = line.split(";")
      const petGroupString = "INSERT INTO pet_groups (group_title) VALUES ($1)"
      await query ({ queryString: petGroupString, values: [group_title, continent_id, pet_type_id] })
      done()
    })
  }

  async seedPetSurrenderApplications() {
    LineReader.eachLine(petSurrenderApplications, async(line, last, done) => {
      const [name, phone_number, email, pet_name, pet_age, pet_image_url, vaccination_status, application_status, pet_type_id] = line.split(";")
      const petSurrenderedString = "INSERT INTO pet_surrender_applications (name, phone_number, email, pet_name, pet_age, pet_image_url, vaccination_status, application_status) VALUES ($1, $2, $3, $4, $5, $5, $6, $7, $8)"
      await query ({ queryString: petSurrenderedString, values: [name, phone_number, email, pet_name, pet_age, pet_image_url, vaccination_status, application_status, pet_type_id] })
      done()
    })
  }

  async seedAdoptablePets() {
    LineReader.eachLine(adoptablePets, async(line, last, done) => {
      const [name, image_url, age, vaccination_status, adoption_story, adoption_status] = line.split(";")
      const adoptablePetString = "INSERT INTO adoptable_pets (name, image_url, age, vaccination_status, adoption_story, adoption_status) VALUES ($1, $2, $3, $4, $5, $6)"
      await query ({ queryString: adoptablePetString, values: [name, image_url, age, vaccination_status, adoption_story, adoption_status] })
      done()
    })
  }

  async seedAdoptionApplications() {
    LineReader.eachLine(adoptionApplications, async(line, last, done) => {
      const [name, phone_number, email, application_status, home_status] = line.split(";")
      const adoptionApplicationString = "INSERT INTO adoption_applications (name, phone_number, email, application_status, home_status) VALUES ($1, $2, $3, $4, $5)"
      await query ({ queryString: adoptionApplicationString, values: [name, phone_number, email, application_status, home_status] })
    })
  }
}

export default Seeder
