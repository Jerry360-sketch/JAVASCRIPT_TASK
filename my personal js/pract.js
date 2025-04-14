// let greet = () => {
//     console.log('hello world');
//     return 1;
// }
// console.log(greet())

// const twoSum = ( num1 , num2) => {
//     let result = num1 * num2;
//     return result  
// }

// console.log(twoSum(836526756834 , 477632))

// let names = ['sarah', 'naomi', 'molly', 'john', 'naomi', 'emma', 'michael'];

// let count = 0;
// names.forEach(value => {
//     console.log('Currently looping over =>', value);
//     count ++
// });
// console.log('Total count point =>', count)

// let nums = [2, 4, 1, 7, 8, 9, 10, 8];

// let timesTwo = nums.map((n) => n * 2)
// console.log(timesTwo)


// let slice = names.slice(0, 2)
// console.log(slice); console.log(names)
// let index = names.indexOf('naomi');
// let index2 = names.lastIndexOf('naomi');
// console.log(index);
// console.log(index2)

// let nums = [1, 2, 3, 4, 5, [6, 7, 8, [2, 4, [3, 3, 8, 9], 5]], 9, 10];
// let hereFlat = nums.flat(3);
// console.log(hereFlat)
// let namesCopy =[...names];

// namesCopy.splice(1, 2, 'bob', 'manuel');
// console.log(`Here are the elements of the first array -> ${names}`);
// console.log(`Here is the copy of the first array using the spread operator after splice on index 1 and index 2 -> ${namesCopy}`);

// console.log('--------------------------------------------------------------------------------------')
// let newNames = names.join(' and ')
// let conCat = names.concat(namesCopy);
// console.log(newNames);
// console.log(conCat);


let nums = [2, 200, 1, 7, 8, 9, 10, 8];
let maxNum = nums.reduce((a , b) => Math.max(a , b), -Infinity)
console.log(maxNum)