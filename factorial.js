



//FINDING THE FACTORIAL OF A NUMBER GIVEN ITS NOT LESS THAN ZERO (0)
let count = 0;
nums.forEach(n => {
    console.log(`currently looping over ${n}`);
    count ++
}) 
console.log(`Total point count => ${count}`)

function getMeFactorial(num){
    if(num < 0){
        return 'Not a valid factorial!'
    }

    let counter = 1;
    for(let i = 2; i <= num; i++){
        counter *= i;
    }
    return counter;
}

console.log(getMeFactorial(2))


//HERE IS ME USING AN ARROW FUNCTION TO COMPUTE THE FACTORIAL
let Factorial = (value) => {
    if (value < 0){
        return undefined;
    }
    let recorder = 1;
    for(let i = 2; i <= value; i++){
        recorder *= i;
    }
    return recorder;
}
console.log(Factorial(5))