$(document).ready(function(){

var values = {
	randomNumber: 0,
	yourScore: 0,
	wins: 0,
	losses: 0,
	pearlGem: 0,
	rosequartzGem: 0,
	amethystGem: 0,
	garnetGem: 0,
	}

function initializeNumbers () {
		values.randomNumber = Math.floor((Math.random()* 120) + 19);
		values.pearlGem = Math.floor((Math.random()* 12) + 1);
		values.rosequartzGem = Math.floor((Math.random()* 12) + 1);
		values.amethystGem = Math.floor((Math.random()* 12) + 1);
		values.garnetGem = Math.floor((Math.random()* 12) + 1);
		values.yourScore = 0;
}

//start the game
initializeNumbers();
printNumbers();
console.log(values);

//print the numbers
function printNumbers() {
$("#randomNumber").html("Random Number <br>" + values.randomNumber);
$("#wins").html("Wins <br>" + values.wins);
$("#losses").html("Losses <br>" + values.losses);
$("#playerScore").html("Your Score <br>" + values.yourScore);
}


function scores () {
	
	if (values.yourScore == values.randomNumber){
		values.wins++;
		initializeNumbers();
		printNumbers();
	}

	if (values.yourScore > values.randomNumber){
		values.losses++
		initializeNumbers();
		printNumbers();
	}
}

//click functions
$("#pearl").click(function() {
	values.yourScore = values.pearlGem + values.yourScore;
	$("#playerScore").html("Your Score <br>" + values.yourScore);
	scores();
});

$("#rosequartz").click(function() {
	values.yourScore = values.rosequartzGem + values.yourScore;
	$("#playerScore").html("Your Score <br>" + values.yourScore);
	scores();
});

$("#amethyst").click(function() {
	values.yourScore = values.amethystGem + values.yourScore;
	$("#playerScore").html("Your Score <br>" + values.yourScore);
	scores();
});

$("#garnet").click(function() {
	values.yourScore = values.garnetGem + values.yourScore;
	$("#playerScore").html("Your Score <br>" + values.yourScore);
	scores();

// $(".button").click(function() {
// 	console.log(values.yourScore);
// 	$("#playerScore").html("Your Score <br>" + values.yourScore);
// 	scores();
// })

});

});