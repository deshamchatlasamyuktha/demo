console.log(window);
console.log(window.document);
console.log(typeof document);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);
document.title = "flipkart"
console.log(document.body);

let link = document.links
console.log(link);



for(let i=0; i<link.length; i++){
    console.log(link[i]);
    link[i].ClassName = "demo"
    link[i].href= "http://www.youtube.com"
    link[i].ClassName = "_blank"

}

let a= document.getElementById("demo")
console.log(a);
console.log(a.textContent);
a.textContent = "batch6"
console.log(a.textContent);
a.style.backgroundColor = "blue";
a.style.textAlign = "center";



let b = document.getElementsByClassName("demo1")
console.log(b);
console.log(b[0]);
console.log(b[0].textContent);
b[0].style.backgroundColor = "red"
b[0].style.textAlign = "center";
console.log(b[1]);

 let c = document.getElementsByTagName("p")
 console.log(c);
 console.log(c[1]);
 c[0].style.color = "red"
 c[0].textContent = "hello"
 c[0].style.textAlign = "center";
 c[1].style.color = "blue"
 c[1].textContent = "hiii"
 c[1].style.textAlign = "center";

 let d = document.getElementsByName("demo2")
 console.log(d);
 console.log(d[1]);
 d[1].style.backgroundColor = "crimson"
 d[1].style.textAlign = "center";
 d[1].style.textfont = "50px";


 let e = document.querySelector("#demo")
 console.log(e);

 let e1 = document.querySelector(".demo1")
 console.log(e1);
 
 let f = document.querySelectorAll("#demo")
 console.log(e);

 let f1 = document.querySelectorAll(".demo1")
 console.log(f1); 
 console.log(f1[1]); 

 


 
 
 
 



