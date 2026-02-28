import { test, describe, before, after } from "node:test";
import assert from "node:assert";
import app from "./app.js";

let server;

const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;

before(async () => {
  return new Promise((resolve, reject) => {
    server = app.listen(PORT, () => resolve());
    server.on("error", reject);
  });
});

after(async () => {
  return new Promise((resolve, reject) => {
    server.close((err) => {
      if (err) return reject(err);
      resolve();
    });
  });
});

describe("GET /jobs", () => {
  test("should return 200", async () => {
    const response = await fetch(`${BASE_URL}/jobs`);
    assert.strictEqual(response.status, 200);

    const json = await response.json();
    assert.ok(Array.isArray(json.data), "La respuesta debe ser un array");
  });

  test("should filter jobs by technology", async () => {
    const tech = "Node.js";
    const response = await fetch(`${BASE_URL}/jobs?technology=${tech}`);
    assert.strictEqual(response.status, 200);

    const json = await response.json();
    assert.ok(
      json.data.every((job) => job.data.technology.includes(tech)),
      "Todos los trabajos deben incluir la tecnología filtrada",
    );
  });
});
