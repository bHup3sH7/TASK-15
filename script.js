const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Array:", array);


// Max Number IN the ARRAY
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max
}

console.log("Maximum number in the Array is:", findMax(array));

// Sum Of all The Elements
function totalSum(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total
}
console.log("Sum of ALL Elements is:", totalSum(array));

// Total Number of ODD numbers
function totalOdd(arr) {
    let counts = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            counts++;
        }
    }
    return counts
}
console.log("Total Numbers Of ODD number in the Array are:", totalOdd(array));
