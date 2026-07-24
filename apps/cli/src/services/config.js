import fs from "fs";
import os from "os";
import path from "path";

const CONFIG_DIR = path.join(os.homedir(), ".baios");
const CONFIG_FILE = path.join(CONFIG_DIR, "config.json");

const DEFAULT_CONFIG = {
  version: "0.1.0",
  profile: "default",
  telemetry: false,
  workspace: "",
  createdBy: "BAIOS CLI"
};

export function initializeConfig() {
  let createdDir = false;
  let createdFile = false;

  if (!fs.existsSync(CONFIG_DIR)) {
    fs.mkdirSync(CONFIG_DIR, { recursive: true });
    createdDir = true;
  }

  if (!fs.existsSync(CONFIG_FILE)) {
    fs.writeFileSync(
      CONFIG_FILE,
      JSON.stringify(DEFAULT_CONFIG, null, 2)
    );
    createdFile = true;
  }

  return {
    configDir: CONFIG_DIR,
    configFile: CONFIG_FILE,
    createdDir,
    createdFile
  };
}
