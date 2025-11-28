import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapBack } from "./command_map.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

import type { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the PokeTS REPL",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays help information about available commands",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays a list of location areas from the PokeAPI",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description:
        "Displays the previous list of location areas from the PokeAPI",
      callback: commandMapBack,
    },
    explore: {
      name: "explore",
      description: "Explores a specific location for Pokémon encounters",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Catches a Pokemon",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Inspects a caught Pokemon",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "Displays all caught Pokemon in the Pokedex",
      callback: commandPokedex,
    },
  };
}
