// === - equality operator
// !== - no equal operator
// < 
// >
// <=
// >=


let temp =32; 
let isFreezing = temp <= 32; 

console.log(isFreezing); //true

if(isFreezing){
    console.log("ES IS KALT");
}else{
    console.log("ES IST GARNICHT SO KALT");
}

//challenge area 
//Calculator is child - if thye are 7 or under
//print is child value
//print is senior value

let age = 6; 
//if 7 or under print massage abozt child pricing 
// if 65 or ulder print massage about senior discount

if(age <= 7){
    console.log(`${age} is under 7! you got the discount`)
}if (age >=65) {
    console.log(`${age} is over 65! you got the discount`)
}