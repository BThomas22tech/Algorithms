function longestSubarray(arr, k) {
    let preSumMap = new Map();
    let sum = 0;
    let Maxlen = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum === k) {
            Maxlen = Math.max(Maxlen, i + 1);
        }
        let rem = sum - k;
        if (preSumMap.has(rem)) {
            let len = i - preSumMap.get(rem);
            Maxlen = Math.max(Maxlen, len);
        }
        if (!preSumMap.has(sum)) {
            preSumMap.set(sum, i);
        }
    }
    return Maxlen;
}

console.log(longestSubarray([10, 5, 2, 7, 1, -10], 15));
