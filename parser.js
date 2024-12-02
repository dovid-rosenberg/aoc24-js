import * as fs from "node:fs/promises";
import * as path from "node:path";

export default async function ({
  rootDir,
  fileName = "input.txt",
  subsetLength,
}) {
  const rawData = await fs.readFile(path.join(rootDir, fileName), {
    encoding: "utf8",
  });
  let array = rawData.split("\n");
  if (subsetLength) {
    array = array.splice(0, subsetLength);
  }
  return array;
}
