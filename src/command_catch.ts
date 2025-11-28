import { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
  if (args.length != 1) {
    throw new Error("Usage: catch <pokemon>");
  }

  const pokemonName = args[0];

  const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);
  console.log(`Throwing a Pokeball at ${pokemonName}...`);
  const rand = Math.random();
  const catchSuccess = rand > pokemon.base_experience / 330;
  console.log(
    `(Debug: random number = ${rand.toFixed(3)}) - catch rate = ${(
      pokemon.base_experience / 330
    ).toFixed(3)}   `
  );
  if (catchSuccess) {
    console.log(`Congratulations! You caught a ${pokemon.name}!`);
  } else {
    console.log(`${pokemonName} escaped!`);
  }
}
