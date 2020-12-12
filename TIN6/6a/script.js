function calc() {
	let celcius = document.getElementById("input").value;
	let fahrenheit = celcius * 9 / 5 + 32;
	document.getElementById("input").value = fahrenheit;
}