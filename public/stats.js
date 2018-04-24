var counterSimple = 0;
var idMain = '';
var arrIds = [];
function stats(){
	console.log("we in the stats");
	var ref = database.ref('posts');
	ref.on('value', gotStats, errStats);
}
function gotStats(){
	console.log("In here stats");
	var ref1 = database.ref('posts');
	var content = '';
	ref1.on('child_added', function(snapshot, prevChildKey){
		if(counterSimple == 0 || !(arrIds.includes(snapshot.key))){
			arrIds.push(snapshot.key);
			counterSimple++;
			var newPost = snapshot.val();
			var tempc1 = newPost.c1;
			console.log("tempc1 value is " + tempc1);
			var tempc2 = newPost.c2;
			console.log("tempc2 value is " + tempc2);
			var total = tempc2 + tempc1;

			if(total == 0){
				console.log("we in here if");
				perc1 = 0;
				perc2 = 0;
			}
			else{
				var perc1 = tempc1/total;
				perc1 = Math.round(perc1*100)/100;
				perc1 *= 100;
				console.log("perc1 val is: " + perc1);
				var perc2 = tempc2/total;
				perc2 = Math.round(perc2*100)/100;
				perc2 *= 100;
				console.log("perc2 val is: " + perc2);
			}
			content += '<tr>';
        	content += '<td>' + newPost.question + '</td>'; //column1
        	content += '<td style="text-align: center;">' + perc1 + " %" + '</td>';//column2
        	content += '<td style="text-align: center;">' + perc2 + " %" + '</td>';//column3
        	content += '</tr>';
        }
    });	
	$('#ex-table').append(content);
}
function errStats(err){
	console.log(err);
}
window.onload = function(){
	stats();
}
