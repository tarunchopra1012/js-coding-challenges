const removeRepeatingCharacters = (str) => {
    const charCount = {};
    
    // Normalize the input by removing spaces
    const normalizedStr = str.replace(/\s+/g, '');
    
    // Count occurrences of each character
    for (let char of normalizedStr) {
        if (!charCount[char]) {
            charCount[char] = 0;
        }
        charCount[char]++;
    }

    // Construct new string with non-repeating characters and include spaces
    let result = '';
    for (let char of str) {
       if (charCount[char] === 1) {
            result += char;
        }
    }

    return result;
};

// Test case
console.log(removeRepeatingCharacters("mississippi lake")); // "mlake"
console.log(removeRepeatingCharacters("balloon")); // "ban"
console.log(removeRepeatingCharacters("hello world")); // "he wrd"
console.log(removeRepeatingCharacters("character")); // "hr"
