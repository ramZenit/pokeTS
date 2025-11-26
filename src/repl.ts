import { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input
    .trim()
    .toLowerCase()
    .split(" ")
    .filter((word) => word !== "");
}

export async function startREPL(state: State) {
  state.readline.prompt();

  state.readline.on("line", async (input) => {
    const words = cleanInput(input);
    if (!words.length) {
      state.readline.prompt();
      return;
    }

    const commandName = words[0];
    const args = words.slice(1);

    const command = state.commands[commandName];
    if (!command) {
      console.log(`Unknown command: ${commandName}
        Type 'help' to see the list of available commands.`);
    }

    try {
      await command.callback(state, ...args);
    } catch (error) {
      console.log(
        `Error executing command '${commandName}': ${(error as Error).message}`
      );
    }

    state.readline.prompt();
  });
}
