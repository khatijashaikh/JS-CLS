// starting
// while(ending){
//     code sequence
// }

// print 1-10 using while loop
var i=1
while(i<=10){
    console.log(i)
    i++
}

//print number from 10-1 while loop
var i=10;
while(i>=1){
    console.log(i)
    i--
}



//calculate count of array
var myarray = [1, 2, 3, 5, 6, 7, 19, 21, 42];

var i = 0;
var count = 0;

while (i < myarray.length) {
  if (myarray[i] % 2 == 0) {
    count++;
  }
  i++;
}
console.log(count, "count");


console.log(1 ==2)
console.log(1!=2)
console.log(1 !=1)
console.log(1===1)
console.log(1!=="1")
console.log(1!==1)