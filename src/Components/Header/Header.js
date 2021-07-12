import React from "react";

import { useHistory } from "react-router-dom";
import pokeApi from "../../assents/pokeapi_256.png";
import { Button, Div, Img } from "./styledHeader";



const Header = () => {
  const history = useHistory();

  return (
    <Div>
      <Img src={pokeApi} />
      <div>
        <Button onClick={() => alert("espera mais um pouco que vai rolar!")}>Pokedex</Button>
        <Button onClick={() => alert("volte mais tarde, a casa esta ainda sendo organizada")}>Pokedetails</Button>
        <Button onClick={() => alert("vai rolar")}>Home</Button>
      </div>
    </Div>
  );
};
export default Header;
