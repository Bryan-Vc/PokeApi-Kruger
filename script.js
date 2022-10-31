const poke_container = document.getElementById("poke_container");
const apiUrl =
  "https://my-json-server.typicode.com/Bryan-ITSQMET/API-poke-kruger/listarPokemons/";
const numeroPokemons = 10;
const form = document.getElementById("form");
const txtsearch = document.getElementById("txtsearch");

const fetchPokemons = async () => {
  poke_container.innerHTML = "";
  for (let i = 1; i <= numeroPokemons; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = apiUrl + id.toString();
  await fetch(url)
    .then((res) => res.json())
    .then((data) => createPokemonCard(data));
};

const createPokemonCard = (pokemon) => {
  const { id, image, name, type } = pokemon;
  const divPokemon = document.createElement("div");
  divPokemon.classList.add("pokemonCard");

  const innerhtmlPokemon = `
        <img class='imgPokemon' src='${image}' alt='${name}'><br>
        <span class='namePokemon'>${name}</span><br>
        <span class ='numPokemon'>Número : </span> <span class ='numPokemon_'>${id}</span><br>
        <span class='typPokemon'>Tipo : </span> <span class='typPokemon_'>${type}</span><br><br>
        <a href=detalles.html?pokemon_id=${id} class='btnDetalles'>Más Detalles</a>
    `;

  divPokemon.innerHTML = innerhtmlPokemon;
  poke_container.appendChild(divPokemon);
};

fetchPokemons();

const names = [
  "Bulbasaur",
  "Pikachu",
  "Charmander",
  "Caterpie",
  "Weedle",
  "Pidgey",
  "Rattata",
  "Spearow",
  "Ekans",
  "Mewto",
];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  for (let index of names) {
    if (index === txtsearch.value.trim()) {
      //verificamos que el input no venga con datos vacios
      if (txtsearch.value.trim() !== "") {
        //limpiamos el contenedor para mostrar los datos de la busquedad!!;
        poke_container.innerHTML = "";
        //ejecutamos la funcion getPokemon y le pasamos x parametro lo que obtengamos del inputText;
        getPokemon(txtsearch.value);
        //limpiamos el input
        txtsearch.value = "";
        return;
      }
    }
  }

  alert("Error Campos Vacios O Nombre Pokemon no Existe!!");
});
