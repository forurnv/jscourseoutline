


const saveBlogPost = (blog) => {
	const getUrl = 'https://now-server.orangeman.now.sh/api/blog'
	return fetch(getUrl, {
			method: 'POST',
			body: JSON.stringify({
					title: blog.title,
					author: blog.author,
					blogBody: blog.body
			})
	})
	.then(x => x.json())
	.then(x => {
			if (x.error) {
					throw x.error
			}
			updateDisplay('')

			console.log(x)
			
	})
	.catch(err => {
			console.log(err)
	})
}

const title = document.querySelector('#title')
const author = document.querySelector('#author')
const body = document.querySelector('#comment')
const sub = document.querySelector('#submit')

function updateDisplay (text) {
  const el = document.querySelector('#form-status')  
  el.textContent = text
}


sub.addEventListener('click', x => {
	x.preventDefault()



	// ... write validation here before saving blog post
	
			if (title.value.length === 0) {
				title.style.borderColor = "red"
				updateDisplay ("you need a title")
				return
			} else {
				title.style.borderColor = "black";
			}

			if (author.value.length === 0) {
			author.style.borderColor = "red"
				updateDisplay ("you need an author")
				return
			} else {
				author.style.borderColor = "black";
			}

			if (comment.value.length === 0) {
				comment.style.borderColor = "red"
				updateDisplay ("you need a comment")
				return
			} else {
				comment.style.borderColor = "black";

			}





	// ... write validation here before saving blog post



	updateDisplay('Submitting...')


	saveBlogPost({
			title: title.value,
			author: author.value,
			body: body.value
	})
})



// writeToPage('Loading...')

// example: element.style.borderColor = 'red'
