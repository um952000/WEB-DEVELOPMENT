console.log("This is strings tutorial")
let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length) // to know the size of string

let real_name = "Harry"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`) // This is called as string interpolation using template literal

let b = "ShivanSh"

// All these function will create new string only but 
//can not be able to change b hence string are immutable 
//in javascript

console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 5)) //index 1 to 5(5th index not included)
console.log(b.slice(1)) // index 1 to the end of string.......

console.log(b.replace("Sh", "77"))  // replace Sh by "77"
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya")) // b+(a+Aishwariya+Rahul+Priya)

// after doing all this string b will not be affected
console.log(b)