const getTip = (amount) =>{
   if(typeof amount === "number"){
        return amount * .25
    }else{
        throw Error("Argument must be a number")
    }
}

try {
    const result = getTip("2")
    console.log(result)
} catch (error) {
    
    console.log(error + " - catch block is running")
}
