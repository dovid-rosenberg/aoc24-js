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
    const leftArr = data.map(c => Number(c.split('   ')[0]))
    const rightArr = data.map(c => Number(c.split('   ')[1]))

    const simScores =  leftArr.map(l => {
        const simCount = rightArr.filter(r => r === l).length
        return l * simCount
    })

    return simScores.reduce((acc, curr) => acc + curr)
}

main();
