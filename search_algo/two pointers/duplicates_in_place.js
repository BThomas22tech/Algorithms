function removeDuplicates(arr) {
    let slow = 0
    
   for(let fast= 0; fast<arr.length;fast++){
        if (arr[slow] !== arr[fast]){
            slow++
            arr[slow] = arr[fast]
        }
   
    }
    
    return slow + 1;
}