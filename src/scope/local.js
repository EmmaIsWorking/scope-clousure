const helloWorld = () => {
	const hello = 'hello world';
	console.log(hello);
};

helloWorld();

console.log(hello);

var scope = 'iam global';

//*ambito lexico
const functionScope = () => {
	var scope = 'iam just a local';
	const func = () => {
		return scope;
	};
	console.log(func());
};

functionScope();
console.log(scope);
