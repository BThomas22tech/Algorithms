function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (array[mid] === target) return mid;
        if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch([1, 2, 3,4,5,6], 3));


function firstNotSmaller(arr, target) {
    let left = 0
    let right = arr.length-1
    let boundary = -1
    
    while(left <= right){
        const mid = Math.floor((left + right)/2)
        if(arr[mid]>= target){
            boundary = mid
            right = mid -1
        }
        else{
        left = mid + 1
        }
    }
    return boundary;
}
