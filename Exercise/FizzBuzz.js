let output = fizzBuzz(7);
console.log(output);


function fizzBuzz(input){
    if (typeof input !== 'number')
        return "Not A number";

    if(input % 3 === 0 && input % 5 === 0 )
        return "FizzBuzz";

    if(input % 3 === 0)
        return "Fizz";
    
    if(input % 5 === 0)
        return "Buzz";

    if(input % 3 !== 0 && input % 5 !== 0 )
        return input;
}


//other way of implementation
/*
fizzBuzz("gggo");

function fizzBuzz(num){
    if (typeof num !== 'number')
        console.log("Not A number");

    else if(num % 3 === 0 && num % 5 === 0 )
        console.log("FizzBuzz");

    else if(num % 3 === 0)
        console.log("Fizz");
    
    else if(num % 5 === 0)
        console.log("Buzz");

    else if(num % 3 !== 0 && num % 5 !== 0 )
        console.log(num);
}*/