
//FINDING THE MAX NUM IN AN ARRAY
let array = [1, 2, 1000, 3, -1]

function maxNum (array){
    if(array.length === 0){
        return undefined;
    }
    let max = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}
console.log(maxNum(array))
