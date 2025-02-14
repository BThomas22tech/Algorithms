var missingNumber = function (nums) {
    let count = -1

    for (let i = 0; i <= nums.length; i++) {
        count += 1
        if (!nums.includes(count)) {
            return count
        }

    }

};
console.log(missingNumber([3, 0, 1])) //2