import test from "node:test";
import assert from "node:assert/strict";

test("Version number", () => {
  const version = "0.1.0";
  assert.equal(version, "0.1.0");
});
