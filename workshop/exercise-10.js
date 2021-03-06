// You are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q10
// Returns true if every element of lst is of length at least 5.
// Otherwise returns false.
function allLong(lst) {
  // lst is an array of strings
    let boolArr = lst.map(function (str) {
      return str.length > 4;
    });

    return !(boolArr.includes(false));
}
// -------------------------------------------------------------------------
console.log('Q8 - case 1', allLong(['Scott', 'Bob', 'Ric', 'Jim']));
console.log(
  'Q8 - case 2',
  allLong(['Cyborg', 'Robin', 'Batman', 'Superman', 'Aquaman', 'Flash'])
);
