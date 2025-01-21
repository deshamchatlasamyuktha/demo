let demo = function()
{
    let s = Number(prompt("Enter num: "));
    let v = Number(prompt("Enter num: "));
    let m = Number(prompt("Enter num: "));
    let n = s+v+m;
    console .log(n);
    let o = s-v-m;
    console .log(o);
    let p = s*v*m;
    console .log(p);
     
    if(s>=v&& s>=m ){
        console.log("s is gratest");
    }
    else if(v>=s && v>=m) {
        console.log(" v is gratest");

    }
    else{
        console.log("m is greatest");
    }
   
}
demo();

