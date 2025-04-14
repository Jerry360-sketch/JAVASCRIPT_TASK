
//FINDING THE INDEX OF AN ELEMENT IN AN ARRAY
let array = [299, 40, 29, 100, 500, 50];

function findIndex (array, element){
    for(let i = 0; i < array.length; i++){
        if(array[i] === element){
            return`The element ${element} in the array has an index of ${i}`
            
        }
    }
    
}

console.log(findIndex(array, 500))
