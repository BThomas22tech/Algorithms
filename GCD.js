// function GCD(a,b){
//     let sum = 0

//     sum = Math.abs(b- a)
    

//     if (a % sum === 0 && b% sum=== 0){
//         return sum
//     }
//     else{

//         if (sum > a || sum > b) {
//             sum = Math.abs(sum - Math.min(a, b));
//         } else {
//             sum--;
//         }
//     }
//     return 1
// }
// console.log(GCD(4,6))
// console.log(GCD(100,200))
// console.log(GCD(7,13))
// console.log(GCD(10,15))
// console.log(GCD(5,5))
// console.log(GCD(9,28))


function GCD2(a,b){
    let res = Math.min(a,b)

    while(res>0){
        if (a % res=== 0 && b%res === 0){
            return res
        }
        res--
    }
    return res
}
console.log(GCD2(10,15))
console.log(GCD2(5,5))


function GCD3(a,b){
    if (b === 0){
        return a
    }

    return GCD3(b,a%b)
}

console.log(GCD3(15,10))
console.log(GCD3(5,5))