function findDisappearedNumbers(nums) {
    let n = nums.length
    let array = new Array(n+1).fill(-1)
    let secA = []

    for (let i = 0; i < nums.length; i++) {
        array[nums[i]] = nums[i]
    }
    for (let i = 1; i<array.length;i++){
        if (array[i] === -1){
            secA.push(i)
        }
    }
    return secA
};

console.log(findDisappearedNumbers([1,1]))