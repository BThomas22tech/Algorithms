// function reverse(str){
//     let reversed = ""
//     for ( let char of str){ 
//         reversed = char + reversed
//     }
// return reversed
// }

// console.log(reverse("abc"))


// Builtin reverse ##############
// function reverse(str){
//     const strToArray = str.split("")

//     strToArray.reverse()
//     return strToArray.join('')

// }

// console.log(reverse('CodingMoney'))

// chain reverse################

function reverse(str){
    return str.split('').reverse().join('')
}
// console.log(reverse('CodingMoney'))



// ######### given an integer, return integer that is the reverse ordering of numbers

function reverseInt(n){
    let newNumb = ""
    n = n.toString()
for (let number in n){
    newNumb = n[number] + newNumb
}
return parseInt(newNumb) * Math.sign(n)
}

console.log(reverseInt(-51))