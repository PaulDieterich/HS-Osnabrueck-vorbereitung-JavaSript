let name =" Paul Dieterich"

//Length property 
console.log(name.length)

// Convert to upper case 
console.log(name.toUpperCase())
// Convert to lower case
console.log(name.toLowerCase());
// Includes mehtod 

let password = "adb123password098"
console.log(password.includes("password"))

// Trim  
console.log(name.trim())


//Challenge area

//isValidPassword 
//length is more then 8 - and it doesn´t contrain the wird password
isValidPassword = (password) =>{
     return password.length >= 8 && !password.includes("password")
   
  
}

console.log(isValidPassword("as"))
console.log(isValidPassword("adb123password098"))
console.log(isValidPassword("asdasdasdasdasdasd"))