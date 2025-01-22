function main(m,n){
    new Promise((reslove ,reject) =>{
        setTimeout(()=>{
            if(isNaN(m) || isNaN(n)){
                return reject()
            }
            for(let i=m; i<=n;i++){
                console.log(i);
            }
            return reslove()
        },5000)
    })
    .then(()=> console.log("Promise is resolved"))
    .catch(()=>console.log("Error is occured"))
}
main(3,5)