function login() {
	var userEmail = document.getElementById("txtuser").value;
	var userPass = document.getElementById("txtpass").value;

	if(!userPass || !userEmail){
		window.alert("email and password required");
		return console.log('email and password required');
	}

	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  console.log('LogIn error', error);
	  window.alert("Error: " + errorMessage);
	});
};

function signUp() {
	var userEmail = document.getElementById("txtuser").value;
	var userPass = document.getElementById("txtpass").value;
	if(!userPass || !userEmail){
		window.alert("email and password required");
		return console.log('email and password required');
	}


	firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;

		window.alert("Error: " + errorMessage);
	}); 

	console.log("signed up with email " + userEmail);

	//check email
}