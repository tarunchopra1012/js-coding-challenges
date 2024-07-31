const areAnagrams = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    const getCharCount = (str) => {
        const charCount = {};
        for (let char of str) {
            if (charCount[char]) {
                charCount[char]++;
            } else {
                charCount[char] = 1;
            }
        }
        return charCount;
    };

    const charCount1 = getCharCount(str1);
    const charCount2 = getCharCount(str2);

    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    return true;
};

// Test cases
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("triangle", "integral")); // true
console.log(areAnagrams("apple", "pale")); // false
console.log(areAnagrams("abc", "cba")); // true
console.log(areAnagrams("abcd", "abdc")); // true
console.log(areAnagrams("abcd", "abce")); // false
