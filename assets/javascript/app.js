
	// Declare variables
	let time = 31;
	let intervalId;
	let correct = 0;
	let incorrect = 0;
	let unanswered = 13;
	let questionCounter = 0;
	let answerSelection;
	let currentQuestion = 0;
	let qaArr = [
		{
   		 question: "Who cuts off Jaime Lannister's hand?",   
    	 answer: ['Rickard Karstark', 'Roose Bolton', 'Locke', 'Polliver'],
    	 correct: 'Locke',
    	 img: '<iframe src="https://giphy.com/embed/Y45YORGBJ2sTu" width="380" height="252" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/swords-Y45YORGBJ2sTu"></a></p>'
    	},
    	{
   		 question: "Which of Daenerys Targaryen's three dragons are the largest?",  
    	 answer: ['Rhaegal', 'Drogon', 'Viserion', 'Arkbrave'],
    	 correct: 'Drogon',
    	 img: '<iframe src="https://giphy.com/embed/qSeihcyMnehOw" width="270" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/drogon-theongreyjoy-ya-thats-for-ur-url-and-the-tag-lol-qSeihcyMnehOw"></a></p>'
    	},
    	{
   		 question: "Who is not on Ayra Stark's list?",  
    	 answer: ['Ilyn Payne', 'Varys', 'Cersei Lannister', 'Joffrey Baratheon'],
    	 correct: 'Varys',
    	 img: '<iframe src="https://giphy.com/embed/EjLBI4FYpch3i" width="480" height="273" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/arya-stark-EjLBI4FYpch3i"></a></p>'
    	},
    	{
   		 question: "Who is known as the Young Wolf?", 
    	 answer: ['Jon Snow', 'Robb Stark', 'Bran Stark', 'Ned Stark'],
    	 correct: 'Robb Stark',
    	 img: '<iframe src="https://giphy.com/embed/WFv2ermq22zni" width="94" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nephelite-WFv2ermq22zni"></a></p>'
    	},
    	{
   		 question: "Which Wolf is Bran's?",  
    	 answer: ['Ghost', 'Nymeria', 'Summer', 'Shaggydog'],
    	 correct: 'Summer',
    	 img: '<iframe src="https://giphy.com/embed/36EHYT02tLQLS" width="440" height="273" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bran-stark-36EHYT02tLQLS"></a></p>'
    	},
    	{
   		 question: "Who says, 'When you play the Game Of Thrones, you win or you die'?",  
    	 answer: ['Varys', 'Petyr Baelish', 'Tyrion Lannister','Cersei Lannister'],
    	 correct: 'Cersei Lannister',
    	 img: '<iframe src="https://giphy.com/embed/BO45KcRqCfuYo" width="280" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cersei-BO45KcRqCfuYo"></a></p>'
    	},
    	{
   		 question: "What language do the White Walkers Speak?",   
    	 answer: ['Skroth','Norvoshi', 'Volantene', 'Qohorik'],
    	 correct: 'Skroth',
    	 img: '<iframe src="https://giphy.com/embed/xT1XGGTKB630Qvsqze" width="480" height="250" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/gameofthrones-game-of-thrones-hbo-xT1XGGTKB630Qvsqze"></a></p>'
    	},
    	{
   		 question: "How many kingdoms are in Westeros?",  
    	 answer: ['Eleven', 'Five', 'Three', 'Seven'],
    	 correct: 'Seven',
    	 img: '<iframe src="https://giphy.com/embed/cTv4kBHXbUgwM" width="480" height="250" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cTv4kBHXbUgwM"></a></p>'
    	},
    	{
   		 question: "Who is Master of Whispers?", 
    	 answer: ['Tyrion Lannister', 'Tywin Lannister', 'Petyr Baelish', 'Varys'],
    	 correct: 'Varys',
    	 img: '<iframe src="https://giphy.com/embed/10VeNnIjyBttQc" width="480" height="240" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/game-of-thrones-oberyn-martell-varys-10VeNnIjyBttQc"></a></p>'
    	},
    	{
   		 question: "Who teaches Ayra Stark?",  
    	 answer: ['Sandor Clegane', 'Gendry', "Jaqen H'ghar", 'Robert Baratheon'],
    	 correct: "Jaqen H'ghar",
    	 img: '<iframe src="https://giphy.com/embed/xTiTneHfFvtCvk5kek" width="480" height="262" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/game-of-thrones-gots5e2-house-black-and-white-xTiTneHfFvtCvk5kek"></a></p>'
    	},
    	{
   		 question: "How does Cersei blow up the Great Sept?",  
    	 answer: ['Wildfire', 'Dragonglass','Wolfsbane', 'Barrels of Burning Pitch'],
    	 correct: 'Wildfire',
    	 img: '<iframe src="https://giphy.com/embed/8dYOViraIqwp2" width="480" height="258" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/great-thrones-remember-8dYOViraIqwp2"></a></p>'
    	},
    	{
   		 question: "Who created the White Walkers?",   
    	 answer: ['The First Men', 'The Wildlings', 'The Three-eyed Raven', 'The Children of the Forest'],
    	 correct: 'The Children of the Forest',
    	 img:'<iframe src="https://giphy.com/embed/11SozvfJp1cMow" width="480" height="250" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/children-of-men-11SozvfJp1cMow"></a></p>'
    	},
    	{
   		 question: "Is Bran the Night King?",   
    	 answer: ['Yes', 'No', 'Maybe', 'So'],
    	 correct: 'Yes',
    	 img: '<iframe src="https://giphy.com/embed/xUA7bdfVEKpYtMxLyM" width="480" height="266" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nerdist-game-of-thrones-iron-throne-xUA7bdfVEKpYtMxLyM"></a></p>'
    	}
	]

	

	function startGame(){

		$('#startGame').on('click', function(){

			$('#time').show();

			$('#startGame').remove();

			addQuestion();

		})

	}
	startGame();


	function addQuestion(){

		$('#answerArea').empty();

		$("#quest").empty();

  		$("#quest").html(qaArr[currentQuestion].question);


  		for (i=0; i<4; i++){

    		let answerChoice = $("<div>");
    		answerChoice.html('<br>' + qaArr[currentQuestion].answer[i]);
   		    answerChoice.addClass("answers");
   			$("#questions").append(answerChoice);

 		 }
  
  		timeReset(); 

 		$('.answers').on('click',function(){

    	answerSelection = $(this).text();
    	console.log(answerSelection);
    	stop();
    	$('.answers').empty();
  		$("#quest").empty();
    	answer();

  		});

	}

	function answer(){
		

  		let answerIndex = qaArr[currentQuestion].correct
  
  		if (answerSelection == answerIndex) {
  			// stop();
  			$('#quest').text("YOU GOT IT!");
    		$("#answerArea").html(qaArr[currentQuestion].img);
   		    correct++;
   		    unanswered--;
   		    console.log(correct);
   		   
 		 }
   		 else if (answerSelection != answerIndex){
   		   
   		    $("#answerArea").html('<iframe src="https://giphy.com/embed/Asm0IO32Mg6wE" width="480" height="248" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/fallout-Asm0IO32Mg6wE"></a></p>');
   		    unanswered--;
    		incorrect++
    		
  		 } 
  		 

 		 currentQuestion++
 		 questionCounter++
 		 setTimeout(endScreen, 5000);
 		
 		 
	};


	


	function endScreen(){

		if (questionCounter === qaArr.length){

		$('#quest').empty();
		$('#answerArea').empty();
		stop();

		$('#quest').html("Heres How You Did:");
		$('#answerArea').append('<div>').html('Answered Correctly: ' + correct + '<br>' + '<br>' + 'Answered Incorrectly: ' + incorrect + '<br>' + '<br>' + 'Unaswered: ' + unanswered);
		$('#startGame').add();

		} 
		else 
		{
			setTimeout(addQuestion, 1000);
		}
	}


	//clock
	function timeReset(){

		$('#interval').empty();

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
			stop();
			$('.answers').empty();
  			$("#quest").empty();
  			$('#quest').html("Heres How You Did:");
			$('#answerArea').append('<div>').html('Answered Correctly: ' + correct + '<br>' + '<br>' + 'Answered Incorrectly: ' + incorrect + '<br>' + '<br>' + 'Unaswered: ' + unanswered);
		}
	}

	function stop(){

		clearInterval(intervalId);

	}


	



	