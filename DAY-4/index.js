// function
// in-built func : console.log(); typeof()
//  manual func: it will provide functionality
//function can be call multiple time

// function demo(){
//     console.log("Inside code")
// }
// demo();
// console.log("Outside code")

function addition(){
    console.log(2+3)
}
addition();

function findgreaterNumber() {
  var num1 = 565655;
  var num2 = 666759;
  if (num1 > num2) {
    console.log("Number 1 is greater");
  } else {
    console.log("Number 2 is greater");
  }
}
findgreaterNumber();

var num1=40;
var num2= 50;
function subtraction(valu1,valu2){

    console.log(valu1-valu2)
}
subtraction(num2,num1);

function multiplication(value1, value2){
    console.log(value1*value2)
}
multiplication(30,20);

function multiplication(num1, num2){
    return num1*num2
}
var output=multiplication(3,2)
console.log(output)

function multiplication(num1, num2){
   var answer=num1*num2
    return answer
    // console.log(test) this line doesn't execute becpz it get stop at return
}
var output=multiplication(31,2)
console.log(output)

function evenOdd(number) {
  if (number % 2 === 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}
var number = 59;
evenOdd();
