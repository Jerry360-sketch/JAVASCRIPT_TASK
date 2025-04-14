


console.log('Task 1: FINDING THE SUM OF ELEMENTS IN AN ARRAY');
//FINDING THE SUM OF ELEMENTS IN AN ARRAY AND RETURNING THE VALUE OF THE ADDITION OF ALL THE ELEMENTS IN THE ARRAY 
let nums = [2, 4, 5, 3, 6, 9, 8];
let nums1 = [3, 2, 9, 3, 2];

function totalSumElement(array){
    let summer = 0;
    for(let i = 0; i < array.length; i++){
        summer += array[i];
    }
    return `Here is the total sum of elements in the array =>${summer}`
}

console.log(totalSumElement(nums1))
console.log('\n' + '-'. repeat(130))
