const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let f;


const createTimerAnimator = () => {
	clearInterval(f);

	let distance = inputEl.value;

	f = setInterval(function() {
		distance = Number(distance) - 1;

		let hours = Math.floor(distance / 60 / 60),
			 minutes = Math.floor(distance / 60) - (hours * 60),
			 seconds = distance % 60;
	
		timerEl.innerHTML = `${getZero(hours)} : ${getZero(minutes)} : ${getZero(seconds)} `;
		
	
		if (distance === 0) {
			clearInterval(f);
		}
	
	}, 1000)
}


function getZero(num) {
	if (num >= 0 && num < 10) {
		return `0${num}`;
	} else {
		return num;
	}
}

buttonEl.addEventListener('click', () => {	
	createTimerAnimator();
	
	inputEl.value = '';
	
});
