function createNew() {
	let newParagraph = document.createElement("p");
	newParagraph.textContent = "new text";
	document.getElementById("blank").appendChild(newParagraph);
}

window.onload = function() {
	setTimeout(createNew, 5000);
}