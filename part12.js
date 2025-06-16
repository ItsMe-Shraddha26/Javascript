//insted useing create new Promise we use async function

function greeetu(){
    return new Promise((resolve,reject)=>{
        let success = true;
        if(success){
            resolve("hello") 
        }else{
            reject("404 page not found") ;
        }
    })
}
greeetu()
.then((result)=>{
     console.log("ans :",result)
})
.catch((error)=>{
    console.log("error is :",error);
})

console.log("******************************");

async function greet(){
    //throw "404 page not found";
    return "hello"
}
greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result is :",result);
    return greet();
})
.then((result2)=>{
    console.log("result2 is :",result2);
})
.catch((error)=>{
   console.log("The error is :",error);
})

let demo = async()=>{
    return 5;
}
console.log(demo());

//************ Await *********** */

function getNumber(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log("The number is :",num);
            resolve();
        },1000)
    })
}
async function no(){
    await getNumber();
    await getNumber();
    await getNumber();
     getNumber();
}
no()
/********************* */

let h2 = document.querySelector("h2");

function colorChange(color){
    return new Promise((resolve,reject)=>{
        let no = Math.floor(Math.random()*10)+1;
        if(no<3){
            reject("rejected");
        }

        setTimeout(()=>{
          h2.style.color=color;
          console.log(`color was changed to ${color}`);
          resolve("changed")
        },1000)
    })
}

async function call(){
    try{
        await colorChange("red");
        await colorChange("green");
        await colorChange("blue");
        await colorChange("purple");

    }catch(error){
        console.log("error cought");
        console.log(error);
    }
    

    let no = 10;
    console.log("number is :",no)
}
//call();

let jsonres = 
    '{"fact":"Lions are the only cats that live in groups, called prides. Every female within the pride is usually related.","length":109}'

console.log("json response :",jsonres);
//console.log(jsonres.fact); This line gives undefine because our data is in string format 
// we have to convert it into json object so we can easily use it in our js/vs code

let validRes = JSON.parse(jsonres);
console.log("valid response :",validRes)
console.log("valid response fact :",validRes.fact);

let student ={
    name:"shraddha",
    marks:80
}
let jsObj = JSON.stringify(student);
console.log("jsObj to json data :",jsObj);

//Our first API 

let url = "https://catfact.ninja/fact";

fetch(url)            //it will return some promise
.then((response)=>{
    console.log("Response :",response);
    //console.log("Response in redable form :",response.json());
    return response.json()  
})
.then((data)=>{
    console.log("data1 :",data.fact);
    return fetch(url);
})
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log("data2 :",data.fact);
})
.catch((error)=>{
    console.log("ERROR- ",error)
})

console.log("I am happy");

async function getFact(){
    try{
       let res = await fetch(url);
       let data = await res.json();
       console.log("data using async :",data.fact);

       let res2 = await fetch(url);
       let data2 = await res2.json();
       console.log("data2 using async :",data2.fact);

    }catch(e){
       console.log("error - ",e);
    }
    
}
getFact();

/*********Axios ************ */
//catfact

let btn = document.querySelector("button");

btn.addEventListener("click",async()=>{
    let res = await getFacte();
    //console.log("result:",res);
    let p = document.querySelector("#result");
    p.innerText = res;
})

async function getFacte(){
    try{
      let res = await axios.get(url);
      //console.log("Axios resp :",res.data.fact)
      return res.data.fact;

    }catch(e){
      //console.log(e);
      return "Fact not found";
    }
    
}

// dog Images
let url2 = "https://dog.ceo/api/breeds/image/random";

let btn2 = document.querySelector("#btn");
btn2.addEventListener("click",async()=>{
    let img = await getImg();
    console.log(img);

    let image = document.querySelector("#img");
    image.setAttribute("src",img);
})
async function getImg(){
    try{
      let link = await axios.get(url2);
      return link.data.message;
    }catch(r){
      return "Img not found"
    }
    
}

/*********passing headers ************ */

let url3 = "https://icanhazdadjoke.com/";

let btn3 = document.querySelector("#btn3");

btn3.addEventListener("click",async()=>{
   let joke = await getJocks();

   let p = document.querySelector("#joke");
   p.innerText = joke;
})
async function getJocks(){
    try{
        const config = {headers :{Accept : "application/json"}}
        let res = await axios.get(url3,config);
        //console.log("joke :",res.data.joke)
        return res.data.joke;
    }catch(e){
        console.log("error",e);
    }
   
}
getJocks();


/*let url4 = "https://universities.hipolabs.com/search";

let country = "nepal";

async function collage(){
    let res = await axios.get(url4+country)
    console.log("**************",res)
}*/