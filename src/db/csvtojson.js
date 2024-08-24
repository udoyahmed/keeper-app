import csvtojson from "csvtojson";
import fs from "fs";

const jsonArray = await csvtojson().fromFile("src/db/JSON.txt");

jsonArray.sort((a, b) => a.id - b.id);

export default jsonArray;

fs.writeFileSync("src/db/JSON.json", JSON.stringify(jsonArray))