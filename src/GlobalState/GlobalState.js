import { useEffect, useState } from "react";
import { urlBase } from "../constants/constants";
import PokedexGlobalContext from "./PokedexGlobalContext";
import axios from "axios";

const GlobalState = (props) => {
  const [homePagePokemonList, setHomePagePokemonList] = useState([]);
  const [pokedexPagePokemonList, setPokedexPagePokemonList] = useState([]);
  const [pokemonUrls, setPokemonUrls] = useState([]);

  const getListPokemonsUrl = (url) => {
    axios
      .get(url)
      .then((response) => {
        setPokemonUrls(response.data.results);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const getPokemons = () => {
    let pokemons = [];

    pokemonUrls &&
      pokemonUrls.forEach((poke) => {
        axios
          .get(poke.url)
          .then((res) => {
            pokemons.push(res.data);
            if (pokemons.length === 20) {
              setHomePagePokemonList(pokemons);
            }
          })
          .catch((error) => {
            console.log(error.response);
          });
      });
  };

  useEffect(() => {
    getListPokemonsUrl(urlBase + "/pokemon/?limit=20&offset=20");
  }, []);

  useEffect(() => {
    getPokemons();
  }, [pokemonUrls]);

  const globalStateData = [
    homePagePokemonList,
    setHomePagePokemonList,
    pokedexPagePokemonList,
    setPokedexPagePokemonList,
  ];

  return (
    <PokedexGlobalContext.Provider value={globalStateData}>
      {props.children}
    </PokedexGlobalContext.Provider>
  );
};
export default GlobalState;
