 //window.setTimeout(() =>{
   // console.log("iam setting the settimeout");
 //},5000)

 //w//indow.setInterval(() =>{
   /// console.log("iam setting the setinterval");
 //},3000)

// function main(m,n){
    //setTimeout(() =>{
        //for(let i=m; i<=n; i++){
          //  console.log(i);
      //  }
    //},5000)
 //}

/// main(1, "10a")

// function demo(){
   //// console.log("no's printed")
 //}


 let onLine=Window.navigator.onLine

 new Promise((resolve, reject) => {
    setTimeout(()=> {
        if(online === true){
            return resolve()
        }else{
            return reject()
        }
    },5000)
 })
.then(() => console.log("online...😍"))
.catch(() => console.log("online...😒"))