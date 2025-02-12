function reverseArray(arr){
let newArray = []

for (let i = arr.length-1; i >= 0; i--){
    newArray.push(arr[i])
}
return newArray
}
// console.log(reverseArray([1,2,3,4]))
// console.log(reverseArray([4]))


function reverseArray2(arr){

let left = 0
let right = arr.length-1

while (left < right){
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
}
return arr

}
console.log(reverseArray2([1,2,3,4]))
console.log(reverseArray2([1,2,3,5]))