window.onload = function() {

	let correctAnswer, answerString, answerArray = [], score = 0;

	function displayQuestion(){
	//clean up the previous answerS
		answerArray = [];
		answerString = "";

		//get a random index
		let index = Math.floor(Math.random() * questions.length) + 1;
		//get the question text of the index
		document.querySelector("#question").innerHTML = questions[index].text;
	
		//also store the correct answer for the verse displayed
		correctAnswer = questions[index].answer;

	}

	function checkAnswer(){
		document.querySelectorAll(".answer").forEach(function(val){
			answerArray.push(val.value);
		});

		answerString = answerArray.join(", ");
		console.log(answerString);

		if (answerString == correctAnswer){
			score++;
			console.log(score);
			displayQuestion();
		} else {
			console.log("the correct answer was ", correctAnswer);
		}
	
	}



	displayQuestion();

	document.querySelector("#submitAnswer").addEventListener("click", checkAnswer);

};

//TODO - display score, correct answer when a mistake was made - easy

//TODO - make sure the index doesnt repeat - medium

//call in the correct verse via API - HARD