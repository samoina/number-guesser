// let submitBtn = document.getElementById('submit-button');
// submitBtn.addEventListener('click', checkNumber);

// const correctNumber = Math.floor((Math.random() * 100)+1);
// console.log(`Random number: ${correctNumber}`);

// function checkNumber(ev) {
// 	let userGuess = document.getElementById('my-guess').value;
// 	var counter =4;

// 	if (userGuess === '') {
// 		alert('Please enter a number')
// 	} else if (userGuess < 1 || userGuess > 100) {
// 		alert('Enter a valid number between 1 and 100')
// 	} else {
// 		let userNumber = parseInt(userGuess);
// 		if (userNumber===correctNumber){
// 			alert('You got that right!')
// 		} else {
// 			counter--;
// 			alert(`Your guess ${userNumber} is wrong. You have ${counter} more guesses`);
// 		}
		
			
		
// 	}
	


// 	ev.preventDefault()
// }

let y = Math.floor(Math.random() * 100 +1);
console.log(y);

let counter = 3;

document.getElementById('submitguess').onclick = function(){
	let x = parseInt(document.getElementById('guessField').value);
	console.log(x);
	
	counter--;
	if (x===y) {
		alert(`Congrats! You guessed it right!`);
		counter=3;
		y = Math.floor(Math.random() * 100 +1);
	} else if(x>y) {		
		alert(`oops! that's wrong. try a smaller number. you have ${counter} more guesses left`);		
	} else {
		alert(`oops! that's wrong. try a bigger number.  you have ${counter} more guesses left`)
	}

	if(counter===0) {
		alert(`You are out of guesses! The correct number was ${y}`);
		document.getElementById('guessField').disabled=true;
		counter=3;
		y = Math.floor(Math.random() * 100 +1);
		console.log(y);
	}
}

