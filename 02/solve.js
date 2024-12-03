import { fileURLToPath } from "url";
import { dirname } from "path";
import init from '../init.js'

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputFileName = 'input.txt'

const data = [];
const lineCb = line => data.push(line.split(' ').map(Number));

const isSafe = report => {
  const ascending = report[0] < report[1];
  for (let i = 0; i < report.length; i++) {
    if (report[i] === report[i + 1] || Math.abs(report[i] - report[i + 1]) > 3 ||
        (ascending && report[i] > report[i + 1]) || (!ascending && report[i] < report[i + 1])) {
      return { isSafe: false, badIndex: i };
    }
  }
  return { isSafe: true };
};

const solve1 = () => {
  let safeCount = 0;
  for (const report of data) {
    if (isSafe(report).isSafe) safeCount++;
  }
  console.log("P1 solution:", safeCount);
};

const solve2 = () => {
  let safeCount = 0;
  for (const report of data) {
    let alreadyTolerated = false;
    const safetyCheck = isSafe(report);

    if (safetyCheck.isSafe) {
      safeCount++;
    } else if (!alreadyTolerated) {
      alreadyTolerated = true;
      for (let i = 0; i < report.length; i++) {
        const newReport = [...report];
        newReport.splice(i, 1);
        if (isSafe(newReport).isSafe && i === report.length - 1) {
          safeCount++;
        }
      }
    }
  }
  console.log("P2 solution:", safeCount);
};

init({ rootDir: __dirname, inputFileName, lineCb, solve1, solve2 });