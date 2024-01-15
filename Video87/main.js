const fs = require("fs")
 //const fs = require(fs/promises)

console.log("Starting")

//fs.writeFileSync("harry.txt", "Harry is a good boy")  // synchronously creating and writing file

fs.writeFile("harry2.txt", "harry is a good boy2",()=>{

      console.log("file creation done or it may exist already")
      fs.readFile("harry2.txt",(error,data)=>{

        console.log(error,data.toString())
      })
})

// Adding data to a file
fs.appendFile("harry.txt", " harry bro", (e,d)=>{
       console.log(d)
})

// where harry bro is the data

console.log("Ending")