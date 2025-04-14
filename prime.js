
//FUNCTION FOR RETURNING TRUE IF PRIME AND FALSE IF NOT PRIME
function thisPrime (number){
    if(number < 2){
        return false;
    }
    for(let i = 2; i * i <= number; i++ ){
        if(number % 2 === 0){
            return false;
        }
    }
    return true;
}
console.log(thisPrime(2))