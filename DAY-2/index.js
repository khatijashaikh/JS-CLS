//Day 2

//reassign
let num=2;
num=5
console.log(num)

// let num=3         cant redeclare line 66 and 70
// console.log(num)

// const myName=`khatija`
// console.log(myName)

// re-assign can't reassign
// const myName=`khatija`
// myName=`shaikh`
// console.log(myName)

// re-declare can't re-declare
const myNumber=2;
console.log(myNumber)

// const myNumber=3;
// console.log(myNumber)

// scope

var myNum = 20;
{
  console.log(myNum);
}

{
  var myNum = 20;
}
console.log(myNum);

let myNum=20
{
    console.log(myNum)
}

{
  let myNum1 = 60;
  console.log(myNum1);
}

{
    let myNum=20
    {
        console.log(myNum)
    }
}

// it doesn't work out of block
// {
//   {
//     let myNum = 20;
//   }
//   console.log(myNum);
// }

// it doesn't work out of block
// {
//     let myNum=20
// }
// console.log(myNum)

// same logic apply on const as let

// Here let can't be reassigned becoz its out of block so it consider it var
{
  {
    let myNumber2 = 20;
    console.log(myNumber2);
  }
  myNumber2=50
  console.log(myNumber2)
}
console.log(myNumber2)

// Here const can't be reassigned becoz its out of block so it consider var
// { 
//   {
//     const myNumber = 20;
//     console.log(myNumber);
//   }
//   myNumber=50
//   console.log(myNumber)
// }
// console.log(myNumber)

//undefined
var myName
console.log(myName, typeof(myName))

//Hoisting; basically it moves class func var or imports to top of file from where it can be called any where within page/scope
//not applicable to let and const hoisting is available to var

 myName=50
 console.log(myName)
 var myName

//Conditional Statement
var num1 = 20;
var num2 = 40;

if (num1 > num2) {
    console.log("Number 1 is greater")
}else if(num1==num2) {
    console.log("Equal")
} 
else {
    console.log("Number 2 is greater")
}
