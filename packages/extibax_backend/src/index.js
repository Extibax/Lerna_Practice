/* Modules */
import express from "express";

const app = express();

async function main() {
  await app.listen(3000);
  console.log("Server on port 3000");
}

main();
