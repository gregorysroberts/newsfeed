$(document).ready(function() {
	$.ajax('https://api.parse.com/1/classes/NewsItem', 
		{
			beforeSend: function (request) {
				request.setRequestHeader('X-Parse-Application-Id', 'p1BfzzXQ5fvRb6i60kmuUUerC3ObIZOR4tnMXQLN');
				request.setRequestHeader('X-Parse-REST-API-Key', 'aKicpnI01E66EXLGhsbADQUBVqnoP66SDGehJV4y');
			}
		}
	).done(function(response){
		console.log(results[0].title);
	});
});