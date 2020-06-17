// Q12
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well
function calculateAverage(grades) {
    let sum = 0;
    grades.forEach(function (grade) {
        sum += grade;
        
    });
    let mark = Math.round(sum/grades.length);
    return mark < 60 ? 'F'
        : mark < 70 ? 'D'
        : mark < 80 ? 'C'
        : mark < 90 ? 'B'
        : 'A';
    
}

console.log(calculateAverage([48, 95, 65, 48, 59, 78, 72, 65]));
