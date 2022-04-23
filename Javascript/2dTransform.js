const d1 = [1, 2, 3];
const d2 = [4, 5, 6];
const d3 = [7, 8, 9, 11, 12, 13, 15];
const data = [d1, d2, d3];

function transfrom(data) {
    // Padding first row with 'undefined' to match size with third row
    data[0] = data[2].map((ele, colIndex) => data[0][colIndex] === undefined ? undefined : data[0][colIndex])

    // For each element of first row, mapping through that column in each row
    data[0].forEach((_, colIndex) => console.log(data.map(row => row[colIndex])));
}

transfrom(data);