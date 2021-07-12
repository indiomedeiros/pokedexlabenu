import React from "react";

export const goToPokedex = (history) => {
  return history.push("/pokedex");
};
export const goToHome = (history) => {
  return history.push("/");
};
export const goToPokedetails = (history, id) => {
  return history.push(`/pokedetails/${id}`);
};
