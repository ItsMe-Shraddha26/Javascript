//object literals

const student ={
    name : ["Shraddha","Me"],
    age :20,
    marks : 90,
    city : "Yeola"
}
console.log("students :",student);
console.log("city :",student["city"]);
console.log("city :",student.city);

//add
student.city = "Pune";
student.gender = "female";
delete student.age;
console.log("students :",student);

//objects of object
const classInfo = {
    Shraddha : {
        marks : 90,
        age : 20
    },
    Me : {
        marks : 95,
        age : 21
    },
    Myself : {
        marks : 98,
        age : 20
    }
}
console.log("classInfo :", classInfo);
console.log("Shraddha :", classInfo["Shraddha"]);
console.log("marks :", classInfo["Shraddha"].marks);

console.log("Update :", classInfo["Myself"].age=21);
console.log("Update :", classInfo["Myself"].sub="math");
console.log("age :", classInfo["Myself"]);

//Array of object
const Class =[
{
    source : "Power",
    product : "Gucci",
},
{
    source : "energy",
    product : "Prada",
}];
console.log(Class);
console.log("Source :",Class[1].source);
console.log("passion :",Class[1].money = "$");
console.log(Class);

console.log(Math);
console.log("abs :",Math.abs(-12.5));
console.log("pow:",Math.pow(2,3));
console.log("floor :",Math.floor(2.3));
console.log("ceil :",Math.ceil(2.3));
console.log("random :",Math.random());

let randomNo = Math.floor(Math.random()*10)+1;
console.log("randomNo :",randomNo);

let tw21to25 = Math.floor(Math.random()*5)+21;
console.log(" tw21to25 :", tw21to25);

//Gussing Game
const max = prompt("Enter a max no");
const randomeNo = Math.floor(Math.random()*max)+1;
let guess = prompt("Gusee the number ");

while(guess != randomeNo ){

    if(guess == "quite"){
        console.log("You quited");
        break;
    }
    if(randomeNo >  guess){
        guess = prompt("Try a greater number");
    }else{
        guess = prompt("Try a smaller number");
    }
     //guess = prompt("wrong guess try again");
}
if(guess == randomeNo){
    console.log("Congratulations the no is :",randomeNo );
}