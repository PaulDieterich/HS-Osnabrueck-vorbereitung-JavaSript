//Lexical Scope (Static Scope) 
//Gloabel Scope Defind outside of all code blocks  - window
// Local Scope - Defined inside a code block

//in a scope ypu can access variables adefind i that scope, or in any parrent element
 

//Gloabel Scope "varOne"
    //Local Scope "varTow"
let varOne = "varOne";

if(true){
    let varTow = "varTow"
    console.log(varOne);
    console.log(varTow);
}
console.log(varTow);