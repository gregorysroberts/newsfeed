$(document).ready(function() {
	$.ajax('https://api.parse.com/1/classes/NewsItem', 
		{
			beforeSend: function (request) {
				request.setRequestHeader('X-Parse-Application-Id', 'p1BfzzXQ5fvRb6i60kmuUUerC3ObIZOR4tnMXQLN');
				request.setRequestHeader('X-Parse-REST-API-Key', 'aKicpnI01E66EXLGhsbADQUBVqnoP66SDGehJV4y');
			}
		}
	).done(function(response){
		//Create a for loop that will loop through the array and append each title and body
		console.log(response.results.length);
		for (var i = 0; i < response.results.length; i++) {
			console.log(response.results[i].title);
			console.log(response.results[i].body);

			//Append a div with classname newsitem that contains an h1 with the title and a p containing the body
			var newsFeed = 
			"<div class=newsitem>" +
				"<h1>" + response.results[i].title + "</h1>" +
				"<p>" + response.results[i].body + "</p>" +
			"</div>"



			$('.container').append(newsFeed);
		}
	});
});