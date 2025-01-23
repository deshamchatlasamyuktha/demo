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




