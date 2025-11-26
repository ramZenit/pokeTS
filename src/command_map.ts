import { State } from "./state.js";

export async function commandMap(state: State) {
  const locations = await state.pokeAPI.fetchLocations(state.nextLocationsURL);

  state.nextLocationsURL = locations.next;
  state.previousLocationsURL = locations.previous;

  console.log("Location Areas:");
  locations.results.forEach((loc) => {
    console.log(`- ${loc.name}`);
  });
}

export async function commandMapBack(state: State) {
  if (!state.previousLocationsURL) {
    console.log("No previous locations available.");
    return;
  }
  const url = state.previousLocationsURL;
  const locations = await state.pokeAPI.fetchLocations(
    state.previousLocationsURL
  );
  state.nextLocationsURL = locations.next;
  state.previousLocationsURL = locations.previous;

  console.log("Location Areas:");
  locations.results.forEach((loc) => {
    console.log(`- ${loc.name}`);
  });
}
