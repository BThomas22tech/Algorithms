function maxChar(str) {
    let hashtable = {};
    let max = 0;
    let maxChar = "";

    for (let char of str) {
        hashtable[char] = hashtable[char] + 1 || 1
    }

    for (let letter in hashtable) {
        if (hashtable[letter] > max) {
            max = hashtable[letter];
            maxChar = letter;
        }
    }
    return maxChar;
}
console.log(maxChar("appple"));
console.log(maxChar(" appple 12111115"));
console.log(maxChar("abccccccccd"));
