function post(){
	console.log("we in the add post");
	//setup the child reference
	//get the question and the answers
	var question = document.getElementById('mainQ').value;
	var a1 = document.getElementById('mainA1').value;
	var a2 = document.getElementById('mainA2').value;

	//get unique ID of the post
	var ClientKey = database.ref().child('posts').push().key;

	database.ref('posts/' + ClientKey + '/question').set(question);
	database.ref('posts/' + ClientKey + '/a1').set(a1);
	database.ref('posts/' + ClientKey + '/a2').set(a2);

};