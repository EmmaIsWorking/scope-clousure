const anotherFunction = () => {
	//* con var imprime 10 veces 10
	//* con let imprime 1,2,3... 10
	for (let i = 0; i < 10; i++) {
		setTimeout(() => {
			console.log(i);
		}, 1000);
	}
};

anotherFunction();
