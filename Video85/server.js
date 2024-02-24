// This code will not be visible to the user here we
//  will do the backend part like database connection 
// server making and connection to frontend etc 

// npm install slugify

var slugify = require('slugify')

 let a = slugify('some string') // some-string
  console.log(a);
// if you prefer something other than '-' as separator
let b = slugify('some string', '_')  // some_string
console.log(b)