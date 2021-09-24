import axios from "axios";

const instance = axios.create({
  BASE_URL: "https://pokeapi.co/api/v2/",
  headers: { withCredentials: true },
});

export const pokemonsApi = {
  getPokemons() {
    return instance.get(``).then();
  },
};
