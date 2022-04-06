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
