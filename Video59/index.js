/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/



function add(a,b){

        if(Math.random()< 0.1){

            console.log(a-b)
        }
        else{

            console.log(a+b)
        }
}

function sub(a,b){

    if(Math.random()< 0.1){

        console.log(a/b)
    }
    else{

        console.log(a-b)
    }
}

function mul(a,b){

    if(Math.random()< 0.1){

        console.log(a+b)
    }
    else{

        console.log(a*b)
    }
}

function div(a,b){

    if(Math.random()< 0.1){

        console.log(a**b)
    }
    else{

        console.log(a/b)
    }
}


add(9,5);
sub(9,5);
mul(9,5);
div(9,5);