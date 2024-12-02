import { fileURLToPath } from 'url';
import { dirname } from 'path';

import parseInput from "../parser.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  try {
    const data = await parseInput({ rootDir: __dirname});
    console.log(solvePuzzle(data));
  } catch (err) {
    console.log(err)
  }
}

function solvePuzzle(data) {

}

main();
