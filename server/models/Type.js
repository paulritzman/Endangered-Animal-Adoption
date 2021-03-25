import query from "../functions/query.js";

class Type {
  constructor({id}) {
    this.id = id
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
}

export default Type
