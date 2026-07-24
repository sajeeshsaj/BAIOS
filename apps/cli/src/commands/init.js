import { initializeConfig } from "../services/config.js";

export function init() {
  const result = initializeConfig();

  if (result.createdDir) {
    console.log(`✓ Created ${result.configDir}`);
  } else {
    console.log(`✓ Configuration directory exists`);
  }

  if (result.createdFile) {
    console.log(`✓ Created config.json`);
  } else {
    console.log(`✓ Configuration file exists`);
  }

  console.log("");
  console.log("Initialization complete.");
}
