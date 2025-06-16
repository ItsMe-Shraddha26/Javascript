console.dir(document.all[8].innerText="Spider Manus");

/*******getElementById*********** */

let ids = document.getElementById("mainImg")
console.log(ids);
console.dir(ids.src="creation_1.png");

/*******getElementsByClassName*********** */

let smallImg = document.getElementsByClassName("oldImg");
console.dir(smallImg);
//console.dir(smallImg[0]);
for(let i=0; i<smallImg.length; i++){
    smallImg[i].src="spiderman_img.png";
    console.log(`The img of no ${i} is changed`);
}

/********Tag*********** */

let tags = document.getElementsByTagName("p");
console.log("tags :",tags);
//console.log(tags[0].innerText="Spiderman");

/********Querry Selectors********** */

console.log(document.querySelector("h1"))
console.log(document.querySelector("#mainImg"))
console.log(document.querySelector(".oldImg"));

console.dir(document.querySelectorAll("div a"))


let para = document.querySelector("p");

console.log(para.innerText);
console.log(para.textContent);
console.log(para.innerHTML);

/******** Manipulation attribute********** */
let imgs = document.querySelector("img");
console.log("getAttribute :",imgs.getAttribute("id"));
console.log("setAttribute :",imgs.setAttribute("id","spidermanImg"));
console.log("getAttribute :",imgs.getAttribute("id"));

/******** style ********** */

let links = document.querySelectorAll(".box a");

for(link of links){
   link.style.color="green";
}


let heading = document.querySelector("h1");
console.log("backgroundColor of heading :",heading.style.backgroundColor="yellow")
console.log("border of heading :",heading.style.border="2px solid black")

/**********classList******** */

console.log(heading.classList);
console.log("classList.add :",heading.classList.add("purple"));
//console.log(imgs.classList);
console.log(heading.classList);

console.log("classList.add :",heading.classList.add("underline"));
console.log("classList.remove :",heading.classList.remove("underline"));
console.log("classList.contains :",heading.classList.contains("underline"));
console.log("classList.toggle :",heading.classList.toggle("underline"));

/********** Navigation ******** */

let h4 = document.querySelector("h4");
console.log("parentElement of h4 :",h4.parentElement);
console.log("nextElementSibling of h4:",h4.nextElementSibling);

let div = document.querySelector(".box");
console.log("children :",div.children);
console.log("childElementCount :",div.childElementCount);

let ul = document.querySelector("ul");
console.log("previousElementSibling of ul :",ul.previousElementSibling);
console.log("children of ul :",ul.children);
console.log("children of ul :",ul.children[1]);

imgs.previousElementSibling.style.color="blue";

/********** Adding Element ******** */

let newP = document.createElement("p");
console.dir(newP);
console.dir(newP.innerText="I am a smart and powerful  girl ");

let body = document.querySelector("body");
console.log("appendChild(newP) :",body.appendChild(newP));
console.log("append :",newP.append(" This is new Text"));

let btn = document.createElement("button");
btn.innerText="Click me";
console.log("prepend( btn) :",newP.prepend( btn));

let pa = document.querySelectorAll("p")[1];
pa.insertAdjacentElement("beforebegin",btn);

//let p = document.querySelectorAll("p")[1];
//p.insertAdjacentElement("beforebegin", btn);

pa.remove();

/********** DOM event******** */

