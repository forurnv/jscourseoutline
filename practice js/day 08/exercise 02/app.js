

// ------------------  PRE IX 6 (2015)------------------
// BUILDING WITH PROTOTYPES

// function Dog(type) {
//   this.type = type;
// }
// Dog.prototype.speak = function() {
// 	console.log('Hi!! I am a ' + this.type)
// }
// Dog.prototype.play = () => console.log('Chasing ball!!')

// let germanSheppard = new Dog("German Sheppard")
// germanSheppard.speak()
// germanSheppard.play()

// let husky = new Dog("Husky")
// husky.speak()


// ------------------  CIRCA IX 6 (2015)------------------
// BUILDING WITH PROTOTYPES

// const Dog = {
// 	type: 'dog',
// 	bark: () => console.log('Hi!! I am a ' + this.type),
// 	play: () => console.log('Chasing ball!')
// }

// const germanSheppard = Object.create(Dog)
// // IN CONSOLE: check prototype
// germanSheppard.bark()
// // IN CONSOLE: check Object.getPrototypeOf(GermanSheppard)



// -------------EXERCISE  2  -----------------------
// Take the invoice object you made in exercise #1 and make a constructor function which will create new invoices. Test the invoice by calling:

// invoice.setTotal(6)
// invoice.getTotal()
// ES6 Classes
// The above works great, but ES6 introduced a nicer way to accomplish the same thing using classes You will notice that in a class, we do not set properties like before (anything other than a function). Instead we set all the properties in the constructor by putting this.myValue = 42.

// !!! Important Note !!! Notice how there are no commas after each method. This is different from normal objects.


// ---------THIS IS THE PREFERRED METHOD!!!!!!----------

// class Dog {
//   constructor(type) {
//     this.type = type
//   }

//   speak(line) {
//     console.log('Hi!! I am a ' + this.type)
//   }

//   play(line) {
//     console.log(`Chasing ball!`)
//   }
// }
// const germanSheppard = new Dog("German Sheppard")
// germanSheppard.speak()
// germanSheppard.play()



// -------- EXERCISE  1  APPENDED TO EXERCISE 2  -----------


function writeToPage(text) {
	const el = document.createElement('div')
	el.style = `
		padding: 20px 40px;
		border-radius: 5px;
		background: #222;
		color: white;
		font-family: sans-serif;
		display: block;
		max-width: 15em;
	`
	el.textContent = text
	document.body.appendChild(el)
}


const invoice1 = {
	name: "project 1",
	client: "some naggy mom or golddigger",
	quote: 100,
	cost: 500,
	expenses: 2500,
	total: function() {
  	const	total =  this.quote + this.cost + this.expenses
		console.log(this.name + ' totaling: ' +  total + "$");
	},
	setTotal(x) {
		this.cost = this.cost + this.expenses + x
	},

writeToPage(total)

}

console.log(invoice1)

// MORE MONAYAYY  MONAYYYY
invoice1.setTotal(5000)
invoice1.total()








