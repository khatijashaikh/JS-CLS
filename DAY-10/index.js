// var array = [23, 56, 78, 99,322,456,678,877];
// let i = 0;

// while (i < array.length) {
//     if (array[i] % 2 !== 0) {
//         console.log(array[i]);
//     }
//     i++;
// }


// print every number except target
var array = [23, 56, 78, 99,322,456,678,877];
var target=322;
var target2=678;

var i=0
while(i<array.length){
    if(array[i]!=target & array[i]!= target2){
        console.log(array[i])
    }
    i++
}