import { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
  if (args.length != 1) {
    throw new Error("Usage: explore <location>");
  }
  const locationName = args[0];
  const location = await state.pokeAPI.fetchLocation(locationName);
  console.log(`Pokémon encounters in ${location.name}:`);
  const { pokemon_encounters } = location;
  for (const encounter of pokemon_encounters) {
    console.log(`- ${encounter.pokemon.name}`);
  }
}
