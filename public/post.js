function post(){
	console.log("we in the add post");
	//setup the child reference
	//get the question and the answers
	var question = document.getElementById('mainQ').value;
	var a1 = document.getElementById('mainA1').value;
	var a2 = document.getElementById('mainA2').value;
	var c1 = 0;
	var c2 = 0;

	//get unique ID of the post
	var ClientKey = database.ref().child('posts').push().key;

	database.ref('posts/' + ClientKey + '/question').set(question);
	database.ref('posts/' + ClientKey + '/a1').set(a1);
	database.ref('posts/' + ClientKey + '/a2').set(a2);
	database.ref('posts/' + ClientKey + '/c1').set(c1);
	database.ref('posts/' + ClientKey + '/c2').set(c2);

	document.getElementById('mainQ').value = "";
	document.getElementById('mainA1').value = "";
	document.getElementById('mainA2').value = "";

	alert("You have successfully Posted!");
};

function signOut(){
	firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log("signout done");
        document.location.href = '/index.html';     
        alert("successfully signed out!")      
    }, function(error) {
       		// An error happened.
       		alert("An error has occured while signing out!");
            console.log(error);
        });
}