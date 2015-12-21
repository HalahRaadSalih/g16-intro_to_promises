var request = require('request');

function promisfyGet(url){
	return new Promise(function(resolve, reject){
		request(url, function(error, response, body){
			if(error){
				reject(error);
			}
			else{
				resolve(response);
			}
		});
	});
}

var promise2 = promisfyGet('http://www.etsy.com');

promise2.then(function(data){
	console.log(data.body);
}).
catch(function(error){
	console.log(error);
});