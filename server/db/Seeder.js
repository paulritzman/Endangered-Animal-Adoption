import pg from "pg"
import path from "path"
import LineReader from "line-reader"
import { fileURLToPath } from "url"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/adoption_center"
})

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
    const petTypes = [
      { id: 1, type: "Type1", description: "Type1 Description" },
      { id: 2, type: "Type2", description: "Type2 Description" },
      { id: 3, type: "Type3", description: "Type3 Description" },
      { id: 4, type: "Type4", description: "Type4 Description" }
    ]
  }

  async seedContinents() {
    const continents = [
      { id: 1, name: "Continent1" },
      { id: 2, name: "Continent2" },
      { id: 3, name: "Continent3" },
      { id: 4, name: "Continent4" },
      { id: 5, name: "Continent5" },
      { id: 6, name: "Continent6" },
      { id: 7, name: "Continent7" }
    ]
  }

  async seedPetGroups() {
    const petGroups = [
      { id: 1, groupTitle: "Reptile", continentId: 1, petTypeId: 1 },
      { id: 2, groupTitle: "Marsupial", continentId: 2, petTypeId: 2 },
      { id: 3, groupTitle: "Mammal", continentId: 1, petTypeId: 3 },
      { id: 4, groupTitle: "Bird", continentId: 3, petTypeId: 4 }
    ]
  }

  async seedPetSurrenderApplications() {
    const petSurrenderApps = [
      {
        id: 1,
        name: "person1",
        phoneNumber: "555-555-5555",
        email: "foo@bar.com",
        petName: "Pet1",
        petAge: 15,
        petImageUrl: "http://www.somewhere.com/1.jpg",
        vaccinationStatus: true,
        applicationStatus: "Pending",
        petTypeId: 4
      },
      {
        id: 2,
        name: "person2",
        phoneNumber: "555-555-6666",
        email: "foo2@bar.com",
        petName: "Pet2",
        petAge: 11,
        petImageUrl: "http://www.somewhere.com/23.jpg",
        vaccinationStatus: false,
        applicationStatus: "Rejected",
        petTypeId: 3
      }
    ]
  }

  async seedAdoptablePets() {
    const adoptablePets = [
      {
        id: 1,
        name: "animal1",
        imageUrl: "http://www.somewhere.com/23.jpg",
        age: 22,
        vaccinationStatus: true,
        adoptionStory:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur laudantium veniam tenetur!",
        adoptionStatus: "available",
        petTypeId: 2
      },
      {
        id: 2,
        name: "animal2",
        imageUrl: "http://www.somewhere.com/3.jpg",
        age: 2,
        vaccinationStatus: true,
        adoptionStory:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur laudantium veniam tenetur!",
        adoptionStatus: "available",
        petTypeId: 4
      }
    ]
  }

  async seedAdoptionApplications() {
    const adoptionApps = [
      {
        id: 1,
        name: "person1",
        phoneNumber: "555-555-5555",
        email: "foo2@bar.com",
        applicationStatus: "Pending",
        homeStatus: "Owns",
        petId: 3
      },
      {
        id: 2,
        name: "person2",
        phoneNumber: "555-555-6666",
        email: "foo@bar.com",
        applicationStatus: "Rejected",
        homeStatus: "Rents",
        petId: 2
      }
    ]
  }
}

export default Seeder
