import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapBack } from "./command_map.js";

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
  };
}
