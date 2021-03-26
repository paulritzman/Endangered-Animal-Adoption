import query from "../functions/query.js";

class Region {
  constructor({id, name}){
    this.id = id
    this.name = name
  }

  static async findAll() {
    const queryData = { queryString: "SELECT * FROM continents;" };
    const continentData = await query(queryData);
    return continentData.map((continent) => new this(continent));
  }
}

export default Region