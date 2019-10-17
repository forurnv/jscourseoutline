

// console.log("give my order")
// setTimeout(function () {
// 	debugger
// 	console.log("get drink")
// }, 2000)



// EXERCISE 1 PLACING THE ORDER

// const makeExpensiveDrink = new Promise(function(resolve, reject) {
//   setTimeout(function(){
//     resolve('heres your coffee')
//   }, 2000)
// })
// makeExpensiveDrink.then(function(text) {
// 	console.log(text)
// })


// const myAction = () => 1234
// SOOOOOOOOOO FUCKING COOOOOOOOL!!!!!!!!!!!!!!!
// const url = 'https://swapi.co/api/planets/1/'
// fetch(url)
// 	.then(x => x.json())
//   .then(x => {
// 		console.log("NAME:", x.name)
// 		console.log("POPULATION:", x.population)
// 		console.log("CLIMATE:", x.climate)
// 		console.log("DIAMETER (in meters):", x.diameter)
//   })



	// const url = 'https://swapi.co/api/PURPOSELY-WRONG-REQUEST'
	// fetch(url)
	// .then(x => {
	// 	return x.json()
	// })
	// .then(x => {
	// 	console.log('success!')
	// })
	// .catch(err => {
	// console.log("server not responding")
	// })




// EXERCISE 2 RESPONSE TO ANY ERROR



	// const url = 'https://swapi.co/api/people/146784678'
	// fetch(url)
	// 	.then(x => {
	// 		return x.json()
	// 	})

	// 	.then(x => {
	// 		if (x.detail === "Not found") {
	// 			throw 'zebra'

	// 		}

	// 		console.log('Name - ', x.name)
	// 		//console.log("success!")
	// })

	// // .catch(err => {
	// // console.log("server not responding!")
	// // })
	// .catch(err => {


		
	//    console.log(err || "server not responding")
	// })
	


	// EXERCISE 3 REPLIES TO SPECIFIC ERRORS

	// function writeToPage(text) {
	// 	const el = document.createElement('div')
	// 	el.style = `
	// 		padding: 20px 40px;
	// 		border-radius: 5px;
	// 		background: #222;
	// 		color: white;
	// 		font-family: sans-serif;
	// 		display: block;
	// 		max-width: 15em;
	// 	`
	// 	el.textContent = text
	// 	document.body.appendChild(el)
	// }
	// const Url = 'https://swapi.co/api/people/1'
	// // const invalidUrl = 'https://swapi.co/api/NOT-VALID'

	// fetch(Url).then(x => {
	// 	return x.json()
	// })
	// .then(x => {
	// 	writeToPage(x.name)
	// 	writeToPage(x.height)
	// 	writeToPage(x.homeworld)
	// 	writeToPage(x.starships)
	// })
	// .then(x => {
	// 	if (x.detail === "Not found") {
	// 		throw new Error("results Not found")
	// 	}
	// 	console.log("success!")
	// })


// EXERCISE 4 REPLIES WHILE LOADING (CLIENT WAITING)

// function writeToPage(text) {
//   const el = document.createElement('div')
//   el.id = 'display'
//   el.style = `
//     padding: 20px 40px;
//     border-radius: 5px;
//     background: #222;
//     color: white;
//     font-family: sans-serif;
//     display: inline-block;
//   `
//   el.textContent = text
//   document.body.appendChild(el)
// }
// function updateDisplay (text) {
//   const el = document.querySelector('#display')  
//   el.textContent = text
// }
// const url = 'https://swapi.co/api/people/1'
// writeToPage('Loading...')
// fetch(url).then(x => {
//   return x.json()
// })
// .then(x => {
// 	updateDisplay (x.name)
// 	writeToPage(x.height)
// 	writeToPage(x.homeworld)
// 	writeToPage(x.starships)
// })

// MY ORIGINAL THOUGHTS ON THIS EXERCISE FROM MDN
// var el = document.getElementById('div-02');
// el.remove(); // Removes the div with the 'div-02' id




// EXERCISE 5 REPLIES WHILE LOADING (CLIENT WAITING)


// function writeToPage(text) {
//   const el = document.createElement('div')
//   el.id = 'display'
//   el.style = `
//     padding: 20px 40px;
//     border-radius: 5px;
//     background: #222;
//     color: white;
//     font-family: sans-serif;
//     display: inline-block;
//   `
//   el.textContent = text
//   document.body.appendChild(el)
// }
// function updateDisplay (text) {
//   const el = document.querySelector('#display')  
//   el.textContent = text
// }
// const url = "https://pokeapi.co/api/v2/pokemon/1"

// writeToPage('Loading...')
// fetch(url).then(x => {
//   return x.json()
// })
// .then(x => {
// 	updateDisplay (x.name)
// 	writeToPage(x.height)

// 	writeToPage(x.abilities)
// 	writeToPage(x.age)
// })

// MY ORIGINAL THOUGHTS ON THIS EXERCISE FROM MDN
// var el = document.getElementById('div-02');
// el.remove(); // Removes the div with the 'div-02' id

