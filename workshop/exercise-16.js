// Q16
// Write a JavaScript program to find ALL the Armstrong
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer
// such that the sum of the cubes of its digits is equal
// to the number itself. For example,
// 371 is an Armstrong number since 3^3 + 7^3 + 1^3 = 371.

let armstrongNumbers = [];

for (let i = 100; i<1000; i++) {
    let d1 = Math.floor(i/100);
    let d2 = Math.floor(i%100/10);
    let d3 = Math.floor(i%10);

    if ((d1*d1*d1 + d2*d2*d2 + d3*d3*d3) === Number(`${d1}${d2}${d3}`)) {
        armstrongNumbers.push(i);
    }
}

console.log(armstrongNumbers);

let bool = 5 === Number(`${0}${0}${5}`);
console.log(bool);
