const audio = document.querySelector('aud')

const keyClick = e => {
	console.log(e.keyCode)
}

document.addEventListener('keydown', keyClick)
