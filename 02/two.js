import { fileURLToPath } from 'url';
import { dirname } from 'path';

import parseInput from "../solve.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
    try {
        const data = await parseInput({ rootDir: __dirname, subsetLength:10});
        console.log(solvePuzzle(data));
    } catch (err) {
        console.log(err)
    }
}

function solvePuzzle(data) {
    let safeCount = 0
    for(const t of data) {
        const report = t.split(' ').map(c => Number(c))
        let hasLeeway = true
        const firstCheck = isSafe(report)
        if (firstCheck.result) {
            safeCount++
        } else {
            hasLeeway = false
            const t = [...report]
            t.splice(firstCheck.badIndex, 1)
            const secondCheck = isSafe(t)
            if (secondCheck.result) safeCount++
        }

    }

    return safeCount
}

function isSafe(report) {
    const ascending = report[0] < report[1]
    for (let i = 0; i < report.length; i++) {
        if((report[i] === report[i + 1]) ||
            (Math.abs(report[i] - report[i + 1]) > 3) ||
            (ascending && report[i] > report[i + 1]) ||
            (!ascending && report[i] < report[i + 1])) {
            return {result: false, badIndex: i}
        }
    }
    return {result: true}
}

main();
