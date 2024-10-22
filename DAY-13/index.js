// nested for loop

//print all pairs of element that sum and return target
var array = [2, 3, 6, 7, 2, 4, 6, 8, 99,3,5,12,13,18];
var target = 16;

for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
            console.log("Pair found: " + array[i] + " + " + array[j] + " = " + target);
        }
    }
}


//print all pairs of element that subtract and return target 
var array = [2, 3, 6, 7, 2, 4, 6, 8, 99,3,5,12,13,18];
var target = 2;

for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
        if (array[i] - array[j] === target) {
            console.log("Pair found: " + array[i] + " - " + array[j] + " = " + target);
        }
        else if(array[j] - array[i] === target){
            console.log("Pair found: " + array[j] + " - " + array[i] + " = " + target);
        }
    }
}