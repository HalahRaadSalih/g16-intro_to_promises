
var promise1 = new Promise(promiseExec);

function promiseExec(resolve, reject){
	setTimeout(function(){
		resolve("This is some Data");
	}, 1000);

	reject("BOOOOO rejected");
}

function resolved(data){
	console.log("resolved: ", data);
}

function rejected(data){
	console.log("rejected: ", data);
}

promise1.then(resolved, rejected);

promise1.catch(function(data){
	console.log('catch me if you can');
	console.log(data);
});
