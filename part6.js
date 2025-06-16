//functions

function number(a,b){
    let sum=0;
    for(let i=a; i<=b; i++){
        sum+=i;
    }
    return sum;
}
console.log("sum of 1 to 5 :",number(1,5));

//Nested function
function outer(){
    let x=9;
    let y=5;

    function inner(){
        //let x=3;
        console.log('x=',x);
    }
    inner();
     
}
outer();

//function expression
let add = function(a,b){
    return a+b;
}
console.log("addition :",add(2,6));

//function as argument
function multiGreet(fun,n){
    for(let i=1; i<=n; i++){
       // console.log(i);
        fun();
    }
}
let greet = function(){
    console.log("Hello");
}

multiGreet(greet,5);

//return a function

function oddEven(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(request == "even"){
        return function(n){
            console.log((n%2==0));
        }
    }else {
        console.log("wrong request");
    }
}
let request = "odd";
//call
let fun = oddEven(request);
console.log(fun(4));
console.log(fun(5));

//Methods
const calculator = {
    add:function(a,b){
        return a+b;
    },
    mul:function(a,b){
        return a*b;
    },
    sub:function(a,b){
        return a-b;
    }
}
console.log(calculator);
console.log("add :",calculator.add(3,4));

//shorthand
const calci = {
    add(a,b){
        return a+b;
    },
    mul(a,b){
        return a*b;
    },
    sub(a,b){
        return a-b;
    }
}
console.log(calci);
console.log("mul :",calci.mul(3,4));

//this 
const student ={
    name :"shraddha",
    eng : 95,
    phy: 80,
    math :70,

    getAvg(){
        console.log(this);
        let avg = (this.eng + this.phy + this.math)/3;
        console.log(`the student ${name} got ${avg} marks`);
    }
}

student.getAvg();

//try catch
console.log("--------------");
try{
    console.log(a);
}catch{
    console.log(" a is not define");
}
console.log("--------------");

//Arrow function
const hello = ()=>{
    console.log("greet:","hello");
}
const addition = (a,b) =>{
    console.log("addition :",a+b);
}
hello();
addition(3,2);

//Implicit return
const mul = (a,b)=>(
     a*b
)
console.log(mul(2,5));

//setTimeOut
/*setTimeout(()=>{
    console.log("setTimeOut :","Hello");
},4000);*/

let id = setInterval(()=>{
    console.log("setInterval :","Welcome");
},1000);


setTimeout(()=>{
    clearInterval(id);
},5000);

//"this " in arrow function
const Student ={
    name:"Shraddha",
    marks:90,
    prop :this,

    getName:function(){
        console.log("func this :",this);    //student
        return this.name;
    },
    getMarks:() => {
        console.log("arrow this :",this);    //window
        return this.marks;
    },
    getInfo:function(){
        setTimeout(()=>{
            console.log(this);         //student
        },1000)
    },
    getInfo1:function(){
        setTimeout(function(){
            console.log(this);         //student
        },1000)
    }
}
console.log(Student);
console.log("Name :",Student.getName());
console.log("Marks :",Student.getMarks());

Student.getInfo();
Student.getInfo1();

