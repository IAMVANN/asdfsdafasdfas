const scanner = require("readline-sync");
let valid = false;
let lowerBound;
let upperBound;
let sum = 0;
let stringerForLowerBound;
let stringerForUpperBound;
console.log("")
while(valid == false) {
    stringerForLowerBound = scanner.question("Lower Bound: ");
     lowerBound = Number(stringerForLowerBound);
    stringerForUpperBound = scanner.question("Upper Bound: ");
     upperBound = Number(stringerForUpperBound);
    if(upperBound > lowerBound && Number.MIN_SAFE_INTEGER <= lowerBound && upperBound <= Number.MAX_SAFE_INTEGER && Number.isNaN(lowerBound) == false && Number.isNaN(upperBound) == false && stringerForLowerBound.includes(".") == false && stringerForUpperBound.includes(".") == false && stringerForLowerBound !== "" && stringerForUpperBound !== ""){
        valid = true;
    }
}
while(lowerBound <= upperBound){
    if(lowerBound % 2 == 0){
    sum += lowerBound;
}
lowerBound++;
}
sum = sum.toLocaleString("en")
console.log("\n" + sum + ".");
