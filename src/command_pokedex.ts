import { stat } from "fs";
import { State } from "./state.js";

export async function commandPokedex(state: State) {
  if (Object.keys(state.pokedex).length === 0) {
    console.log("Your Pokedex is empty. Catch some Pokémon first!");
    return;
  }
  console.log("Pokedex Entries:");
  for (const [_, pokemon] of Object.entries(state.pokedex)) {
    console.log(`- ${pokemon.name}`);
  }
}
