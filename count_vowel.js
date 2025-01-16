// function vowels(str){
//     let count = 0
//     let vowels = "aeiou"
//     // can use str.match(/[aeiou]/gi)
//     for (let char1 of str){
//        for (let char2 of vowels){
//         if (char1 === char2){
//             count++
//         }
//        }
//     }

// return count 
// }

// console.log(vowels("Coding Money"))
// console.log(vowels("How are you?"))


function vowels(str){
    const vowelCheck = ['a','e','i','o','u']

    let count = 0

    for (let char of str){
        if(vowelCheck.includes(char)) count++
    }
return count
}
console.log(vowels("Coding Money"))