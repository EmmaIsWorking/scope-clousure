const buildCount = (i) => {
	let count = i;
	const displayCount = () => {
		console.log(count++);
	};
	return displayCount;
};

const myCount = buildCount(1);

myCount();
myCount();
myCount();

const myAnotherCount = buildCount(10);

myAnotherCount();
myAnotherCount();
myAnotherCount();
