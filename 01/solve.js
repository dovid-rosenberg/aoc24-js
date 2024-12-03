import { fileURLToPath } from "url";
import { dirname } from "path";
import init from '../init.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputFileName = 'input.txt';

const lArr = [], rArr = [];

const lineCb = line => {
  const [l, r] = line.trim().split(/\s+/);
  lArr.push(parseInt(l, 10));
  rArr.push(parseInt(r, 10));
};

const solve1 = () => {
  [lArr, rArr].forEach(arr => arr.sort());
  const total = lArr.reduce((acc, l, i) => acc + Math.abs(l - rArr[i]), 0);
  console.log("P1 solution:", total);
};

const solve2 = () => {
  const total = lArr.reduce((acc, l) => acc + l * rArr.filter(r => r === l).length, 0);
  console.log("P2 solution:", total);
};

init({ rootDir: __dirname, inputFileName, lineCb, solve1, solve2 });