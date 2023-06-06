// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Delta 2023"
// console.log(cohort.split(""))

// a) Your answer: ['D', 'e', 'l', 't', 'a', ' ', '2', '0', '2', '3']
// b) Verify and explain: The split() method is used to split a string into an array of substrings

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello LEARN Student
// b) Verify and explain: received undefined, I think what happened is because i did'nt add a return 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer:8, 10, 12, 14, 16
// b) Verify and explain: this function will take in the array and apply the .map() function. .map function will iterate to all elements and multiply by 2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [ 11, 13, 15 ]
// b) Verify and explain: returns an array with only odd numbers from the array using the .filter function

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: 0 returns the value 'Javascript' from inside 'myCodingSkills' under 'languages'

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Delta"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: 
// b) Verify and explain:
