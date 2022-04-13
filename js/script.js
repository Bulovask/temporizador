const mainDisplay = document.getElementById("main-display");

let definiteTimeMS = 60 * 1000;
let running = false;
let lastTimeMS = 0;
let elapsedTimeMS = 0;

function loop() {
	if(running) {
		const now = Date.now();
		elapsedTimeMS += now - lastTimeMS;
		lastTimeMS = now;
		requestAnimationFrame(loop);
		updateDisplay();
	}
}

function getRemainingTime() {
	return definiteTimeMS - elapsedTimeMS;
}

function updateDisplay() {
	//mainDisplay
	function format(n, f = 2) {
		return ("0".repeat(f - 1) + String(n) % 100).substr(-f, f);
	}
	const timeMS = getRemainingTime();
	const h = Math.abs(Math.trunc(timeMS / 3600000));
	const m = format(Math.abs(Math.trunc(timeMS / 60000) % 60));
	const s = format(Math.abs(Math.trunc(timeMS / 1000) % 60));
	const ms = format(Math.abs(Math.trunc(timeMS / 10) % 100));
	
	mainDisplay.innerHTML = `${h}:${m}:${s}:${ms}`;
}

function start() {
	running = true;
	lastTimeMS = Date.now();
	loop();
}

function pause() {
	running = false;
}

function reset() {
	pause();
	elapsedTimeMS = 0;
	updateDisplay();
}

function toggle() {
	if(running) pause();
	else start();
}

const display_keyboard = document.querySelector("#secondary-display")
let flagReady = true
const num_one = document.querySelector("#one")
const num_two = document.querySelector("#two")
const num_three = document.querySelector("#three")
const num_four = document.querySelector("#four")
const num_five = document.querySelector("#five")
const num_six = document.querySelector("#six")
const num_seven = document.querySelector("#seven")
const num_eight = document.querySelector("#eight")
const num_nine = document.querySelector("#nine")
const num_zero = document.querySelector("#zero")

num_one.addEventListener("click", function(e){

	e.preventDefault();

	const value_one = 1
	display_keyboard.textContent += value_one
});

num_two.addEventListener("click", function(e){
	e.preventDefault();

	const value_two = 2
	display_keyboard.textContent += value_two
});

num_three.addEventListener("click", function(e){
	e.preventDefault();

	const value_three = 3
	display_keyboard.textContent += value_three
});

num_four.addEventListener("click", function(e){
	e.preventDefault();

	const value_four = 4
	display_keyboard.textContent += value_four
});

num_five.addEventListener("click", function(e){
	e.preventDefault();

	const value_five = 5
	display_keyboard.textContent += value_five
});

num_six.addEventListener("click", function(e){
	e.preventDefault();

	const value_six = 6
	display_keyboard.textContent += value_six
});

num_seven.addEventListener("click", function(e){
	e.preventDefault();

	const value_seven = 7
	display_keyboard.textContent += value_seven
});

num_eight.addEventListener("click", function(e){
	e.preventDefault();

	const value_eight = 8
	display_keyboard.textContent += value_eight
});

num_nine.addEventListener("click", function(e){
	e.preventDefault();

	const value_nine = 9
	display_keyboard.textContent += value_nine
});

num_zero.addEventListener("click", function(e){
	e.preventDefault();

	const value_zero = 0
	display_keyboard.textContent += value_zero
});

function ready(){
	let btnReady = document.querySelector("#btn_ready")
	if(flagReady){
		btnReady.setAttribute("disabled", "")
	}else if(flagReady){
		btnReady.setAttribute("enabled", "")

	}
}

ready()