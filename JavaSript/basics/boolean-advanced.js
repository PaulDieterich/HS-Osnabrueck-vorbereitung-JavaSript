let isAccountLocked = false;
let userRole = "admin"

if(isAccountLocked){
    console.log("account locked");
} else if (userRole === "admin"){
    console.log("Welcome Admin!")
}else{
    console.log("Welcome!")

}


//Callenge area

let temp = 0; 

if(temp <= 32){
    console.log("ES IST KALT")
}else if(temp >= 110){
    console.log("ES IST ZU HOT!");
}else{
    console.log("GEH RAUS DRAUSSEN IST ES GEIL!")
}