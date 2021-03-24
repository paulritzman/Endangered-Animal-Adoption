import query from "../functions/query.js";

class Locations {
  constructor({id, name}){
    this.id = id
    this.name = name
  }

  static async findAllLocations() {
    const queryData = { queryString: "SELECT * FROM continents;" };
    const continentData = await query(queryData);
    return continentData.map((continent) => new this(continent));
  }

  // static async findLocationById(id){

  // }
  // async saveLocation() {

  // }
}

export default Locations