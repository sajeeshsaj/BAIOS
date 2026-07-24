#!/usr/bin/env node

import { help } from "./commands/help.js";
import { version } from "./commands/version.js";
import { doctor } from "./commands/doctor.js";
import { init } from "./commands/init.js";

const command = process.argv[2] || "help";

console.log("==================================");
console.log("      BAIOS CLI v0.1.0");
console.log(" Bro&Bro AI Operating System");
console.log("==================================");
console.log("");

switch (command) {
  case "version":
    version();
    break;

  case "doctor":
    doctor();
    break;

  case "init":
    init();
    break;

  default:
    help();
}
