const moneyBox = (coins) => {
	var saveCoins = 0;
	saveCoins += coins;
	console.log(`MoneyBox: $${saveCoins}`);
};

moneyBox(5);
moneyBox(10);

const moneyBox = () => {
	let saveCoins = 0;
	const countCoins = (coins) => {
		saveCoins += coins;
		console.log(`MoneyBox: $${saveCoins}`);
	};
	return countCoins;
};

let myMoneyBox = moneyBox();
myMoneyBox(5); //5
myMoneyBox(10); //15
myMoneyBox(-5); //10
