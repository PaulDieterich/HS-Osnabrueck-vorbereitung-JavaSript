// Functuib - input, code, output {return value}

let greetUser = function(){
    console.log("peter")
}
//greetUser();

function square(num){
    let result = num * num;
    return result;
}


//Challange Area

//convertFahrenheitToCelsius

function convertFahrenheitToCelsius(f){
    let calsius = (f - 32) * 5/9
    return calsius
}
//call to couple to times (32 -> 0) (68 -> 20)
let a = convertFahrenheitToCelsius(32)
let b = convertFahrenheitToCelsius(68)
console.log(a)
console.log(b)