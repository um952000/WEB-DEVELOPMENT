// let arr = [1, 2, 4, 5, 7]
// //  Index  0, 1, 2, 3, 4


// // strings are immutable in javascript but arrays are not....
// arr[0] = 5666;
// console.log(arr, typeof arr);
// console.log(arr.length)

// // arr.pop() will return the last element of the array and array size will 
// //be decreased by 1 and last element will be removed out from the array

// // arr.push("harry") will return the length of the array and at the end 
// //of the array harry will be added

// //arr.shift() will takeout the first element of the array and same element will be return
// //arr.unshift("Jack") jack will be added at beginning

// //arr1.concat(arr2,arr3) a new concatenated array will be returned as output1(arr1 + arr2 + arr3) but arr1 will not be changed

// arr.sort(); to sort the elements

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

// console.log(arr.toString()) //in string array will be comma(,) separated
// console.log(arr.join(" and "))


 
let numbers = [1, 2, 3, 4, 5] 
console.log(numbers.splice(1, 2)); // array will be returned as output from index 1 to 2 and initial array me se vo numbers hat jayenge.
console.log(numbers);  
console.log(numbers.splice(1, 3));   // array will be returned as output from index 1 to 3 and initial array me se vo numbers hat jayenge.
console.log(numbers);
numbers = [1, 2, 3, 4, 5]
numbers.splice(1, 3, 222, 333) // after splice 222 and 333 will be added at the spliced location
console.log(numbers);
// (4) [1, 222, 333, 5]