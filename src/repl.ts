import { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input
    .trim()
    .toLowerCase()
    .split(" ")
    .filter((word) => word !== "");
}

export function startREPL(state: State) {
  state.readline.prompt();

  state.readline.on("line", async (input) => {
    const words = cleanInput(input);
    if (!words.length) {
      state.readline.prompt();
      return;
    }

    const commandName = words[0];

    const command = state.commands[commandName];
    if (!command) {
      console.log(`Unknown command: ${commandName}
        Type 'help' to see the list of available commands.`);
    }

    try {
      command.callback(state);
    } catch (error) {
      console.log(`Error executing command '${commandName}': ${error}`);
    }

    state.readline.prompt();
  });
}
