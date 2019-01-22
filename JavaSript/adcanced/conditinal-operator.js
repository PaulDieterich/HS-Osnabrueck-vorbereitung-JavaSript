/* const myAge = 1;
const massage = myAge >= 18 ? "you can vote!" : "you cant vote"
console.log(massage) */


const myAge = 7 
const showPage = () =>{
    console.log("Showing the page")
}
const showErrorPage = () =>{
    console.log("showing the error page")
}

myAge >= 21 ? showPage() : showErrorPage()


const team = ["Tyler", "Porter", "Porter", "Porter"]

//1. Print "Team size: 3" if less then or equal to 4
//2. Print "To many people on your team " otherwise

const teamSize = team.length <= 4 ? ` Team size: ${team.length}` : `To many people on your team `

console.log(teamSize) 