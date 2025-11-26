import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./commands.js";

export function cleanInput(input: string): string[] {
  return input
    .trim()
    .toLowerCase()
    .split(" ")
    .filter((word) => word !== "");
}

export function startREPL() {
  const cmds = getCommands();
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "PokeTS > ",
  });

  rl.prompt();

  rl.on("line", async (line) => {
    const words = cleanInput(line);
    if (!words.length) {
      rl.prompt();
      return;
    }

    const commandName = words[0];

    const command = cmds[commandName];
    if (!command) {
      console.log(`Unknown command: ${commandName}
        Type 'help' to see the list of available commands.`);
    }

    try {
      command.callback(cmds);
    } catch (error) {
      console.log(`Error executing command '${commandName}': ${error}`);
    }

    rl.prompt();
  });
}
