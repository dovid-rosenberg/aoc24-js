import { fileURLToPath } from "url";
import { dirname } from "path";
import readline from "readline";
import { createReadStream } from "node:fs";

const __dirname = dirname(fileURLToPath(`${import.meta.url}/index.txt`));

const rl = readline.createInterface({
  input: createReadStream(__dirname),
  crlfDelay: Infinity,
});

const lArr = [];
const rArr = [];

rl.on("line", (line) => {
  const [l, r] = line.trim().split(/\s+/);
  console.log("l", l, "r", r);
  lArr.push(parseInt(l, 10));
  rArr.push(parseInt(r, 10));
  return;
});

function part1() {
  console.log("part one solution:", lArr);
}

function part2() {
  console.log("part one solution:");
}

rl.on("close", () => {
  part1();
  part2();
});

// async function main() {
//   try {
//     const data = await parseInput({ rootDir: __dirname });
//     console.log(solvePuzzle(data));
//   } catch (err) {
//     console.log(err);
//   }
// }

// function solvePuzzle(data) {
//   const leftArr = data.map((c) => Number(c.split("   ")[0])).sort();
//   const rightArr = data.map((c) => Number(c.split("   ")[1])).sort();

//   const diffs = leftArr.map((l, i) => Math.abs(l - rightArr[i]));

//   return diffs.reduce((acc, curr) => acc + curr);
// }

// main();
