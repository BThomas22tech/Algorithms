function maxMinAvg(arr) {
    let arrnew = [];
    let max_num = null;
    let min_num = null;
    let sum = 0


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max_num) {
            max_num = arr[i];
        }
        if (arr[i] < min_num) {
            min_num = arr[i];
        }
        sum += arr[i]
    }
    let avg =  sum /arr.length
    arrnew = [max_num,min_num,avg]


    return arrnew;
}
console.log(maxMinAvg([1, 5, 10, -2]));

function max(arr) {
    
    return max_num;
}
function min(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min_num) {
            min_num = arr[i];
        }
    }
    return min_num;
}

function avg(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
       
    }
    let avg = sum / count;

    return avg;
}
