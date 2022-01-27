// NaN(Not-A-Number, its a global Object, its is under global scope)

console.log("Hello" - 5);

var myNumber = 9431686387;
var myName = "saurabh";
console.log(isNaN(myNumber));
console.log(isNaN(myName));

if (isNaN(myName)) {
  console.log("Entered number is not a number");
} else {
  console.log("is a number");
}
