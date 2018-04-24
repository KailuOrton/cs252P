var counterMain1 = 0;
var counterMain2 = 0;
var counterSimple = 0;
var idMain = '';
var arrIds = [];
function vote(){
	//testing for entry
	console.log("we in the vote");
	var ref = database.ref('posts');
	ref.on('value', gotVote, errVote);
}
function gotVote(vote){
	console.log("In here vote");
	var posts = vote.val();
	var keys = Object.keys(posts);
	var content = '';
	//console.log(keys);
	var ref1 = database.ref('posts');
	ref1.on('child_added', function(snapshot, prevChildKey){
		if(counterSimple == 0 || !(arrIds.includes(snapshot.key))){
		arrIds.push(snapshot.key);
		counterSimple++;
		console.log("current key: " + snapshot.key + "; prev key: "+ prevChildKey);
		console.log(snapshot.key);
		var newPost = snapshot.val();
		var tempid = snapshot.key;
		var counter1 = newPost.c1;
		console.log(counter1);
		var counter2 = newPost.c2;
		console.log(counter2);

		content += '<tr>';
        content += '<td>' + newPost.question + '</td>'; //column1
        content += '<td><button class="vote" id=' + tempid + ' onclick="answer1click(this.id)">' + newPost.a1 + '</button></td>';//column2
        content += '<td><button class="post" id=' + tempid + ' onclick="answer2click(this.id)">' + newPost.a2 + '</button></td>';//column3
        content += '</tr>';
    	}	
	});
	$('#ex-table').append(content);
}

function update1(){
	console.log(counterMain1);
	database.ref('posts/' + idMain + '/').update({c1: counterMain1});
	alert("You voted for answer 1!");
}

function update2(){
	console.log(counterMain2);
	database.ref('posts/' + idMain + '/').update({c2: counterMain2})
	alert("You voted for answer 2!");
}
function answer1click(clicked_id){
	console.log("answer 1 clicked, id is: ");
	console.log(clicked_id);
	idMain = clicked_id;
	var refCount = database.ref('posts/' + clicked_id + '/c1');
	refCount.on('value', function(snapshot){
		counterMain1 = snapshot.val() + 1;
		console.log("snapshot val is ");
	})
	update1();
}

function answer2click(clicked_id){
	console.log("answer 2 clicked, id is: ");
	console.log(clicked_id);
	idMain = clicked_id;
	var refCount = database.ref('posts/' + clicked_id + '/c2');
	refCount.on('value', function(snapshot){
		counterMain2 = snapshot.val() + 1;
		console.log("snapshot val is ");
	})
	update2();
}
function errVote(err){
	console.log(err);
}
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
window.onload = function(){
	vote();
}
