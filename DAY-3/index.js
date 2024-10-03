var age = 92;

if (age == 18) {
  console.log("Eligible for learning license");
} else if (age > 18) {
  console.log("Eligible for driving license");
} else {
  console.log("Not Eligible");
}

//Logical Operator

//And Operator
if (age == 18) {
    console.log("Eligible for learning license");
  } else if (age > 18 && age<90) {
    console.log("Eligible for driving license");
  } else {
    console.log("Not Eligible");
  }


console.log(2>1 && 2<3)  
console.log(2>1 || 2<3) 


//When all conditions are true it will return true
// console.log(2>1 && 2<3 && 5<6)

// when even one condition is true  
// console.log(2>1 || 2>3 || 5<6)



//Switch
var fruit="watermelon"

switch(fruit){
  case "watermelon":
    console.log("You have selected Watermelon")
    break
    case "mango":
      console.log("You have selected mango")
      break
      case "strawberry":
        console.log("You have selected strawberry")
        break
        default:
          console.log("Selected fruit is not available")
}