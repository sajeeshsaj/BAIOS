import fs from "fs";
import os from "os";
import path from "path";

const CONFIG_FILE = path.join(os.homedir(), ".baios", "config.json");

export function config() {
  const action = process.argv[3];

  if (action === "show" || action === "get") {
    console.log(fs.readFileSync(CONFIG_FILE, "utf8"));
    return;
  }

  console.log("Usage:");
  console.log("  baios config show");
  console.log("  baios config get");
}
