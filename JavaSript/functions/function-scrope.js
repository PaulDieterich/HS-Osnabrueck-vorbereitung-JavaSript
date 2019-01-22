//Global scope (convertFahrenheitToCelsius, tempOne, tempTow)
    //Local Scope (fahrenheit, calsius)
        //Local Scope(isFreezing)
function convertFahrenheitToCelsius(fahrenheit){
    let calsius = (fahrenheit - 32) * 5/9
    if(calsius <= 0){
        let isFreezing = true;
    }

    return calsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTow = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTow)