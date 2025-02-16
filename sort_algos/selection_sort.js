function sortedList(unsortedList){
    const n = unsortedList.length
    for (let i= 0; i<n; i++){
        // Assume the current position as min
        let minIndex = i

        // find the min element's index from the rest of the list

        for (let j=i; j<n; j++){
            if(unsortedList[j] <unsortedList[minIndex]){
                minIndex = j
            }
        }
        [unsortedList[i],unsortedList[minIndex]] = [unsortedList[minIndex],unsortedList[i]]
    }
    return unsortedList
}
console.log(sortedList([1,3,5,4,2]))