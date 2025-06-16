//******Call stack ************ */

function one(){
    return 1;
}
function two(){
    return one() + one();
}
function three(){
  let ans= one() + two();
  console.log(ans)
}
three();

setTimeout(function(){
    console.log("hello")
},2000)
console.log("Hey")

//CallBack hell

let h1 = document.querySelector("h1");

function changeColor(color,delay,nextChange){
   setTimeout(()=>{
   h1.style.color = color;
   if(nextChange)nextChange();
  },delay)
}
changeColor("red",1000,()=>{
    changeColor("blue",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("orange",1000);
        })
    });
})

//Example of Callback hell

function saveDb(data){
    let internetSpeeed = Math.floor(Math.random()*10)+1;

    if(internetSpeeed > 4){
        console.log("data is saved :",data)
    }else{
        console.log("week connection");
    }
}
saveDb("Dtabase");

console.log("*******************");

function saveDbs(data,success,failure){
    let internetSpeeed = Math.floor(Math.random()*10)+1;

    if(internetSpeeed > 4){
       success();
    }else{
        failure();
    }
}
saveDbs("Dtabase",   //This is the callback hell so we use promises
    ()=>{
        console.log("Success : data is saved;")
        saveDbs("hello world",
        ()=>{
            console.log("Success2 : data is saved;");
            saveDbs("CallBACK",
                ()=>{
                    console.log("Success3 : data is saved;");
                },
                ()=>{
                    console.log("failure3 : week connection");
                }
            )
        },()=>{
            console.log("failure2 : week connection");
        })
    },
    ()=>{
        console.log("failure : week connection");
    }
);

/****Promises******** */

console.log("*******************");

function save(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("succes: data is added");
        }else{
            reject("failure: data is not added");
        }
    })
}
let request =  save("hi");                // save("hi").then(()=>{
request.then((result)=>{                        // console.log("Promise was resolved");
    console.log("data1 is saved");       // console.log(request);  
                                         // }) 
    console.log("result of promise :",result);                                     
    return save("hello");
})
.then((result)=>{
    console.log("data2 is saved");
    console.log("result of promise :",result);
    return save("s")
})
.then((result)=>{
    console.log("data3 is saved");
    console.log("result of promise :",result);
})
.catch((error)=>{
    console.log("Promise was rejected");
    console.log(request);
    console.log("result of promise :",error);
})

//eample
let h2 = document.querySelector("h2");

function color(color,delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
          h2.style.color=color;
          resolve("color changed");
        },delay)
    })
}
color("red",1000)
.then((result)=>{
    console.log("result :",result);
    console.log(color("green",1000));

    console.log("red was completed");
    return color("green",1000);
})
.then((result)=>{
    console.log(color("blue",1000));
    console.log("result :",result)

    console.log("blue was completed");
    return color("blue",1000);
})
.catch((error)=>{
    console.log("result :",error)
})