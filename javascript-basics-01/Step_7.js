
let shoeSize, birthYear, res;

shoeSize = parseFloat(prompt("Please enter your shoe size:"));

birthYear = parseInt(prompt("Please enter your birth year:"));
res = ((shoeSize * 2 + 5) * 50) - birthYear + 1766;

alert("The result of the calculations is: " + res);
