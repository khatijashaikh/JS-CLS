//print number from 10 to 1
for(i=10; i>=1; i--){
    console.log(i)
}

//print number from 45 to 25 which are even
for(i=45; i>=25; i--){
    if(i%2==0){
    console.log(i)
}
}


//print element from array like 1,2,3 each on new line not like array[1,2,3,4]
var mynumber=["a","b","c","d","e"] 
for(i=0;i<mynumber.length;i++){
    console.log(mynumber[i])
}

var numbers=[23,43,24,67,65,68,25,11,24]
var oddCount=0;
for(i=0;i<numbers.length;i++){
    if(numbers[i]%2 ==1){
        oddCount++
    }
}
console.log(oddCount)