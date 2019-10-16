


const url = "https://pokeapi.co/api/v2/pokemon/"
fetch (url)
	.then(x => x.json())
	.then(x => {
	debugger

		const y = x.results
		console.log (y)

	// const abilities = x.abilities[0].ability
	debugger
})

// array.forEach(element => {
	
// });












