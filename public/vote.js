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
		var newPost = snapshot.val();
		//console.log("Question ", newPost.question);
		//console.log("Answer1 ", newPost.a1);
		//console.log("Answer2 ", newPost.a2);
		content += '<tr>';
        content += '<td>' + newPost.question + '</td>'; //column1
        content += '<td><button class="vote">' + newPost.a1 + '</button></td>';//column2
        content += '<td><button class="post">' + newPost.a2 + '</button></td>';//column3
        content += '</tr>';


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

function errVote(err){
	console.log(err);
}
window.onload = function(){
	vote();
}
