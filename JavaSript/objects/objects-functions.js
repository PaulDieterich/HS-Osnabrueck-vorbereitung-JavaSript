let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Goward Zinn',
    pageCount: 723
}

let getSummary = function(book){
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary:  `${book.title} is ${book.pageCount} pages long`
    }
    
}
let bookSummary = getSummary(myBook);
let otherBookSummary  = getSummary(otherBook);


console.log(bookSummary.pageCountSummary)

//Challange area 
// create function - take fahrenheit in - return object with all three

let getCalsusAndKelvin = function(fahrenheit){
    let calsius = (fahrenheit - 32) * 5/9
    let kelvin = ( fahrenheit + 459.67) * 5/9;
    return {
        fahrenheit: fahrenheit, 
        calsius: calsius, 
        kelvin: kelvin
    }
}
let CalsusAndKelvin = getCalsusAndKelvin(74);

console.log(CalsusAndKelvin)


