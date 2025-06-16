let btn = document.querySelector("button");

btn.onmouseenter=function(){
    console.log("Button was entered");
}

let btns = document.querySelectorAll("button");

let sayHello = function(){
    //alert("Hello");
    console.log("button was clicked");
}

for(btn of btns){
    btn.onclick=sayHello;
};

/*********Color Generator******** */

let button = document.querySelector("#button");
button.addEventListener("click",function(){
    this.style.backgroundColor="pink";

    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor=randomColor;
})


function getRandomColor(){
       
   let red = Math.floor(Math.random()*255);
   let green = Math.floor(Math.random()*255);
   let blue = Math.floor(Math.random()*255);

   let color =`rgb(${red},${green},${blue})`;
   return color;
}

/******************** */

let input = document.querySelector("input");
input.addEventListener("keydown",function(event){
    console.dir(event);
    console.log("key=",event.key)
    console.log("code=",event.code)
    console.log("key was pressed")
})

let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("form submited");

    let input = document.querySelector("#inp");
    console.log(input.value);
})