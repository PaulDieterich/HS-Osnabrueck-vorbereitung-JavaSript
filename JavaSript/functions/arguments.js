// Multiple arguments
let add = function(a, b,c){
    return a +b + c; 
}

let result = add(10, 1, 5);
console.log(result)


//Default arguments
let getScoreText = function(name = "Anonymous", score = 0){
  //  return `Name: ` + name + ` ~ Score: ` + score;
        return `Name: ${name} ~ Score: ${score}`
}

let  scoreText = getScoreText("paul");
console.log(scoreText)


//Cahallenge area
// total, tipProcent  .2 = 20%
// A 25% for $40 would be $10
let getTip = function(total, tipProcent = .2){
                let tip = total * tipProcent;
                let procent = tipProcent*100 
               
              
        return `A ${procent}% tip for $${total} wold be $${tip}`
}
console.log(getTip(60))

