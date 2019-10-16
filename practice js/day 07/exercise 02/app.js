


function sendComment(name, email, comment) {
	const getUrl = 'https://now-server.orangeman.now.sh/api/form1'
	return fetch(getUrl, {
			method: 'POST',
			body: JSON.stringify({
					name: name,
					email: email,
					comment: comment
			})
	})
	.then(x => x.json())
	.then(x => {
			if (x.error) {
					throw x.error
			}

			console.log(x)

	})
	.catch(err => {
			console.log(err)
	})
}

const name = document.querySelector('#name')
const sub = document.querySelector('#submit')

sub.addEventListener('click', x => {
	x.preventDefault() // we must prevent default, so we dont try to either reload this page or go to a different page
	sendComment(name.value, email.value, comment.value)
})

