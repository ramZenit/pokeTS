export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const rawData = await getData(
      pageURL ? pageURL : `${PokeAPI.baseURL}/location-area`
    );
  }

  async fetchLocation(locationName: string): Promise<Location> {
    // implement this
  }
}

export type ShallowLocations = {
  // add properties here
};

export type Location = {
  // add properties here
};

async function getData(url: string): Promise<unknown> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}: ${response.statusText}`);
  }
  return response.json();
}
