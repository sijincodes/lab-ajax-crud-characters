class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    return await axios
      .get(this.BASE_URL + "/characters")
      .then((responseFromApi) => responseFromApi.data);
  }

  async getOneRegister(id) {
    return await axios
      .get(this.BASE_URL + "/characters/" + id)
      .then((responseFromApi) => responseFromApi.data);
  }

  async createOneRegister(characterObj) {
    return await axios
      .post(this.BASE_URL + "/characters", characterObj)
      .then((characterObj) => characterObj.data);
  }

 async updateOneRegister(id,characterObj) {
    return await axios
      .put(this.BASE_URL + "/characters/" + id,characterObj)
      .then((characterObj) => characterObj.data);
  }

  async deleteOneRegister(id) {
    return await axios
      .delete(this.BASE_URL + "/characters/" + id)
     // res.send(`Character has been successfully deleted " ${req.data.name}`))
       .then(() => "Character has been successfully deleted ");
    // res.redirect(`/movie-characters/list`); // <== leave this line commented for now
  }
}
