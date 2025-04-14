
//MERGE TWO ARRAY AND PERFORM A SORT OPERATION ON IT 
let arrayA = [8, 2, 3, 1, 4, 6,];
let arrayB = [10, 9, 0, 5, 11, 19];
let output = [];


function merge2Arrays(arrayA, arrayB,){

    for(let i = 0; i < arrayA.length; i++){
        output[output.length] = arrayA[i];
    }
    for(let i = 0; i < arrayB.length; i++){
        output[output.length] = arrayB[i];
    }
    console.log('Output before sorting =>' ,output)
}


function sortOutput(arr) {
    let sortedArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let j = sortedArray.length - 1;

        while (j >= 0 && sortedArray[j] > current) {
            j--;
        }
        
        sortedArray[sortedArray.length] = current;
        for (let k = sortedArray.length - 1; k > j + 1; k--) {
            sortedArray[k] = sortedArray[k - 1];
        }
        sortedArray[j + 1] = current;
    }
    
    console.log('Output after sorting =>', sortedArray)
}

merge2Arrays(arrayA, arrayB)
sortOutput(output)




