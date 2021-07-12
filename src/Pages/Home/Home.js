import React, { useContext } from "react";
import styled from "styled-components";
import CardPokemon from "../../Components/CardPokemon/CardPokemon";
import PokedexGlobalContext from "../../GlobalState/PokedexGlobalContext";
import backgorundHome from "../../assents/background2.mov";
import musicBackground from "../../assents/musicbackground.mp3";
import Header from "../../Components/Header/Header";
import labenu from "../../assents/labenu.png";

const DivHeader = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
`;
const DivPokemons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 60%;
  margin-top: 50px;
  position: absolute;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  bottom: 0;
  position: relative;
`;
const Video = styled.video`
  opacity: 0.7;
  position: fixed;
`;
export const Img = styled.img`
  position: fixed;
  margin-left: 50px;
  margin-bottom: 10px;
  left: 0;
  bottom: 0;
  width: 10%;
`;

const Home = () => {
  const [homePagePokemonList, setHomePagePokemonList] =
    useContext(PokedexGlobalContext);

  const selectPokemonBackgroundColor = (typePokemon) => {
    switch (typePokemon) {
      case "normal":
        return "#E0EEE0";
      case "grass":
        return "PaleGreen";
      case "ground":
        return "#EEE5DE";
      case "poison":
        return "#ebdaf9";
      case "water":
        return "#87CEEB";
      case "fire":
        return "#fae4e2";
      case "electric":
        return "#f8f5c6";
      case "fairy":
        return "#f8c6e7";
    }
  };

  const pokemonsCard = homePagePokemonList.map((pokemon, index) => {
    return (
      <CardPokemon
        // type={pokemon.types[0].type.name}
        name={pokemon.name}
        background={selectPokemonBackgroundColor(pokemon.types[0].type.name)}
        src={pokemon.sprites.other.dream_world.front_default}
      />
    );
  });

  return (
    <Div>
      <Video autoPlay muted loop play playbackRate="5">
        <source src={backgorundHome} type={"video/mp4"} />
      </Video>

      <audio autoPlay loop>
        <source src={musicBackground} type={"audio/mpeg"} />
      </audio>
      <DivHeader>
        <Header />
      </DivHeader>

      <DivPokemons>{pokemonsCard}</DivPokemons>
      <Img src={labenu} />
    </Div>
  );
};
export default Home;
