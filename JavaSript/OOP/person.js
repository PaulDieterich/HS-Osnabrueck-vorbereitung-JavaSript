// Prototypal Inheritance 
//myPerosn --> Person.prtototype --> Object.prototype --> null 

class PersonClass{
    constructor(firstName, lastName, age, likes= []){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
        this.likes = likes
    }
    getBio(){
        let bio = `${this.firstName} ${this.lastName} is ${this.age} `

        this.likes.forEach((like) => {
             bio += ` ${this.firstName} likes ${like}`
        })
        return bio
    }
    set fullName(fullName){
        const names = fullName.split(" ")
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    
}




class Employee extends PersonClass{
    constructor(firstName, lastName, age, position, likes= []){
        super(firstName, lastName, age, likes)
        this.position = position;
    }
    getBio(){
        return `${this.fullName} is a ${this.position}`
        // Paul is a Teacher 
    }
    getYearsLeft(){
        return 65 - this.age
    }
}

// 1. Create class for student 
// 2. Track student grad. 0-100
// 3. Override bio to print a passing or falling massage 70 and above "Paul is passing the class"
// 4. Create "updateGrade" that takes a amound to add or remove from the grad

//Crate student 
//Print status (failing or passing )
// Cange grate to cange status 
//print status again 


class Student extends PersonClass{
    constructor(firstName, lastName, age, grad, likes = []){
        super(firstName, lastName, age, likes)
        this.grad = grad
    }
    getBio(){
        const status = this.grad >= 70 ? "passing" : "failing"
        return `${this.firstName} is ${status} this year`

    }
    updateGrade(change){
       return  this.grad += change
    }
}

const me = new Employee("Paul", "Dieterich", 21, "Teacher", ["Kayaking", "Programming"] )
me.fullName  ="Mette Dieterich"

console.log(me.getBio())
