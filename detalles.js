const poke_container = document.getElementById("poke_container");
const apiUrl =
  "https://my-json-server.typicode.com/Bryan-ITSQMET/API-poke-kruger/listarPokemons/";

const createPokemonCard = (pokemon) => {
  const { id, image, name, type, describe, evolution, height, weight } =
    pokemon;
  const divPokemon = document.createElement("div");
  divPokemon.classList.add("pokemonCard");

  const innerhtmlPokemon = `
          <img class='imgPokemon' src='${image}' alt='${name}'><br>
          <span class='namePokemon'>${name}</span><br>
          <span class ='numPokemon'>Número : </span> <span class ='numPokemon_'>${id}</span><br>
          <span class='typPokemon'>Tipo : </span> <span class='typPokemon_'>${type}</span><br>
          <span class='descPokemon'>Descripción : </span> <span class='descPokemon_'>${describe}</span><br>
          <span class='evoluPokemon'>Evolución : </span> <span class='evoluPokemon_'>${evolution}</span><br>
          <span class='altPokemon'>Altura : </span> <span class='altPokemon_'>${height}</span><br>
          <span class='weiPokemon'>Peso : </span> <span class='weiPokemon_'>${weight}</span><br><br>
          <a href=/ class='btnDetalles'>Home</a>
      `;

  divPokemon.innerHTML = innerhtmlPokemon;
  poke_container.appendChild(divPokemon);
};

const queryString = window.location.search;

// los parámetros que pasamos a través de la URL('?pokemon_id=_NUMERO_')
const urlParams = new URLSearchParams(queryString);

// ?pokemon_id=9
const pokemonID = urlParams.get("pokemon_id");
fetchPokemon(pokemonID);

async function fetchPokemon(id) {
  const url = apiUrl + id.toString();
  await fetch(url)
    .then((res) => res.json())
    .then((data) => createPokemonCard(data));
}
