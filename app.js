let correctNumber = 78;

let submitBtn = document.getElementById('submit-button');


submitBtn.addEventListener('click', checkNumber);

function checkNumber(ev){
	let userGuess = document.getElementById('my-guess').value;
	if(userGuess=== ''){
		alert('Please enter a number')
	} else if(userGuess<1 || userGuess>100 ) {
		alert('Enter a valid number between 1 and 100')
	} else {
		let userNumber = parseInt(userGuess);
		if (userNumber !== correctNumber){
			alert('Not quite. Try again!')
		}	else {
				alert('You got that right!')
			}
		}


	ev.preventDefault()
}