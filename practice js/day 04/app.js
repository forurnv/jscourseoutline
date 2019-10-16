





	const dropdownbutton = document.querySelector(".menu")
	const switchToggle = document.querySelector("#dropdown")



	dropdownbutton.addEventListener("click", function() {
		console.log("CLICKED")
		switchToggle.className = "dropdown dropdown2"
	})


	const dropdownbuttonclose = document.querySelector(".close")
	const switchToggleback = document.querySelector("#dropdown")



	dropdownbuttonclose.addEventListener("click", function() {
		console.log("CLICKED")
		switchToggleback.className = ".close"
	})









