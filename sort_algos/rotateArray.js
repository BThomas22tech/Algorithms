// Given an array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps,
//  where d is a positive integer. Do the mentioned change in the array in place.
// Note: Consider the array as circular.


// Input: arr[] = [1, 2, 3, 4, 5], d = 2
// Output: [3, 4, 5, 1, 2]
// Explanation: when rotated by 2 elements, it becomes 3 4 5 1 2.

function rotateArray(arr,d){
for (let i = 0; i < d; i++){
let x = arr[0]
for (let j = 0; j<arr.length-1; j++){
    arr[j] = arr[j+1]
}
arr[arr.length-1] = x
}

return arr
}
                //       3  
// console.log(rotateArray([1,2,3,4,5],2))


function rotateArr(arr, d) {
    let n = arr.length;

    // Handle case when d > n
    d %= n;

    // Storing rotated version of array
    let temp = new Array(n);

    // Copy last n - d elements to the front of temp
    for (let i = 0; i < n - d; i++)
        temp[i] = arr[d + i];

    // Copy the first d elements to the back of temp
    for (let i = 0; i < d; i++)
        temp[n - d + i] = arr[i];

    // Copying the elements of temp in arr
    // to get the final rotated array
    for (let i = 0; i < n; i++)
        arr[i] = temp[i];
}

function isSorted(n,a) {
    for (let i = 1; i< a.length; i++) {
        if (a[i] > a[i - 1]) {
            return 0
        }
    }
    return 1


}
console.log(isSorted(5,[1,2,3,6,4,5]))