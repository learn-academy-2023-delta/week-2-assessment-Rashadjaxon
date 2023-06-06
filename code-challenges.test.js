// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.




const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// Pseudo code:

// Write a describe statement that takes in the argument of a string and function.

// Write an it statement in the describe block as a string that describe what the test is doing with a function 

// Write 3 expect statements that take in the each encased function call with the .toEqual() method with strings encased in the .toEqual method

// Create a function with a conditional statement 
// - if the object is divisible by 3 then it'll return that number is divisible by 3
// - if else, it'll return the number is not divisible by 3

describe("dividedBy3", () => {
    it("decides if the number inside is divisible by 3.", () => {
        expect(dividedBy3(object1.number)).toEqual("15 is divisible by three")
        expect(dividedBy3(object2.number)).toEqual("0 is divisible by three")
        expect(dividedBy3(object3.number)).toEqual("-7 is not divisible by three")
    })
})

const dividedBy3 = (object) => {
    if (object % 3 === 0) {
    return `${object} is divisible by three`
    } else {
    return `${object} is not divisible by three`
    }
}




// 

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Pseudo code:

//  Write a function that take in the array and add the map (HOF) to iterate in the array

//  In the map of the HOF write a function that will take the value that's iterating and split the strings into individual strings of letters

//  create another map HOF that will iterate each letter and add a conditional statement to return the 0 index in the string uppercased and the rest of the string 

//  Add the .join('') with single quotations to join the string "letters" back to string "words"

const arrayWords = (array) => {
    return array.map(value => value.split('').map((value, index) => { 
        if (index == 0)
        return value.toUpperCase()
        else {
            return value
        }
    }).join(''))     
}

console.log(arrayWords(randomNouns1))

describe("arrayWords", () => {
    it("Capitalize the first letter in the string", () => {
        expect(arrayWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(arrayWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("vowelChecker", () => {
    it("returns the first instance of a vowel in the word", () => {
        expect(vowelChecker(vowelTester1)).toEqual(1)
        expect(vowelChecker(vowelTester2)).toEqual(0)
        expect(vowelChecker(vowelTester3)).toEqual(2)
    })
})

// b) Create the function that makes the test pass.

// Pseudo code:

// create function to check first instance of a vowel 
// make an array of vowels
// for loop through string and check for vowels
// Set conditions to check all characters within word for vowels

const vowelChecker = (word) => {
    
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(i=0; i<word.length; i++){
        if(vowels.includes(word[i])){
            return i
        }    
    }
}
console.log(vowelChecker(vowelTester1))
console.log(vowelChecker(vowelTester2))
console.log(vowelChecker(vowelTester3))



