

// // FIRST

// let bill = 40
// console.log(bill * 1.18)
// // this function works but doesnt allow for a variable to be used multiple Times therefore it is a single use function.


// // this function works multiple time b/c the addtip allows for any value to be used inside it whereas the above function requires you to change it continuously.
// function addTip(bill) {
// 	console.log(bill * 1.18)
// }

// // addTip(20.0)


// // NEXT

// // io - Input
// const bill = prompt ("what was your bill")

// // definition
// function addTip() {
// 	return bill * 1.18
// }

// // actually doing it
// addTip()


// // io - output
// console.log(addTip())



// // NEXT |OR| ...function.

// // arrow functions
// const addTip = bill => bill * 1.2
// // or
// const addTip = bill => {
// 	return bill * 1.2
// }


// // NEXT LEARNING SCOPE

// const main = () => {
//   const sneakyDependancy = 5
//   const printFinalScore = () => {
//     console.log(sneakyDependancy)
//   }
//   printFinalScore()
// }
// main()


// // NEXT LEARNING THE CALL STACK....
// // OR SEQUENCE WHICH CODE IS READ


// const chooseRed = () => {
// 	console.log('chose red')
// }

// const chooseBlue = () => {
// 	console.log('chose red')
// }

// const chooseYellow = () => {
// 	console.log('chose red')
// }

// const setupCanvas = () => {
// 	console.log('canvas is setup')
// }

// const chooseColors = () => {
// 	chooseBlue()
// 	chooseYellow()
// }

// const paint = () => {
// 	console.log('painted')
// }

// const signMyName = () => {
// 	console.log('name signed')
// }

// const makePainting = () => {
// 	setupCanvas()
// 	chooseColors()
// 	paint()
// 	signMyName()
// }

// makePainting()


// // NEXT ASSIGNMENT 1:
// // What number is bigger?
// // Write a function named greaterNum that:
// // takes 2 arguments, both numbers.
// // returns whichever number is the greater (higher) number.
// // Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

// // input

// // let firstnumber = prompt ("whats your first number?")
// // let secondnumber = prompt ("whats your second number?")

// // firstnumber = prompt ("whats your first number?")
// // secondnumber = prompt ("whats your second number?")

// let one = 5
// let two = 15

// // definition

// function greaterNum() {
// 	if (one > two) {
// 	return one
// }
// 	else  {
// 		return two
// 	}
// }

// // program itself

// output

// console.log (greaterNum())


// // NEXT ASSIGNMENT 2
// // The Grade Assigner
// // Write a function named assignGrade that:
// // takes 1 argument, a number score.
// // returns a grade for the score, either "A", "B", "C", "D", or "F".
// // Call that function for a few different scores and log the result to make sure it works.


// // INPUT


// const grade = 65

// // DEFINITION

// function assignGrade(grade) {
// 				 if (grade >= 90) {
// 		console.log(grade + " = A")
// 	} else if (grade >= 80) {
// 		console.log(grade + " = B")
// 	} else if (grade >= 70) {
// 		console.log(grade + " = C")
// 	} else if (grade >= 60) {
// 		console.log(grade + " = D")
// 	} else if (grade >= 51) {
// 		console.log(grade + " = F")
// 	} else    {
// 		console.log("see instructor")

// 	}
// }


// // PROGRAM




// // OUTPUT


// assignGrade (49)



// NEXT ASSIGNMENT 3
// Word Pluralizer
// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.


// INPUT


// let animal = "cat"
// let number = "3"

// // DEFINITION

// function pluralize() {
// 	if (number > 1) {
// 		return console.log((number + " " + animal + "s"))
// 	}
// 		else  {
// 		return console.log((number + " " + animal))
// 		}
// }

// // PROGRAM

// const result = pluralize(number, animal)

// OUTPUT



// NEXT ASSIGNMENT 4
// Word Translator
// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.



// // NEXT ASSIGNMENT 4
// // CREATE AN OBJECT LIST WITH ACTIVE DESTINATION BARK!


// // INPUT

// // DEFINITION

// // PROGRAM

// const dog = {
// 		name: "Spot",
// 		legs: 4,
// 		color: "brown",
// 		age: 7,
// 		city: "Calgary",
// 		bark: function() {
// 			console.log("BARK!")
// 		}
// }

// // OUTPUT

// console.log(dog.name)
// dog.bark()


