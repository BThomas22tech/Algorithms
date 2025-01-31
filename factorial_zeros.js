function fact(n){
let sum = 1
for (let i = 2; i <= n; i++){
    sum = sum * i
}

let count = 0
while (sum % 10 === 0){
    count ++
    sum = sum/10
}

return count
}
// console.log(fact(6))
// console.log(fact(1))


function CountZerosFact(n){
    let res = 0

    for (let i =5; i <=n; i = i * 5){
        res = res + Math.floor(n/i)
    }
    return res
}

console.log(CountZerosFact(251))