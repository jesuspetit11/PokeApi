let lista = document.getElementById("lista-Pokemon");

let consultarPokemon = (id, num) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
    response.json().then((pokemon) => {
      crearPokemon(pokemon, num);
    });
  });
};

let consultarPokemones = () => {
  let primerId = Math.round(Math.random() * 150);
  let segundoId = Math.round(Math.random() * 150);

  consultarPokemon(primerId, 1);
  consultarPokemon(segundoId, 2);
};

let crearPokemon = (pokemon, num) => {
  let item = lista.querySelector(`#pokem-${num}`);
  let img = item.getElementsByTagName("img")[0];
  img.setAttribute("src", pokemon.sprites.front_default);
  let nombre = item.getElementsByTagName("p")[0];
  nombre.textContent = pokemon.name;
};
