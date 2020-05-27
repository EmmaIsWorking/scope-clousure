const fruits = () => {
	if (true) {
		var fruits1 = 'apple';
		let fruits2 = 'banana';
		const fruits3 = 'kiwi';
		console.log(fruits2);
		console.log(fruits3);
	}
	console.log(fruits1);
};

fruits();

var x = 1;
{
	var x = 2;
	console.log(x);
}

console.log(x);

const anotherFunction = () => {
	//* con var imprime 10 veces 10
	//* con let imprime 1,2,3... 10
	for (var i = 0; i < 10; i++) {
		setTimeout(() => {
			console.log(i);
		}, 1000);
	}
};

anotherFunction();
