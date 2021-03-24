import path from "path"
import LineReader from "line-reader"
import { fileURLToPath } from "url"

import query from "../functions/query.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const petTypes = path.join(__dirname, "../seeder_data/pet_types.txt")
const continents = path.join(__dirname, "../seeder_data/continents.txt")
const petGroups = path.join(__dirname, "../seeder_data/pet_groups.txt")
const adoptablePets = path.join(__dirname, "../seeder_data/adoptable_pets.txt")
const petSurrenderApplications = path.join(__dirname, "../seeder_data/pet_surrender_applications.txt")
const adoptionApplications = path.join(__dirname, "../seeder_data/adoption_applications.txt")

class Seeder {
  static async seed() {
    const seedPetTypes = async () => {
      LineReader.eachLine(petTypes, async (line, last, done) => {
        const [type, description] = line.split(";")
        const petTypeString = "INSERT INTO pet_types (type, description) VALUES ($1, $2);"
        await query({ queryString: petTypeString, values: [type, description] })
        done()
      })
    }
    await seedPetTypes()

    const seedContinents = async () => {
      LineReader.eachLine(continents, async (line, last, done) => {
        const [name] = line.split(";")
        const continentString = "INSERT INTO continents (name) VALUES ($1);"
        await query({ queryString: continentString, values: [name] })
        done()
      })
    }
    await seedContinents()

    const seedPetGroups = async () => {
      LineReader.eachLine(petGroups, async (line, last, done) => {
        const [group_title, continent_id, pet_type_id] = line.split(";")
        const petGroupString = "INSERT INTO pet_groups (group_title, continent_id, pet_type_id) VALUES ($1, $2, $3);"
        await query({ queryString: petGroupString, values: [group_title, continent_id, pet_type_id] })
        done()
      })
    }
    await seedPetGroups()

    const seedAdoptablePets = async () => {
      LineReader.eachLine(adoptablePets, async (line, last, done) => {
        const [name, image_url, age, vaccination_status, adoption_story, adoption_status] = line.split(";")
        const adoptablePetString = "INSERT INTO adoptable_pets (name, image_url, age, vaccination_status, adoption_story, adoption_status) VALUES ($1, $2, $3, $4, $5, $6);"
        await query({ queryString: adoptablePetString, values: [name, image_url, age, vaccination_status, adoption_story, adoption_status] })
        done()
      })
    }
    await seedAdoptablePets()

    const seedAdoptionApplications = async () => {
      LineReader.eachLine(adoptionApplications, async (line, last, done) => {
        const [name, phone_number, email, application_status, home_status] = line.split(";")
        const adoptionApplicationString = "INSERT INTO adoption_applications (name, phone_number, email, application_status, home_status) VALUES ($1, $2, $3, $4, $5);"
        await query({ queryString: adoptionApplicationString, values: [name, phone_number, email, application_status, home_status] })
        done()
      })
    }
    await seedAdoptionApplications()

    const seedPetSurrenderApplications = async () => {
      LineReader.eachLine(petSurrenderApplications, async (line, last, done) => {
        const [name, phone_number, email, pet_name, pet_age, pet_image_url, vaccination_status, application_status, pet_type_id] = line.split(";")
        const petSurrenderedString = "INSERT INTO pet_surrender_applications (name, phone_number, email, pet_name, pet_age, pet_image_url, vaccination_status, application_status, pet_type_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);"
        await query({ queryString: petSurrenderedString, values: [name, phone_number, email, pet_name, pet_age, pet_image_url, vaccination_status, application_status, pet_type_id] })
        done()
      })
    }
    await seedPetSurrenderApplications()
  }
}

export default Seeder
