// <!-- <!DOCTYPE html>
// <html lang="en">
// 	<head>
// 		<meta charset="UTF-8">
// 		<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 		<meta http-equiv="X-UA-Compatible" content="ie=edge">
// 		<title>Document</title>
// 	</head>
// 	<body>
			
// 		<h1>Mountains</h1>

// 		<div id="mountains">

// 		<table id="mountaintable">
		
// 		</table>
// 		</div>
// 			<script src="app.js"></script>

// 	</body>
// </html>


// // const location = document.querySelector("#mountains")
// // const newtable2 = document.createElement("table")
// // 	newtable2.className = "mountains"
// // 	newtable2.textContent = "mountainexercises"
// 	// location.appendChild(newtable2)

// const mountains2 = [
// 	{name: "Kilimanjaro", height: 5895, place: "Tanzania"},
// 	{name: "Everest", height: 8848, place: "Nepal"},
// 	{name: "Mount Fuji", height: 3776, place: "Japan"},
// 	{name: "Vaalserberg", height: 323, place: "Netherlands"},
// 	{name: "Denali", height: 6168, place: "United States"},
// 	{name: "Popocatepetl", height: 5465, place: "Mexico"},
// 	{name: "Mont Blanc", height: 4808, place: "Italy/France"}
// ]


// // MAKING THE TDTAG FOR MOUNTAIN DATA:
// function createdata() {
// 	const tdtag = document.createElement("td")
// 	tdtag.className = "tddata"
// 	return tdtag
// }
// // const assigntd = document.querySelector(".trow2")
// // assigntd.appendChild(createdata())

// // MAKING THE TRTAG FOR MOUNTAIN DATA TD'S:
// function createtablerow() {
// 	const trtag = document.createElement("tr")
// 	trtag.className = "trow2"
// 	return trtag
// }
// const assigntr = document.querySelector("#mountaintable")
// assigntr.appendChild(createtablerow())

// // POPULATING DATA INTO ENTIRE ROW
// function createentirerow(mountains2) {
// 	const tr = createtablerow()
// 	const tdmountain = createdata(mountains2)
// 	const tdheight = createdata(mountains2)
// 	const tdplace = createdata(mountains2)
// 	tr.appendChild(tdmountain)
// 	tr.appendChild(tdheight)
// 	tr.appendChild(tdplace)
// 	return tr
// }
// debugger




// const table = document.createElement("table")
// 	for (let index = 0; index < mountains2.length; index++) {
// 		const mountaindata = mountains2[index];
// 		const completetable = createentirerow(mountains2);
// 		table.appendChild(completetable)
// 		mountaintable.appendChild(table)
// 	}





// // - - - - - - - - - - - - - - - - - - - - - - 
// // ADDING 
// // - - - - - - - - - - - - - - - - - - - - - - 
// 1. get location

// const section = document.querySelector('.section')

// 2. create the thing u want to put in that location

// const newElement = document.createElement('p')
// newElement.textContent = 'added new element'
// newElement.className = 'my-new-class'

// 3. add the element to that location

// section.appendChild(newElement)



// // - - - - - - - - - - - - - - - - - - - - - - 
// // REMOVE  
// // - - - - - - - - - - - - - - - - - - - - - - 
// const referenceToNewElement = document.querySelector('.my-new-class')
// referenceToNewElement.remove()




 




















