function matrix(n) {
    let newArray = [];
    let counter = 1,
        startRow = 0,
        endRow = n - 1,
        startCol = 0,
        endCol = n - 1;
    for (let i = 0; i < n; i++) {
        newArray.push([]);
    }
    while (startRow <= endRow && startCol <= endCol) {
        // Top
        for (let i = startCol; i <= endCol; i++) {
            newArray[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // right
        for (let i = startRow; i <= endRow; i++) {
            newArray[i][endCol] = counter;
            counter++;
        }
        endCol--;

        // bottom
        for (let i = endCol; i >= startCol; i--) {
            newArray[endRow][i] = counter;
            counter++;
        }
        endRow--;
        // left
        for (let i = endRow; i >= startRow; i--) {
            newArray[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    console.log(newArray);

    return newArray;
}

matrix(4);
