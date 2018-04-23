function initApp(){
	var unsub = firebase.auth().onAuthStateChanged(function(user) {
	if(user) {
		window.location.href = "voteorpost.html";
	} else {
		console.log('not logged in');	
	}
	});
};
window.onload = function(){
	initApp();
};
function login() {
	var userEmail = document.getElementById("txtuser").value;
	var userPass = document.getElementById("txtpass").value;

	if(!userPass || !userEmail){
		window.alert("email and password required");
		return console.log('email and password required');
	}

	console.log(userEmail);
	console.log(userPass);
	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  console.log('LogIn error', error);
	  window.alert("Error: " + errorMessage);
	});
	console.log("messed up");
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
		console.log("we in here");
		window.alert("Error: " + errorMessage);
	}); 

	console.log("signed up with email " + userEmail);

	//check email
};

function post(){
	console.log("we in the add post");
	//setup the child reference
	var fbref = firebase.database.ref();

	//dummy testing
	fbref.child("question").set("who dis");
	//get the question and the answers
	var question = document.getElementById('mainQ').value;
	var a1 = document.getElementById('mainA1').value;
	var a2 = document.getElementById('mainA2').value;

	//get unique ID of the post
	var new ClientKey = database.ref().child('posts').push().key;

	database.ref('posts/' + ClientKey + '/question').set(question);
	database.ref('posts/' + ClientKey + '/a1').set(a1);
	database.ref('posts/' + ClientKey + '/a2').set(a2);

};

if(window.closed){
	firebase.auth().signOut();
}
