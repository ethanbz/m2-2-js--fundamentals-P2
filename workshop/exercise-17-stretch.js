// Q17
// Take the code you wrote in Q16 and now let's create a
// reusable function that takes two arguments,
// numbers that dictate the range within which to look for
// Armstrong numbers.

// This means that our code from the previous question will need to be tweaked a little
// to determine Armstrong numbers of different lengths.
// e.g.
// a number of 1 digit; each digit is to the power of 1
// a number of 2 digit; each digit is to the power of 2
// a number of 3 digit; each digit is to the power of 3
// a number of 4 digit; each digit is to the power of 4
// a number of 5 digit; each digit is to the power of 5

// See this site for a list of "narcissistic" numbers
// http://mathworld.wolfram.com/NarcissisticNumber.html

function identifyArmstrongNumbers(num1, num2) {
    let armstrongNumbers = [];

    for (let i = num1; i<num2+1; i++) {
        let d1 = Math.floor(i/10000);
        let d2 = Math.floor(i/1000%10);
        let d3 = Math.floor(i/100%10);
        let d4 = Math.floor(i%100/10);
        let d5 = Math.floor(i%10);
        
        let q = Number(i.toString().length);

        if ((Math.pow(d1, q) + Math.pow(d2, q) + Math.pow(d3, q) + Math.pow(d4, q) + Math.pow(d5, q)) === Number(`${d1}${d2}${d3}${d4}${d5}`)) {
            armstrongNumbers.push(i);
        }
    }

    return armstrongNumbers;
}

console.log(identifyArmstrongNumbers(100, 99999));
