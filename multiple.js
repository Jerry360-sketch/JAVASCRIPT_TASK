//FUNCTION FOR FINDING THE MULTIPLES OF A NUMBER

let mul = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
function multiples(array, number){
    let multiples = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] % number === 0){
            multiples.push(array[i]);
        }
    }
    return multiples;
}
console.log(multiples(mul , 3))
