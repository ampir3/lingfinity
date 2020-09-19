//Switch logic

var box = null;
var bullets = ["bullet1", "bullet2", "bullet3", "bullet4", "bullet5"];

var clicked = false;

var options =  ["option1", "option2", "option3", "option4"];

//Question section
var selected;
let index = 0;
let AnswersIndex = 0;

function showAnswer(){
	
	options.forEach(putAnswer);
	index = 0;
}

function randomizeAIndex(){
	AnswersIndex = Math.abs(Math.floor((Math.random() - .5) * 3));
}

function putAnswer(b){
	const btn = document.getElementById(b);
	btn.innerText = answers[AnswersIndex].answer[index].text;
	index += 1;
}




var clicked = false;
var oldButton = "";

function eval(b) {

	if(clicked){
		var boo = document.getElementById("theH");
		if(boo.className == "dark-mode"){
			document.getElementById(oldButton).style = "background-color: black;"
			oldButton = b.id;
			
		}

		else{
			document.getElementById(oldButton).style = "background-color: white;";
			oldButton = b.id;
		}
		
	
	}

	else{
		clicked = true;
		oldButton = b.id;
	}


	if(document.getElementById("theH").className == "dark-mode"){
		b.style.backgroundColor = "grey";
	}

	else{
		b.style.backgroundColor = "lightgrey";
	}
	

	selected = b.id;

	document.getElementById("continueButton").style = "cursor: pointer; opacity:100%; background-color: #5318A0; color: white; border-color: #671ec8;";

}

function makeUnclickable(buttonName){
	if(buttonName != selected){
		document.getElementById(buttonName).disabled = true;
	}
}

function getAnswerBool(t){
	var x = answers.length;

	for(var i = 0; i < x; i++){
		
		for(var j = 0; j < 4; j++){
			var h = answers[i].answer[j];
			var c = h.text;
			
			if(c == t){
				var clickBool = h.correct;
				return clickBool;
			}
		}

	}
}

const answers = [
	{
		answer: [
			{text: 'пас', correct: true}, //dog
			{text: 'мачка', correct: false}, //cat
			{text: 'жирафа', correct: false}, //giraffe
			{text: 'мајмун', correct: false} //monkey
		]
	},

	{
		answer: [
			{text: 'свиња', correct: true}, //pig
			{text: 'кокошка', correct: false}, //chicken
			{text: 'овца', correct: false}, //sheep
			{text: 'јеж', correct: false} //hedgehog
		]
	},

	{
		answer: [
			{text: 'крава', correct: true}, //cow
			{text: 'коњ', correct: false}, //horse
			{text: 'миш', correct: false}, //mouse
			{text: 'птица', correct: false} //bird
		]
	}
	
];


showAnswer();



var Cclicked = false;
function checc(){
	var theText = document.getElementById(selected).textContent;
	var correct = getAnswerBool(theText);
	var sound;

	
	if(Cclicked){
		continuing();
	}

else{

	if(correct){

		console.log("true");
		document.getElementById(selected).style = "background-color:lightgreen; color:green;";
		document.getElementById("continueMessage").textContent = "This answer is correct!";
		document.getElementById("continueButton").textContent = "Continue";
		sound = new Audio('../../res/correct.mp3');
		sound.play();
		Cclicked = true;
		options.forEach(makeUnclickable);
		document.getElementById(selected).disabled = true;
	}

	else{
		console.log("false");
		document.getElementById(selected).style = "background-color: #e95660; color: darkred;";
		var correctText = getCorrectAnswer();
		var message = "This answer is wrong. The correct answer is ";
		document.getElementById("continueButton").onclick = nextQuestion();
		var correctionMessage = message.concat(correctText);
		document.getElementById("continueMessage").textContent = correctionMessage;
		document.getElementById("continueButton").textContent = "Continue";
		sound = new Audio('../../res/wrong.mp3');
		sound.volume = 0.3;
		sound.play();
		Cclicked = true;
		options.forEach(makeUnclickable);
		document.getElementById(selected).disabled = true;
	}
}

	
}

function getCorrectAnswer(){
	var answerArray = answers[AnswersIndex].answer;

	for(var i = 0; i < 4; i++){
		if(answerArray[i].correct){
			var z = answerArray[i].text;
			var a = ".";
			var h = z.concat(a);
			return h;
		}
	}
}

function continuing(){
	console.log("continue");
	nextQuestion();

}

function nextQuestion(){
	var oldIndex = AnswersIndex;

	while(oldIndex == AnswersIndex){
		randomizeAIndex();
	}

	options.forEach(putAnswer);
	index = 0;
}

function refresh(){
	options.forEach(makeWhite);
	options.forEach(makeClickable);
}

function makeWhite(b){
	b.style = "background-color: white; color: black;";
}

function makeClickable(b){
	b.disabled = false;
}