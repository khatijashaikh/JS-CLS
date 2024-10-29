//Palindrome
// abcdeffedcba      Palindrome
//madam              Palindrome
//abcbca             Not aPalindrome

// var word="abcde";                 var word="abcdefghik"
// index 0=4; 1=3 ; 2=2              0=10; 1=9; 2=8; 3=7; 4=6; 5=5


// var word="abcdefghik"
// for(let i=0;i< Math.floor(word.length/2);i++){
//     console.log(word[i],word.length-1-i)                     
// }

//1 iteration for above                     2 iteration     3
// word.length-1-i = 11-1-0=10              11-1-1=9       11-1-2=8


var word="nitin"
function checkpalindrome(word){
    for(let i=0;i<Math.floor(word.length/2);i++){
        if(word[i]!=word[word.length-1-i]){
            return "Word s not a palindrome"
        }
    }
    return "Palindrome"
}
console.log(checkpalindrome(word))

var word="abcdef"
function checkpalindrome(word){
    for(let i=0;i<Math.floor(word.length/2);i++){
        if(word[i]!=word[word.length-1-i]){
            return "Word s not a palindrome"
        }
    }
    return "Palindrome"
}
console.log(checkpalindrome(word))