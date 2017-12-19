
	// let clockRunning = false;
	let time = 31;
	let intervalId;
	let correct = 0;
	let incorrect = 0;
	let qArr = [
		"Who cuts off Jaime Lannister's hand?", 
		"Which of Daenerys Targaryen's three dragons are the largest?",
		"Who is not on Ayra Stark's list?",
		"Who is known as the Young Wolf?",
		"Which Wolf is Bran's?",
		"Who says, 'When you play the Game Of Thrones, you win or you die'?",
		"What language do the White Walkers Speak?",
		"How many kingdoms are in Westeros?",
		"Who is Master of Whispers?",
		"Who teaches Ayra Stark?",
		"How does Cersei blow up the Great Sept?",
		"Who created the White Walkers?",
		"Is Brandon Stark The Night King?"
		];
	let aArr = [
		'Rickard Karstark', 'Roose Bolton', 'Locke', 'Polliver',
		'Rhaegal', 'Drogon', 'Viserion', 'Arkbrave',
		'Ilyn Payne', 'Varys', 'Cersei Lannister', 'Joffrey Baratheon',
		'Jon Snow', 'Robb Stark', 'Bran Stark', 'Ned Stark',
		'Ghost', 'Nymeria', 'Summer', 'Shaggydog',
		'Varys', 'Petyr Baelish', 'Tyrion Lannister','Cersei Lannister',
		'Skroth','Norvoshi', 'Volantene', 'Qohorik',
		'Eleven', 'Five', 'Three', 'Seven',
		'Tyrion Lannister', 'Tywin Lannister', 'Petyr Baelish', 'Varys',
		'Sandor Clegane', 'Gendry', "Jaqen H'ghar", 'Robert Baratheon',
		'Wildfire', 'Dragonglass','Wolfsbane', 'Barrels of Burning Pitch',
		'The First Men', 'The Wildlings', 'The Three-eyed Raven', 'The Children of the Forest',
		'Yes','No'
	];

	function startGame(){

		$('#startGame').on('click', function(){
			
			// $('#startGame').html("");

			$('#time').show();

			$('#startGame').remove();

			questionOne();
			runTime();

		})

	}
	startGame();

	function results(){
		$('#quest').html("Here's how you did!");
		$('a1').html(correct);
		$('a2').html(incorrect);
	}

	function emptyQuestions(){
		
		$('#quest').text("");
		$('#a1').text("");
		$('#a2').text("");
		$('#a3').text("");
		$('#a4').text("");

	}

	function loseScreen(){
		
		emptyQuestions();
		
		$('#quest').html('<iframe src="https://giphy.com/embed/Asm0IO32Mg6wE" width="480" height="248" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/fallout-Asm0IO32Mg6wE"></a></p>');

		incorrect++;
	}

	function winScreen(){

		emptyQuestions();

		$('#a1').html("YOU GOT IT!");

		correct++;
	}



	function questionOne(){
		timeReset();
		$('#quest').html(qArr[0]);
		$('#a1').html(aArr[0]);
		$('#a2').html(aArr[1]);
		$('#a3').html(aArr[2]);
		$('#a4').html(aArr[3]);


		$(':button').click(function(){
			if (this.id === 'a3'){
				winScreen();
				stop();
				$('#quest').html('<iframe src="https://giphy.com/embed/Y45YORGBJ2sTu" width="380" height="252" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/swords-Y45YORGBJ2sTu"></a></p>');
				
			}
			else {
				loseScreen();
				stop();
				
			}
			setTimeout(questionTwo, 5000);
		})
	};


	function questionTwo(){
		timeReset();
		$('#quest').html(qArr[1]);
		$('#a1').html(aArr[4]);
		$('#a2').html(aArr[5]);
		$('#a3').html(aArr[6]);
		$('#a4').html(aArr[7]);

		$(':button').click(function(){
			if (this.id === 'a2'){
				winScreen();
				stop();
				$('#quest').html('<iframe src="https://giphy.com/embed/qSeihcyMnehOw" width="270" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/drogon-theongreyjoy-ya-thats-for-ur-url-and-the-tag-lol-qSeihcyMnehOw"></a></p>');
				
			}
			else {
				loseScreen();
				stop();
				
			}
			setTimeout(questionThree, 5000);
		})
	};
	

	function questionThree(){
		timeReset();
		$('#quest').html(qArr[2]);
		$('#a1').html(aArr[8]);
		$('#a2').html(aArr[9]);
		$('#a3').html(aArr[10]);
		$('#a4').html(aArr[11]);

		$(':button').click(function(){
			if (this.id === 'a2'){
				winScreen();
				stop();
				$('#quest').html('<iframe src="https://giphy.com/embed/EjLBI4FYpch3i" width="480" height="273" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/arya-stark-EjLBI4FYpch3i"></a></p>');
				
			}
			else {
				loseScreen();
				stop();
				
			}
			setTimeout(questionFour, 5000);
		})
	};
	

	function questionFour(){
		timeReset();
		$('#quest').html(qArr[3]);
		$('#a1').html(aArr[12]);
		$('#a2').html(aArr[13]);
		$('#a3').html(aArr[14]);
		$('#a4').html(aArr[15]);

		$(':button').click(function(){
			if (this.id === 'a2'){
				winScreen();
				stop();
				$('#quest').html('<iframe src="https://giphy.com/embed/WFv2ermq22zni" width="94" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nephelite-WFv2ermq22zni"></a></p>');
				
			}
			else {
				loseScreen();
				stop();
				
			}
			setTimeout(questionFive, 5000);
		})
	};


	function questionFive(){
		timeReset();
		$('#quest').html(qArr[4]);
		$('#a1').html(aArr[16]);
		$('#a2').html(aArr[17]);
		$('#a3').html(aArr[18]);
		$('#a4').html(aArr[19]);

		$(':button').click(function(){
			if (this.id === 'a3'){
				winScreen();
				stop();
				$('#quest').html('<iframe src="https://giphy.com/embed/36EHYT02tLQLS" width="440" height="273" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bran-stark-36EHYT02tLQLS"></a></p>');
				
			}
			else {
				loseScreen();
				stop();
				
			}
			setTimeout(questionSix, 5000);
		})
	};

	function questionSix(){
		timeReset();
		$('#quest').html(qArr[5]);
		$('#a1').html(aArr[20]);
		$('#a2').html(aArr[21]);
		$('#a3').html(aArr[22]);
		$('#a4').html(aArr[23]);

		$(':button').click(function(){
			if (this.id === 'a4'){
				winScreen();
				stop();
				$('#quest').html('<iframe src="https://giphy.com/embed/BO45KcRqCfuYo" width="280" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cersei-BO45KcRqCfuYo"></a></p>');
				
			}
			else {
				loseScreen();
				stop();
				
			}
			setTimeout(questionSeven, 5000);
		})
	};

	function questionSeven(){
		timeReset();
		$('#quest').html(qArr[6]);
		$('#a1').html(aArr[24]);
		$('#a2').html(aArr[25]);
		$('#a3').html(aArr[26]);
		$('#a4').html(aArr[27]);

		$(':button').click(function(){
			if (this.id === 'a1'){
				winScreen();
				stop();
				$('#quest').html('<iframe src="https://giphy.com/embed/xT1XGGTKB630Qvsqze" width="480" height="250" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/gameofthrones-game-of-thrones-hbo-xT1XGGTKB630Qvsqze"></a></p>');
				
			}
			else {
				loseScreen();
				stop();
				
			}
			setTimeout(questionEight, 5000);
		})
	};


	function questionEight(){
		timeReset();
		$('#quest').html(qArr[7]);
		$('#a1').html(aArr[28]);
		$('#a2').html(aArr[29]);
		$('#a3').html(aArr[30]);
		$('#a4').html(aArr[31]);

		$(':button').click(function(){
			if (this.id === 'a4'){
				winScreen();
				stop();
				$('#quest').html('<iframe src="https://giphy.com/embed/cTv4kBHXbUgwM" width="480" height="250" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cTv4kBHXbUgwM"></a></p>');
				
			}
			else {
				loseScreen();
				stop();
				
			}
			setTimeout(questionNine, 5000);
		})
	};

	function questionNine(){
		timeReset();
		$('#quest').html(qArr[8]);
		$('#a1').html(aArr[32]);
		$('#a2').html(aArr[33]);
		$('#a3').html(aArr[34]);
		$('#a4').html(aArr[35]);

		$(':button').click(function(){
			if (this.id === 'a4'){
				winScreen();
				stop();
				$('#quest').html('<iframe src="https://giphy.com/embed/10VeNnIjyBttQc" width="480" height="240" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/game-of-thrones-oberyn-martell-varys-10VeNnIjyBttQc"></a></p>');
				
			}
			else {
				loseScreen();
				stop();
				
			}
			setTimeout(questionTen, 5000);
		})
	};

	function questionTen(){
		timeReset();
		$('#quest').html(qArr[9]);
		$('#a1').html(aArr[36]);
		$('#a2').html(aArr[37]);
		$('#a3').html(aArr[38]);
		$('#a4').html(aArr[39]);

		$(':button').click(function(){
			if (this.id === 'a3'){
				winScreen();
				stop();
				$('#quest').html('<iframe src="https://giphy.com/embed/xTiTneHfFvtCvk5kek" width="480" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/game-of-thrones-gots5e2-house-black-and-white-xTiTneHfFvtCvk5kek"></a></p>');
				
			}
			else {
				loseScreen();
				stop();
				
			}
			setTimeout(questionEleven, 5000);
		})
	};

	function questionEleven(){
		timeReset();
		$('#quest').html(qArr[10]);
		$('#a1').html(aArr[40]);
		$('#a2').html(aArr[41]);
		$('#a3').html(aArr[42]);
		$('#a4').html(aArr[43]);

		$(':button').click(function(){
			if (this.id === 'a1'){
				winScreen();
				stop();
				$('#quest').html('<iframe src="https://giphy.com/embed/8dYOViraIqwp2" width="480" height="258" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/great-thrones-remember-8dYOViraIqwp2"></a></p>');
			}
			else {
				loseScreen();
				stop();
			}
			setTimeout(questionTwelve, 5000);
		})
	};

	function questionTwelve(){
		timeReset();
		$('#quest').html(qArr[11]);
		$('#a1').html(aArr[44]);
		$('#a2').html(aArr[45]);
		$('#a3').html(aArr[46]);
		$('#a4').html(aArr[47]);

		$(':button').click(function(){
			if (this.id === 'a4'){
				winScreen();
				stop();
				$('#quest').html('<iframe src="https://giphy.com/embed/11SozvfJp1cMow" width="480" height="250" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/children-of-men-11SozvfJp1cMow"></a></p>');
			}
			else {
				loseScreen();
				stop();
			}
			setTimeout(questionThirteen, 5000);
		})
	};

	function questionThirteen(){
		timeReset();
		$('#quest').html(qArr[12]);
		$('#a1').html(aArr[48]);
		$('#a2').html(aArr[49]);
		$('#a3').html("");
		$('#a4').html("");


		$(':button').click(function(){
			if (this.id === 'a1,a2'){
				emptyQuestions();
				stop();
				$('#quest').html('<iframe src="https://giphy.com/embed/xUA7bdfVEKpYtMxLyM" width="480" height="266" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nerdist-game-of-thrones-iron-throne-xUA7bdfVEKpYtMxLyM"></a></p>');
				$('#a1').html("We'll have to find out");
			}
			setTimeout(endScreen, 5000);
		})
	};

	function endScreen(){
		emptyQuestions();
		stop();

		$('#quest').html('Heres how you did:')
		$('#a1').html("Answered Correctly: " + correct);
		$('#a2').html("Answered Incorrectly: " + incorrect);

		$(startGame).html('Try Again?');
	}


	//clock
	function timeReset(){

		$('#interval').html("");

		time = 31;

		stop();

		runTime();


	}

	function runTime(){

		intervalId = setInterval(decrement, 1000);

	}

	function decrement(){

		time--;

		$('#interval').html(time);

		if (time === 0){
			loseScreen();
			stop();

		}
	}

	function stop(){

		clearInterval(intervalId);

	}


	



	