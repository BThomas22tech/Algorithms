twoSum = function(nums, target) {
    let hash = {}
    for (let i = 0; i < nums.length; i++){
        let total = target- nums[i]
        if (total in hash){
           return [i, hash[total]]
        }
       hash[nums[i]] = i
    }
    
    
};