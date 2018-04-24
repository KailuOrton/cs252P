var counterMain = 0;
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
	console.log("In here");
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
		//console.log("Question ", newPost.question);
		//console.log("Answer1 ", newPost.a1);
		//console.log("Answer2 ", newPost.a2);

		content += '<tr>';
        content += '<td>' + newPost.question + '</td>'; //column1
        content += '<td><button class="vote" id=' + tempid + ' onclick="answer1click(this.id)">' + newPost.a1 + '</button></td>';//column2
        content += '<td><button class="post" id=' + tempid + ' onclick="answer2click(this.id)">' + newPost.a2 + '</button></td>';//column3
        content += '</tr>';
    	}	
	});
	$('#ex-table').append(content);

	/*
	for(var i = 0; i < keys.length; i++){
		var k = keys[i];
		var question1 = posts[k].question;
		var a11 = posts[k].a1;
		var a21 = posts[k].a2;

		//stackoverflow solution
		content += '<tr>';
        content += '<td>' + question1 + '</td>'; //column1
        content += '<td><button>' + a11 + '</button></td>';//column2
        content += '<td><button>' + a21 + '</button></td>';//column3
        content += '</tr>';

        $('#ex-table').append(content);
		//console.log(question, a1, a2);
		*/
		/*var quest = document.createElement("text");
		var textnode1 = document.createTextNode(question1);
		quest.appendChild(textnode1);
		document.getElementById('questlist').appendChild(textnode1);

		var a1b = document.createElement("button");
		var textnode2 = document.createTextNode(a11);
		a1b.appendChild(textnode2);
		document.getElementById('a1button').appendChild(a1b);

		var a2b = document.createElement("button");
		var textnode3 = document.createTextNode(a21);
		a2b.appendChild(textnode3);
		document.getElementById('a2button').appendChild(a2b);
		*/
		
	//}


}

function update(){
	console.log(counterMain);
	database.ref('posts/' + idMain + '/').update({c1: counterMain});
}

function answer1click(clicked_id){
	console.log("answer 1 clicked, id is: ");
	console.log(clicked_id);
	idMain = clicked_id;
	var refCount = database.ref('posts/' + clicked_id + '/c1');
	refCount.on('value', function(snapshot){
		counterMain = snapshot.val() + 1;
		console.log("snapshot val is ");
	})
	//database.ref('posts/' + idMain + '/').update({c1: c1+1});
	/*idMain = clicked_id;
	var ref = firebase.database().ref('posts/' + clicked_id + '/c1');
	ref.transaction(function(counter1){
		counterMain = counter1 + 1;
	});
	console.log('after trans');
	console.log(counterMain);
	/*
	console.log("the counter is");
	console.log(counter1);
	*/
	update();
}

function answer2click(clicked_id){
	console.log("answer 2 clicked, id is: ");
	console.log(clicked_id);
	/*
	console.log("the counter is");
	console.log(counter2);
	*/
}
function errVote(err){
	console.log(err);
}
window.onload = function(){
	vote();
}
