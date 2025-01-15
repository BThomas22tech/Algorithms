function maxChar(str){
let hashtable = {}

for (let char in str){
    if (!hashtable[str[char]]){
        hashtable[str[char]] = 1
    }
    else{
        hashtable[str[char]] += 1
    }
}

for (let letter in hashtable){
    if (hashtable[letter]> 1)
        return letter
}

}
console.log(maxChar("appple"))
console.log(maxChar(" appple 12111115"))
console.log(maxChar("abccccccccd"))