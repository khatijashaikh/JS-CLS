//Object

// var myObject={key: data, key2:data2} syntax

// var myData={
//     name:"Khatija",
//     age:"20",
//     designation:"Web Developer",
//     isopen:true
// }
// console.log(myData.name)

// var myInstitute=new Object()       //can be assign through . and []
// myInstitute.name="Awdiz";
// myInstitute.age=20;
// myInstitute["Students count"]=70;
// myInstitute["isopen"]=true;
// console.log(myInstitute)

//re-assign
var myInstitute={name:"Demo",isopen:false,age:10}
// myInstitute.name="Awdiz";
// myInstitute.age=30;
// myInstitute["Students count"]=70;
// myInstitute["isopen"]=true;
// console.log(myInstitute)
// console.log("age" in myInstitute)
// console.log("factor" in myInstitute)

//delete
// delete myInstitute.age
// console.log(myInstitute)


for(var keys in myInstitute){
    console.log(keys,myInstitute[keys])
}