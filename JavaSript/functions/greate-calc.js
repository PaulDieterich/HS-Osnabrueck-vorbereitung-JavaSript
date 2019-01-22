// studens score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F0-59

const gradeCalc = (studentScore, possibleScore) =>{
  if(typeof studentScore !== "number" || typeof possibleScore !== "number"){
    throw Error("need 2 numbers")
  }
    const score = (studentScore /  possibleScore)*100
    let letterGrate = "";

    if( score >= 90){
      letterGrate="A"
    }else if(score >= 80 ){
      letterGrate="B"
    }else if(score >= 70){
      letterGrate="C"
    }else if(score >= 60){
      letterGrate="D"
    }else{
      letterGrate="F"
    }

  return `${studentScore}/${possibleScore } ->  You go a ${letterGrate} (${score}%)`
}


try{
  const result = gradeCalc(13,"20")
  console.log(result)
}catch(e){
  console.log(e.message)
}


