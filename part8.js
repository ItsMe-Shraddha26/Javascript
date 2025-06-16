/******Array Methods************* */

//For EAch

let array = [1, 2, 3, 4, 5];
let print = function (e) {
    console.log(e)
}
array.forEach(print);

//OR
array.forEach((el) => {
    console.log("for each  :", el);
})

let arr = [
    {
        name: "Shraddha",
        marks: 95
    },
    {
        name: "Me",
        marks: 86

    }
]
arr.forEach(function (student) {
    console.log(student);
    console.log(student.name);
})

//*********MAP  **********

let no = [1, 2, 3, 4, 5]
let num = no.map((el) => {
    console.log(el * 2);
})

let GPA = arr.map(function (el) {
    return el.marks / 10;
})
console.log(GPA);

//******* filter ****** */

let even = no.filter((el) => {
    return el % 2 == 0;
})
console.log(even);

//******* every ****** */
no.every(function (el) {
    console.log("every :", el % 2 == 0);
})

// [2,4,6].every((el)=>(el%2==0));

//******* some ****** */
no.some((el) => {
    console.log("some :", el % 2 == 0);
})

/******* reduce ****** */

let sum = no.reduce((res, el) => (res + el));
console.log("reduce :", sum);

//finding maximun no in an array

let numbers = [1, 5, 8, 4, 9, 23, 6, 45, 7];
let maximum = numbers.reduce((max, el) => {
    if (el > max) {
        return el;
    } else {
        return max;
    }
})
console.log("Maximum no is :", maximum);

// Check all numbers in an array is multiple of 10 or not

let nums = [10, 20, 38.50, 60];
let n = nums.every((el) => (el % 10 == 0));
let nom = nums.some((el) => (el % 10 == 0));
console.log("Q>1 =>", n);
console.log("Q>1.1 =>", nom);

/*****default parameter **** */

function sume(a, b = 5) {
    return a + b
}
console.log(sume(2));

/********* Spred ********* */

let arry = [1,2,3,4,5,6];
let newArr =[...arry];
console.log(newArr);

let newArry = {...arry,id:123,name:"shraddha"};
console.log(newArry);

let min = Math.min(...arry);
console.log("minimum no :",min);

let combine = [...arry,...no];
console.log("combine :",combine);

/********* Rest ********* */

function counts(...args){
    for(let i=0; i<args.length; i++){
        console.log("you gave us :",args[i]);
    }
}
counts(1,2,3,4,5);

//Arguments

function argu(){
    console.log("Arguments :",arguments);
    console.log("lenght :",arguments.length);
    //arguments.push(1);      not possible bacause its not an array its a collection
     
}
argu(5,6,7,8);

function sume(...args){
    return args.reduce((res,el)=>(res+el));
}
console.log("sum is :",sume(1,2,3,4,5));

function minu(msg,...args){
    console.log(msg);
    return args.reduce((min,el)=>{
        if(el<min){
            return el;
        }else{
           return min;
        }
    })
}
console.log("minimum is :",minu("Hello",2,3,4,5,1));

/*******Distructuring**** */
let names =["shraddha","me","Myself","smart","gourges"];
let [winner,runnerup,...others] = names;
console.log("Distructuring :",winner,runnerup,others);