
//FUNCTION FOR RETURNING TRUE IF PALINDROME AND FALSE IF NOT
function isPalindrome(word) {
    let start = 0;
    let end = 0;

    // Manually find the length of the string
    while (true) {
        if (word[end] === undefined) {
            break;
        }
        end = end + 1;
    }

    end = end - 1; // Last character index

    // Compare characters from both ends
    while (start < end) {
        if (word[start] !== word[end]) {
            return false;
        }
        start = start + 1;
        end = end - 1;
    }

    return true;
}

console.log(isPalindrome('TOMORROW'))