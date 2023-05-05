console.log(myVardeclared);
var myVardeclared;
myVardeclared = 70;
myVardeclared = 71;

console.log(myVarInitialized);
var myVarInitialized = 90;
myVarInitialized = 91;

//accessing let and const before they are declared result in ReferenceError
console.log(myLetDeclared);
let myLetDeclared;
myLetDeclared = 50;

console.log(myLetInitialized);
let myLetInitialized = 30;

console.log(printOutput());

function printOutput() {
  console.log("function print");
  return "function output";
}
