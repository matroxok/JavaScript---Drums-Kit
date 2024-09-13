const keyClick = e => {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	// console.log(audio)

	if (audio != null) {
		audio.currentTime = 0
		audio.play()
	} else if (audio === null) {
		console.warn('BLAD')
		// dodac tutaj popup ze klawisz jest bledny
	}
}

const keyAnimation = e => {
	const animation = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	console.log(animation)

	animation.classList.add('test')
}

document.addEventListener('keydown', keyClick)
document.addEventListener('keydown', keyAnimation)
