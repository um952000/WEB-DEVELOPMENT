let a = prompt("Enter the first number")

let b = prompt("Enter the second number")

if(isNaN(a) || isNaN(b)){

    throw SyntaxError("Sorry this is not allowed");
}

let sum = parseInt(a) + parseInt(b);


function main(){

try {

    console.log("The sum is",sum*x);
    return true;
    
} catch (error) {
    
    console.log("Error aa gaya bhai");
    return false;

} finally{

    console.log("files are being closed and db connection is being closed");
}

// instead of return statement in try and catch block 
//  the finally statement still be execute
// which is the use-case of finally block

}

let c = main();5


