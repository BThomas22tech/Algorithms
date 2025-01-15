function chunck(array, size) {
    newArray = [];

    for (let i = 0; i < array.length; i += size) {
        newArray.push(array.slice(i,i + size));
    }
    return newArray;
} 

console.log(chunck([1, 2, 3, 4],2));
console.log(chunck([1, 2, 3, 4,5,6,7,8],3));
console.log(chunck([1, 2, 3, 4,5],2));
