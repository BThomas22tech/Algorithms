function isPalindrome(s) {
    s = s.replace(/[^\w]|_/g, "").toLowerCase()
    let left = 0
    let right = s.length-1
    
    while (left < right) {
    if(s[left] !== s[right]){
       return false
    }
        left++
        right--
}
   return true
}
console.log(isPalindrome("Do geese see God"))