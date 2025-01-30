// let obj = {
//     name : "samyu",
//     id : 698,
//     occupation: "student"

// }
// console.log(obj);

// let obj1 = JSON.stringify(obj)
// console.log(obj1);

// let obj2 = JSON.parse(obj1)
// console.log(obj2);


window.fetch("data.json")
.then((data)=>data.json())
.then((res)=>{
    res.map((x)=>{
        console.log(x);
        console.log(x.name);
        console.log(x.id);
        console.log(x.Designation);
        document.body.innerHTML += <h1>${x.name}</h1>
        document.body.innerHTML += <h1>${x.id}</h1>
        document.body.innerHTML += <h1>${x.Designation}</h1>
    })
})




    
   