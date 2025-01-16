function capitalize(str){
    str = str.split(" ")
    newString= []
    
    for(let word of str)
{
    let start = word[0].toUpperCase()
    let end = word.slice(1)
    newString.push(start + end)
}
return newString.join(" ")
}

console.log(capitalize("this is very cool"))
console.log(capitalize("this something very fun to do!"))
