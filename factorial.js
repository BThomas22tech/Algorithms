function factorial(n){
    if (n === 1 || n === 0){
        return n
    }
    return n * factorial(n-1)
}

console.log(factorial(4))

function fact(n){
    let rev = 1

    for  (let i = 2; i <=n; i++){
        rev = rev * i
    }
    return rev
}

console.log(fact(4))