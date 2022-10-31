const poke_container = document.getElementById("poke_container");
const apiUrl =
  "https://my-json-server.typicode.com/Bryan-ITSQMET/API-poke-kruger/listarPokemons/";
const numeroPokemons = 10;
const search = document.getElementById("form");
const txtsearch = document.getElementById("txtsearch");
const clear = document.getElementById("clear");

// RECORRER LOS 10 POKEMONS
const fetchPokemons = async () => {
  poke_container.innerHTML = "";
  for (let i = 1; i <= numeroPokemons; i++) {
    await getPokemon(i);
  }
};
// MUESTRA LA CARD POKEMON HOME
const getPokemon = async (id) => {
  const url = apiUrl + id.toString();
  await fetch(url)
    .then((res) => res.json())
    .then((data) => createPokemonCard(data));
};
// CREAO LA CARD POKEMON HOME
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
// INSERTO LOS POKEMONS
fetchPokemons();

const names = [
  "pikachu",
  "bulbasaur",
  "charmander",
  "caterpie",
  "weedle",
  "pidgey",
  "rattata",
  "spearow",
  "ekans",
  "mewto",
];

search.addEventListener("click", (e) => {
  e.preventDefault();
  let busqueda = txtsearch.value.toLowerCase().trim();

  for (let index of names) {
    if (busqueda == "pikachu") {
      names[0] = 1;
      poke_container.innerHTML = "";
      txtsearch.value = "";
      return getPokemon(names[0]);
    } else if (busqueda == "bulbasaur") {
      names[1] = 2;
      poke_container.innerHTML = "";
      txtsearch.value = "";
      return getPokemon(names[1]);
    } else if (busqueda == "charmander") {
      names[2] = 3;
      poke_container.innerHTML = "";
      txtsearch.value = "";
      return getPokemon(names[2]);
    } else if (busqueda == "caterpie") {
      names[3] = 4;
      poke_container.innerHTML = "";
      txtsearch.value = "";
      return getPokemon(names[3]);
    } else if (busqueda == "weedle") {
      names[4] = 5;
      poke_container.innerHTML = "";
      txtsearch.value = "";
      return getPokemon(names[4]);
    } else if (busqueda == "pidgey") {
      names[5] = 6;
      poke_container.innerHTML = "";
      txtsearch.value = "";
      return getPokemon(names[5]);
    } else if (busqueda == "rattata") {
      names[6] = 7;
      poke_container.innerHTML = "";
      txtsearch.value = "";
      return getPokemon(names[6]);
    } else if (busqueda == "spearow") {
      names[7] = 8;
      poke_container.innerHTML = "";
      txtsearch.value = "";
      return getPokemon(names[7]);
    } else if (busqueda == "ekans") {
      names[8] = 9;
      poke_container.innerHTML = "";
      txtsearch.value = "";
      return getPokemon(names[8]);
    } else if (busqueda == "mewto") {
      names[9] = 10;
      poke_container.innerHTML = "";
      txtsearch.value = "";
      return getPokemon(names[9]);
    } else if (busqueda == "") {
      return alert("Campo Vacio al momento de hacer la busqueda");
    } else if (!names.includes(busqueda)) {
      return alert("Este Pokemon no se encuentra registrado en la Pokedex");
    }
  }
});

clear.addEventListener("click", () => {
  fetchPokemons();
});
