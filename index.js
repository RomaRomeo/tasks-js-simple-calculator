const pressButton = document.getElementById('press');
const pushNumbers = document.getElementsByClassName('number');
pressButton.addEventListener('click', addNumbers);

function addNumbers() {
	let result = 0;
	for (let i = 0; i < Number(pushNumbers.length); i++) {
		result += Number(pushNumbers[i].value);
	}
	const numberResult = document.getElementById('result');
	numberResult.value = result;
}

