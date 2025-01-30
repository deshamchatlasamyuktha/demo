let a = document.createElement("h1")
console.log(a);
a.textContent = "hello-world"


document.body.appendChild(a)
a.style.backgroundColor = "blue"
a.style.textAlign = "center"


let div = document.createElement("div")
console.log(div);


document.body.appendChild(div)

div.style.border = "5px solid"

let ol = document.createElement("ol")
console.log(ol);

div.appendChild(ol)


let li1 = document.createElement("li")
console.log(li1);
li1.textContent = "react"
ol.appendChild(li1)

let li2 = document.createElement("li")
console.log(li2);
li2.textContent = "node.js"
ol.appendChild(li2)

ol.setAttribute("type" ,"i")



let table = document.createElement("table")
console.log(table);

document.body.appendChild(table)

table.setAttribute("border" , "2px solid")

let tr1 = document.createElement("tr")
console.log(tr1);
table.appendChild(tr1)


let td1 = document.createElement("td")
console.log(td1);
table.appendChild(td1)
td1.textContent = "hello"


let td2 = document.createElement("td")
console.log(td2);
table.appendChild(td2)
td2.textContent = "hello"


let td3 = document.createElement("td")
console.log(td3);
table.appendChild(td3)
td3.textContent = "hello"





