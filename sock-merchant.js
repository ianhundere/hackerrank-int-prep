// you have an array of numbers and you must match
// each number with its pair

function sockMerch(n, ar) {
    let result = 0;
    ar.sort();
    for (let i = 0; i < n; i++) {
        if (ar[i] === ar[i + 1]) {
            i++;
            result++;
        }
    }
    return result;
}

console.log(
    sockMerch(22, [
        2,
        1,
        4,
        3,
        3,
        6,
        9,
        6,
        4,
        3,
        5,
        4,
        3,
        2,
        3,
        4,
        5,
        2,
        56,
        7,
        4,
        56
    ])
);
