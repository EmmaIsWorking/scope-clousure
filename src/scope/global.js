var hello = 'Hello';
var hello = 'Hello +';
let world = 'Hello World';
let world = 'Hello World +';
const helloWorld = 'Hello World';

const anotherFunction = () => {
	console.log(hello);
	console.log(world);
	console.log(helloWorld);
};

anotherFunction();

//* Malas Practicas
const helloWorld = () => {
	globalVar = 'im global';
};

helloWorld();
console.log(globalVar);

//* Malas Practicas

const anotherFunction = () => {
	var localVar = (globalVar = 'im Global');
};
console.log(globalVar);
