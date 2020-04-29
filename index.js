const pressButton = document.getElementById('press'),
pushNumbers = document.getElementsByClassName('number');
pressButton.addEventListener('click', addNumbers);

function addNumbers() {
	let result = 0;
	for (let i = 0; i < pushNumbers.length; i++) {
		result += +pushNumbers[i].value;
	}
	const numberResult = document.getElementById('result');
	numberResult.value = result;
}

