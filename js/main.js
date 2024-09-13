const keys = document.querySelectorAll('.key')
const keyClick = e => {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	// console.log(audio)

	if (audio != null) {
		audio.currentTime = 0
		audio.play()
	} else {
		console.warn('BLAD')
		// dodac tutaj popup ze klawisz jest bledny
	}
}

const keyAnimation = e => {
	const animation = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	// console.log(animation)

	if (animation != null) {
		animation.classList.add('playing')
	} else {
		console.warn('BLAD')
	}
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') {
		return
	} else {
		// console.log((e.propertyName = 'transform'))
		this.classList.remove('playing')
	}
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition))
document.addEventListener('keydown', keyClick)
document.addEventListener('keydown', keyAnimation)
