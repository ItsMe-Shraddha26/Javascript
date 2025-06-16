let fruits =["Mango","banana","Apple"];
let veggies =["fenugreek","cucumber","ginger"];
console.log(fruits);
console.log(veggies);
console.log(fruits.includes("Apple"));
console.log(fruits.concat(veggies));
console.log(fruits.reverse());

console.log(fruits.slice(2));
console.log(fruits);
console.log(fruits.splice(0,2,"chiku","chilli"));
console.log(fruits);

let nested =[[1,2],[3,4],[5,6]];
console.log(nested);
console.log(nested[1]);
console.log(nested[1][0]);

let tictak = [['x','null',0],['null','x','null'],['null','0','x']];
console.log(tictak);

let n =5
n = parseInt(n);
for(let i=n; i<=10*n; i=i+n){
    console.log(i);
}

//nested
for(let i=1; i<=3; i++){
    console.log(`outer loop ${i}`)
    for(j=1; j<=3; j++){
        console.log(j);
    }
}

console.log("***************");

let i=1;
while(i<=5){
    console.log(i);
    i++;
}

//gussing game

/*let fav = "Avatar";
let guess = prompt("Enter movei name");

while((fav != guess) && (guess != "quite")){
    
    guess = prompt("wrong guess please try again ");
}
if(fav==guess){
    console.log("Congratulations");
}else {
    console.log("you quite");
}*/

//Array loop
let cars = ["bmw","Rolls roys","guati","Suzuki"];
for(let i=0; i<cars.length; i++){
    console.log(i,cars[i]);
}

//nested Array
let numbers = [[1,2],[2,3],[3,4],[4,5],[5,6]];
for(let i=0; i<numbers.length; i++){
    console.log(i,numbers[i],numbers[i].length);

    for(let j=0; j<numbers[i].length; j++){
       console.log(j,numbers[i][j]);
    }
}

let students = [["Shraddha",95],["ME",90],["Myself",92]];
for(let i=0; i<students.length; i++){
    console.log(i,students[i]);
    for(let j=0; j<students[i].length; j++){
        console.log(`j=${j} ${students[i][j]}`);
    }
}

console.log("******** for of loop ********");
//for of loop
for(names of students){
    console.log(names);
    for(name of names){
        console.log(name);
    }
}

//to list 
console.log("to do list");

let todo = [];
let req = prompt("Enter your request");

while(true){
 if(req == "quite"){
    console.log("you quite");
    break;
 }
 
 if(req == "list"){
   for(let i=0; i<todo.length; i++){
    console.log(i,todo[i]);
   }
 }
 else if(req == "add"){
    let task = prompt("Enter what you want to add");
    todo.push(task);
    console.log("task is added");

 }else if(req == "delete"){
    let idx = prompt("Enter the idx no of task you want to delete");
    todo.splice(idx,1);
    console.log("deleted");
 }
  req = prompt("Enter your request");
}