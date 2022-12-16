#!/usr/bin/env node

// const { execSync } = require("child_process");
import chalk from "chalk";
import { execSync } from "child_process";

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(e);
    return false;
  }
  return true;
};

console.log(
  `
    ██╗     ██╗ ██████╗ ██╗  ██╗████████╗
    ██║     ██║██╔════╝ ██║  ██║╚══██╔══╝
    ██║     ██║██║  ███╗███████║   ██║   
    ██║     ██║██║   ██║██╔══██║   ██║   
    ███████╗██║╚██████╔╝██║  ██║   ██║   
    ╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   
    `
);

console.log(
  chalk.cyan.bold(
    "Welcome & Thanks for choosing " + chalk.white("Light") + "💡"
  )
);

const repoName = process.argv[2] || "my-app";
const gitCheckoutCmd = `git clone --depth 1 https://github.com/sumanbiswas7/create-light-project.git ${repoName}`;
const installDepsCmd = `cd ${repoName} && npm install`;

console.log(
  chalk
    .hex("#00D66F")
    .bold(
      "⚪ Cloning the repository with name " +
        chalk.hex("#D64D00").bold(repoName)
    )
);
const checkedOut = runCommand(gitCheckoutCmd);
if (!checkedOut) process.exit();

console.log(chalk.hex("#00D66F").bold("⚪ Downloading all dependencies..."));
const installedDeps = runCommand(installDepsCmd);
if (!installedDeps) process.exit();

console.log(
  chalk.hex("#00D62F").bold("Congratulations! ") +
    chalk.blueBright("You're all set ✅")
);
console.log(chalk.cyan("Run the following 👇"));
console.log(
  chalk.cyan(
    "➡️ " +
      chalk.hex("#FCB500").bold(`cd ${repoName}`) +
      " && " +
      chalk.hex("#FCB500").bold("npm run dev")
  )
);
// console.log(`Congratulations! Project initialized successfully`);
// console.log(`Run cd ${repoName} && npm run dev`);
