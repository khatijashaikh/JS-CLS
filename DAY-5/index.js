// var number = 20
// var target = 40

// function checkNumberIsgreaterThanTarget(){
// if(target>number){
//     return "Target is greater than number"
// }
// console.log("after return is true, no other line get execute")
// return "Number is greater than target"
// }
// console.log(checkNumberIsgreaterThanTarget(number,target))

//Array [value1,value2]
var myage = 21
var data = ["Khatija", myage, "web-developer", [2024]]
console.log(data)

var students = [
  "XYZ",
  "EFG",
  "PQR",
  "ABC",
  "last_element"
];
// console.log(students[1]); //Position starts with 0
// console.log(students[14]);
console.log(students.length)   //length property calculate element from one
console.log(students[students.length-1])   //to get last element print, it take length from 1 and position from 0 so to access last element we have to minus 1 from length

//to access  mid elemnt
var data=["xyz","abc","pqr","mno","efg"]

var data2=["xyz","abc","pqr","mno","efg","second_last","last_element"]

console.log(data[Math.ceil(data.length/2)-1])

console.log(data2[Math.ceil(data2.length/2)-1])


console.log(Math.floor(10.60))     //round off number to low
console.log(Math.ceil(10.60))      // round off number to high     



// add element via js only at the end
var addNumber=[1,2,3,4,5]
addNumber.push(6)
console.log(addNumber)


// add element via js only at  start
var addNumber=[1,2,3,4,5]
addNumber.unshift(0)
console.log(addNumber)


// remove element via js only at end
var removeNumber=[1,2,3,4,5]
removeNumber.pop()
console.log(removeNumber)


// remove element via js only at start
var removeNumber=[1,2,3,4,5]
removeNumber.shift()
console.log(removeNumber)