import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Pokedetails from "../Pages/Pokedetails/Pokedetails";
import Pokedex from "../Pages/Pokedex/Pokedex";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/pokedex"}>
          <Pokedex />
        </Route>
        <Route exact path={"/pokedetails/:id"}>
          <Pokedetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
