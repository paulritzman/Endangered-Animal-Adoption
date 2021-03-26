import query from "../functions/query.js";

class Pet {
  constructor({id, name, image_url, imageUrl, age, vaccination_status, vaccinationStatus, adoption_story, adoptionStory, adoption_status, adoptionStatus, pet_type_id, petTypeId}) {
    this.id = id
    this.name = name
    this.imageUrl = imageUrl || image_url
    this.age = age
    this.vaccinationStatus = vaccinationStatus || vaccination_status
    this.adoptionStory = adoptionStory || adoption_story
    this.adoptionStatus = adoptionStatus || adoption_status
    this.pet_type_id = pet_type_id || petTypeId
  }

  static async findAll() {
    const queryData = { queryString: "SELECT * FROM adoptable_pets;" };
    const petData = await query(queryData);
    return petData.map((pet) => new this(pet));
  }

  static async findById(id) {
    console.log("Pet Model: findById()")

    console.log(id)
    const queryData = { queryString: "SELECT * FROM adoptable_pets WHERE id = $1;", values: [id] };
    const petData = await query(queryData);
    return new this(petData[0]);
  }

  static async findByType(type) {
    console.log("Pet Model: findByType()")

    const queryString =
    `
      SELECT adoptable_pets.*
      FROM adoptable_pets
        JOIN pet_types ON adoptable_pets.pet_type_id = pet_types.id
        JOIN pet_groups ON pet_groups.pet_type_id = pet_types.id
      WHERE pet_groups.group_title = $1
      ;
    `
    const queryData = { queryString, values: [type] };
    const petData = await query(queryData);
    return petData.map((pet) => new this(pet));
  }
  
  // async savePet() {
  //   const insertString =
  //    "INSERT INTO adoptable_pets (name, image_url, age, vaccination_status, adoption_story, adoption_status,pet_type_id ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id;";
  //   const insertValues = [this.name, this.imageUrl, this.vaccinationStatus, this.adoptionStory, this.adoptionStatus, this.petTypeId];

  //   const queryData = { queryString: insertString, values: insertValues };
  //   const result = await query(queryData);
  //   this.id = result[0].id;
  // }
}

export default Pet
