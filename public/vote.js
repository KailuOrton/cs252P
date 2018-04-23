function vote(){
	//testing for entry
	console.log("we in the vote");
	var ref = database.ref('posts');
	ref.on('value', gotVote, errVote);
}
function gotVote(vote){
	console.log(vote.val());
}
function errVote(err){
	console.log(err);
}
window.onload = function(){
	vote();
}
