const squareLong = (num) => {
return num * num 
}
console.log(squareLong(5))

square = num =>(num * num)

console.log(square(3))

const people = [{
    name: "paul",
    age: 21
},{
    name: "nika",
    age: 24
},{
    name: "mette",
    age: 15
}
]

const under20 = people.filter(function(p){
    return p.age <20
})
console.log(under20)

const under20_ = people.filter( p => p.age <20)

console.log(under20_)


const person = people.find((p) =>p.age === 24)

console.log(person.name)