//const http = require('node:http');  // using common JS

//const fs = require("fs") // using common JS

//import http from "http"  // using EcmaScript Modules (mention in package.json file also as "type" = "module")



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // using EcmaScript Modules (mention in package.json file also as "type" = "module")


//importing named export
import {a,b,c} from "./mymodule.js"
console.log(a,b,c);

//importing default export (kisi bhi name se import kar sakte hai yaha harry name se kiya hai)
import harry from "./mymodule.js"
console.log(harry)



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//using common JS

// const a = require("./mymodule2.js")
// console.log(a);


//Modules code actually wrap in the below function automatically by the nodejs
// (function(exports, require, module, __filename, __dirname){

//        //Modules code actually live here
// })