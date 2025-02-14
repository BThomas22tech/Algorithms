function maxSecondmax(arr){
let max = -1
let secondMax = -1
for (let i = 0; i<arr.length;i++){
    if(arr[i]>max){
        secondMax = max
        max = arr[i]
    }

    if(arr[i]<max && arr[i]>secondMax){
        secondMax = arr[i]
    }
}
return [max,secondMax]
}

console.log(maxSecondmax([2,1,2]))
console.log(maxSecondmax([1,2,3,4,5]))