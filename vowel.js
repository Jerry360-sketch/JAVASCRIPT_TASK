function stringInput (word){
    let vowel = 'aeiouAEIOU';
    let count = 0;

    for(let i = 0; i < word.length; i++){
        for(let j = 0; j < vowel.length; j++){
            if(word[i] === vowel[j]){
                count++;
                break;
            }
        }
    }
    return`There are ${count} vowels in the word => ${word}`
}
console.log(stringInput('fanen'))