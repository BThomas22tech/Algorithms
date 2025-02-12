function zeros(arr){
let left = 0
let right = arr.length-1

while (left < right){
    if (arr[right]=== 0){
        right--
    }
    if (arr[left]!==0){
        left++
    }
    else{
        [arr[left],arr[right]] = [arr[right],arr[left]]
    }
}
return arr
}
// console.log(zeros([1,2,0,5,0]))
// console.log(zeros([0,0,0,0,0]))
// console.log(zeros([10,20]))


function moveZeros(arr){
    let count = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i]!== 0){
            [arr[i],arr[count]] = [arr[count], arr[i]]
            count++
        }
    }
}