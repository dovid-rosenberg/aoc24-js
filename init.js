import readline from "readline";
import { createReadStream } from "node:fs";

export default async function ({
  rootDir,
  inputFileName = "input.txt",
  lineCb,
  solve1,
  solve2,
}) {
  const rl = readline.createInterface({
    input: createReadStream(`${rootDir}/${inputFileName}`),
    crlfDelay: Infinity,
  });

  rl.on('line', lineCb)
  rl.on("close", () => {
    if (solve1) solve1();
    if (solve2) solve2();
  });
}
