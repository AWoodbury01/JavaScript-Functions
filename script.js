//Lightning exercise 1
// function javaString() {
//     console.log("I love JavaScript!");
// }

// javaString();

//Lightning exercise 2
// function dreamVacation(personName, destination) {
//     console.log(`${personName} would like to visit ${destination}`)
// }

// dreamVacation("Ashon", "Normandy")

//Lightning exercise 3

// Taco Truck
// Write a function to represent a taco truck's ordering system. The function should accept two parameters: typeOfShell and topping. (Both will be strings.)
// Inside the function, use string interpolation to build a sentence that announces the taco is ready. Use the information the customer passed in. For example: "Your soft shell taco with chicken is ready!"
// Return the taco sentence.
// Execute the function.
// Log the returned sentence to the console.
// function myTaco(typeofShell, topping){
//     var madeTaco = `Your ${typeofShell} taco with ${topping} is ready!`
//     return madeTaco
// }

// var finishedTaco = myTaco("soft shell", "steak")

// console.log(myTaco("soft shell", "steak"))

//Practice exercises

//Calculator

// function add(addOne, addTwo){
//     var sum = addOne + addTwo
//     return sum
// }

// console.log(add(2,2))

// function subtract(numberOne, numberTwo){
//     var difference = numberOne - numberTwo
//     return difference
// }

// console.log(subtract(2,2))

//Calculator Refractor

// function add(addOne, addTwo, total){
//     var sum = `${addOne} plus ${addTwo} equals ${total}`
//     return sum
// }

// console.log(add(2, 2, 4))

//Greetings Pt. 2

// function preferredLanguage(language, name){
//     if(language === "English"){
//         console.log(`Hello, ${name}`)
//     } if (language === "Spanish"){
//         console.log(`Hola, ${name}`)
//     } if (language === "French"){
//         console.log(`Bonjour, ${name}`)
//     }
// }

// console.log(preferredLanguage("French", "Elle"))

Sandwich Maker
 
function sandwichType(breadType, sandwichName, isToasted){
    if(isToasted === true){
        console.log(`You ordered a toasted ${sandwichName} sandwich on ${breadType}`)
    } else{
        console.log(`You ordered an untoasted ${sandwichName} sandwich on ${breadType}`)
    }
}

sandwichType("chiabotta", "club", false)