function palindrome(number){

    let rev = 0
    let temp = number

    while (temp !=0){
        let id = temp % 10
        rev = rev * 10 + id
        temp = Math.floor(temp/10)
    }
    return (rev === number)

}
console.log(palindrome(78987))
console.log(palindrome(4553))
console.log(palindrome(367))
console.log(palindrome(363))