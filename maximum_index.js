function maxIndexDiff(arr) {
    let maxDiff = -1;
    let i, j;
    let n = arr.length;

    for (i = 0; i < n; ++i) {
        for (j = n - 1; j > i; --j) {
            if (arr[j] >= arr[i] && maxDiff < j - i) 
                maxDiff = j - i;
            }
    }

    return maxDiff;
}

console.log(maxIndexDiff([9, 2, 3, 4, 5, 6, 7, 8, 18, 0 ]));
