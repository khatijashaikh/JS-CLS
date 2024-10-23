// print 30-60 in range of 5

// for (let i = 30; i <= 60; i += 5) {
//   console.log(i);
// }

// print 50-100 in range of 3 and count the number
// var count = 0;

// for (let i = 50; i <= 100; i += 3) {
//   console.log(i);
//   count++;
// }
// console.log("Total Count is " + count); //if we call console inside block it wil print every number with count ike 53 count 1, 56 coun2 etc etc

//print 10-50 with range of 2 and add 10 every element and return in array
var starting = 10;
var ending = 50;
var sequence = 2;
function printNumber(starting, ending, sequence) {
    var output=[];
  for (let i = starting; i <= ending; i += sequence) {
    // console.log(i)
    output.push(i+10)
  }
  return output;
}
console.log(printNumber(starting,ending,sequence));



// print count from 233 to 456 who are odd
// var starting=233
// var ending=456
// var sequence=1

// function checkOdd(starting,ending,sequence){
// var count=0
// for(var i=starting; i<=ending; i+=sequence){
//     if(i %2==1){
//         count++
//     }
// }
// return count
// }
// console.log(checkOdd(starting,ending,sequence))