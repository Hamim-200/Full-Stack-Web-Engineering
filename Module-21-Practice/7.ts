// একটি function বানাও যা যেকােনা সংখ্যক number িনেয় তােদর sum করেব। 

function sumAll(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0)
}

console.log(sumAll(1, 2, 3, 4)); // 10
