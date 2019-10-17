

// const dog = {
// 	type: "German Sheppard",
// 	legs: 4,
// 	color: "brown",
// 	bark: function() {
// 		// function say() {
// 		console.log ("WOOF Im a " + this.type + " !!!")
// 	// } 
// 	// say.call(this) 
// 	// ------THESE ARE FOR REACHING "this" when nested-------
// 	// say.bind(this)

// }

// }
// const husky = {
// 	type: "Husky",
// 	legs: 4,
// 	color: "brown",
// 	bark: function() {
// 		console.log ("WOOF Im a" + husky.type + " !!!")
// 	}

// }
// dog.bark ()


// const dog = {
// 	color: 'red',
// 	legs: 4,
// 	favoriteToy: 'ball',
// 	bark() {
// 			console.log('I am ', this.color)
// 	},
// 	play() {
// 			console.log('chasing ', this.favoriteToy)
// 	},

// 	getNewToy(toy) {
// 			this.favoriteToy = toy
// 	}
// }

// dog.play()
// dog.getNewToy('frisbee')
// dog.play()


// ---------- Tricky Situation 1 -----------------
// When methods which use this are only used in the context of the object, this will always refer to the object. But if you use that method outside of an object, it will change what this means. therefore .... what NOT to do.



// window.state = {
//     location: 'global'
// }

// function myAction() {
//     console.log(this.state.location)
// }

// const obj = {
//     state: {
//         location: 'obj',
//         score: 0
//     },

//     myAction
// }

// obj.myAction()
// myAction()




// ---------- Tricky Situation 2 -----------------

// const dog = {
//     favoriteToy: 'frisbee',
//     play: function() {
//         console.log('chasing ' + this.favoriteToy)
//     }
// }

// const cat = {
//     favoriteToy: 'bell',
//     play: function(action) {
//           console.log(this.favoriteToy)
//     }
// }

// cat.play() // will work
// function doAction(action) {
//     action()
// }

// doAction(cat.play) // will not work



// -------------EXERCISE  1  -----------------------
// Create an invoice object that has the following:

// description: a string
// total: a number
// setDescription: a function that updates description using this and 1 input
// getDescription: a function that console.logs description using this
// setTotal: a function that updates total using this and 1 input
// getTotal: a function that console.logs total using this
// test out your object methods by setting and getting both values, example:

// const invoice1 = {
// 	name: "project 1",
// 	client: "some naggy mom or golddigger",
// 	quote: 100,
// 	cost: 500,
// 	expenses: 2500,
// 	total: function() {
//   	const	total =  this.quote + this.cost + this.expenses
// 		console.log(this.name + ' totaling: ' +  total + "$");
// 	},
// 	setTotal(x) {
// 		this.cost = this.cost + this.expenses + x
// 	}
// }
// // MORE MONAYAYY
// invoice1.setTotal(5000)
// invoice1.total()

// invoice.setTotal(6)
// invoice.getTotal()

