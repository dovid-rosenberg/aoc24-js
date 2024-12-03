import { fileURLToPath } from "url";
import { dirname } from "path";
import solve from '../solve.js'

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputFileName = 'input.txt'

const lArr = [];
const rArr = [];

function lineCb(line) {
  const [l, r] = line.trim().split(/\s+/);
  lArr.push(parseInt(l, 10));
  rArr.push(parseInt(r, 10));
}

function solve1() {
  [lArr, rArr].map(a => a.sort())
  const diffs = lArr.map((l, i) => Math.abs(l - rArr[i]));

  const total = diffs.reduce((acc, curr) => acc + curr);
  console.log("part one solution:", total);
}

function solve2() {
  const simScores =  lArr.map(l => {
    const simCount = rArr.filter(r => r === l).length
    return l * simCount
  })

  const total = simScores.reduce((acc, curr) => acc + curr)
  console.log("part two solution:", total);
}

solve({
  rootDir: __dirname,
  inputFileName,
  lineCb,
  solve1,
  solve2
})