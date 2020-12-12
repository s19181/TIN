function validate() {
	let pass = true;

	let email = document.getElementById("email").value;
	const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (regex.test(email)) {
		document.getElementById("email").style.background = "green";
	} else {
		document.getElementById("email").style.background = "red";
		pass = false;
	}

	return pass

}