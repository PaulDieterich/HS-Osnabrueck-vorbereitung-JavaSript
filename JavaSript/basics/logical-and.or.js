

//callenge area 

let isGustOneVegen = true; 
let isGustTowVegen = false; 

//are both vegen? only offer up vegen dishes
//at lest one vegen ? make sure ti iffer up some vegen options.
//else, offer up anythig on th menue


if( isGustOneVegen && isGustTowVegen){
    console.log("2 dudes vegen")
}
else if(isGustOneVegen || isGustTowVegen){
    console.log("min. 1 vegen dude");
}else{
    console.log("ICH WILL FLEISCH!")
}