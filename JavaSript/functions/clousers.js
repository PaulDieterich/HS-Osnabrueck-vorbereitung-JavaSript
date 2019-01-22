//1. Create createTipper wwhich takes in the base tip (.15 for 15% tip)
//2. Set it up to return a function that takes in the bill amount
//3. Call CreateTipper to generate a few functions for different percentages
//4. Use the generated functuin ti caluclate tio and print them 

const createTipper = (a) =>{
    return (b) =>{
        return a * b
    }
}
const Tip20Prozent = createTipper(0.2)
console.log(Tip20Prozent(45))

const Tip70Prozent = createTipper(0.7)
console.log(Tip70Prozent(45))