import fs from "fs/promises"

let a = await fs.readFile("harry.txt")

console.log(a.toString())

let b = await fs.appendFile("harry.txt","\n\n\n\n this is amazing promise")