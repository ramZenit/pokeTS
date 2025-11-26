import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";

import type { CLICommand } from "./command.js";

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
  };
}
