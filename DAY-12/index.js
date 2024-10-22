//Day-12
//Binary Search using while loop
var array=[1,2,3,4,5,6,7,8,9];
var target=8;

function Binarysearch(array, target){
    var left=0;
    var right= array.length-1;

    while(left<=right){
        const middleIndex=Math.floor((left+right)/2)  
        console.log(middleIndex,"midleIndex",array[middleIndex])


        if(array[middleIndex]==target){
            console.log(array[middleIndex],target,"array[middleindex]==target")
            return middleIndex
        }
        else if(array[middleIndex]>target){
            console.log(array[middleIndex],target,"array[middleindex]>target")
            right=middleIndex-1     
        }
        else if(array[middleIndex]<target){
            console.log(array[middleIndex],target,"array[middleindex]<target")
            left=middleIndex+1
        }
    }
}
console.log(Binarysearch(array,target));