// // NEXT ASSIGNMENT 4
// // CREATE AN ARRAY OF INFORMATION "STUDENTS"


// // INPUT 



// // DEFINITION



// // PROGRAM 


// const student = {
// 	name: "John",
// 	id: "1234",
// 	email: "john@example.com",

// }
// const student = {
// 	name: "Jane",
// 	id: "1234",
// 	email: "john@example.com",

// }
// const student = {
// 	name: "Mitch",
// 	id: "1234",
// 	email: "john@example.com",
// }

// const students = ["John", "Jane", "Mitch"]


// // HIS EXAMPLE:
// // const players = ["bananas", "apples", "oranges"]
// // console.log(players)
// // players.forEach(function(item) {
// // 		console.log(item)
// // })

// // OUTPUT

// students.forEach(function(name) {
// 		console.log(name)
// })




// NEXT ASSIGNMENT 5
// CREATE AN ARRAY OF INFORMATION "SHOPPING LIST"


// INPUT 



// DEFINITION



// // PROGRAM 


// const mallorysshoppingList = [
// 		"bananas",
// 		"apples",
// 		"oranges",
// ]
// function additemtotheshoppinglistformollytoget(mallorysshoppingList, item) {
// 	mallorysshoppingList.push(item)
// 	console.log(mallorysshoppingList)
// }

// function removethelastitemtomakemollyslifeeasier(item) {
// 	mallorysshoppingList.pop();
// 	console.log(mallorysshoppingList)
// }

// function addmollysimportant(mallorysshoppingList, item) {
// 	mallorysshoppingList.unshift(item);
// 	console.log(mallorysshoppingList)
// }

// function removemollysimportant(mallorysshoppingList) {
// 	mallorysshoppingList.shift();
// 	console.log(mallorysshoppingList)
// }

// // ADD TO THE END:
// // shoppingList.push("kiwi")

// // SEE SOMETHING:
// // shoppingList[X]

// // REMOVE FROM END:
// // shoppingList.pop()

// // FINDING AN ITEM IN YOUR INDEX (LIST):
// // shoppingList.indexOf("oranges for example")

// // // OUTPUT

// console.log(shoppingList)




// // NEXT ASSIGNMENT 6 NESTED CODE LOOPS

// // INPUT 

// // function cakerecipe() {
// // }	

// // DEFINITION/INGREDIENTS

// // const spotformyrecipe = cakerecipe

// const shoppinglist = ["bananas","oranges","apples"]

// // PROGRAM/RECIPE

// function printlist(list,action) {
// 	for (let index = 0; index < list.length; index++) {
// 	// const element = array[index];
// 	action(list[index])
// 		// console.log(list[index])
// }
// }

// // OUTPUT/CAKE

// printlist(shoppinglist, printtoconsole)

// function printtoconsole(item) {
// 	console.log(item)
// }


// #1
// make a function called 'generateId'. It should take no arguments and return a string. Hint: Math.random might be helpful here. Click here for MDN's docs on Math.random

// function generateid() {
// 	return Math.ceil(Math.random()/2*10);
// }
// console.log(generateid())


// #2
// make a function called 'chooseRandomTeam'. It should take an array of strings and return a string.


// function chooserandomteams(teamlist) {
// 		index = Math.ceil(Math.random()teamlist.length)
// 		const teamlist = ["mitch","balls","boner","poons","dicks"]
// 		return teamlist[index]
// 			}
	
// console.log(chooserandomteams)


// #3
// make a 'createPlayer' function . It should take a string (name of player), and returns the following object with a random team assigned and a random id:


// function createplayer(name) {
// 	return {
// 		id: generateid(),
// 		name: name,
// 		score: 0,
// 		team: chooserandomteams
// 	}
// }
// const result = createplayer

// #4
// make a function called add10Points. It should take an array of players, and the name of the person you want to add 10 points to. It should return a new array with the updated score. (Hint, use findIndex to find the person you want to update) Example:





// #5
// make a function called getTeamsOverallScore. It should take an array of players and a team name. It should return a number of the total score of all players on that team. (if all team members have zero points, then it should return zero).




// function add10points(listofplayers, playername) {
// 	// find player

// 		const player = listofplayers.findindex(function(player) {
// 			return player.name === playername
// 		})

// 	// add 10 Points 
// 		listofplayers[index].score = listofplayers[index].score
// 	return listofplayers

// }

// add10points(players, "john")



