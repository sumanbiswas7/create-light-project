#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCmd = `git clone --depth 1 https://github.com/sumanbiswas7/create-light-project.git ${repoName}`;
const installDepsCmd = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCmd);
if (!checkedOut) process.exit();

console.log(`Congratulations! Project initialized successfully`);
console.log(`Run cd ${repoName} && npm install && npm run dev`);


