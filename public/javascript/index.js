const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
       console.log(charactersAPI.getFullList());
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      // console.log(
      //   charactersAPI.getOneRegister(
    //  Number(document.querySelector('input[name="character-id"]').value)
      //   )
      // );
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
        console.log(
        charactersAPI.deleteOneRegister(
     Number(document.querySelector('input[name="character-id-delete"]').value)
        ))
      
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      const id = document.querySelector(
        '#edit-character-form input[name="chr-id"]'
      ).value;
      const updatedName = document.querySelector(
        '#edit-character-form input[name="name"]'
      ).value;
      const updatedOccupation = document.querySelector(
        '#edit-character-form input[name="occupation"]'
      ).value;
      const isCartoonUpdate = document.querySelector(
        '#edit-character-form input[name="cartoon"]'
      ).checked;
      const updatedWeapon = document.querySelector(
        '#edit-character-form input[name="weapon"]'
      ).value;
      charactersAPI.updateOneRegister(Number(id),{updatedName, updatedOccupation,updatedWeapon,isCartoonUpdate})
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit",  function (event) {
      const name = document.querySelector(
        '#new-character-form input[name="name"]'
      ).value;
      const occupation = document.querySelector(
        '#new-character-form input[name="occupation"]'
      ).value;
      const isCartoon = document.querySelector(
        '#new-character-form input[name="cartoon"]'
      ).checked;
      const weapon = document.querySelector(
        '#new-character-form input[name="weapon"]'
      ).value;
      // console.log(isCartoon +"if cartton y/n");
      // console.log(name, ' name')
      // console.log((occupation, ' occup'));

     // console.log(
       charactersAPI.createOneRegister({name, occupation,weapon,isCartoon})
      //);
    });
});
