// Theme switch switch

// Buttons in the navbar
var box = null;
var bullets = ["bullet1", "bullet2", "bullet3", "bullet4", "bullet5"];
var option =  ["option1", "option2", "option3", "option4"];

var css;
var style = document.createElement('style');

var buttons = ["serbian", "finnish"];

var dEnabled;

function Choice(checkbox){
	var element = document.body;
	box = checkbox;
	dEnabled = checkbox.checked;
	if(dEnabled){
		document.getElementById("alpha").src = "res/logoWhite.png";
		element.className = "dark-mode";
		document.getElementById("header").style.color = "#d1d1d1";
		document.getElementById("modeImg").src = "res/moon.png";
		document.getElementById("modeImg").className = "animate__animated animate__flipInX";
		document.getElementById("modeImg").style.filter = "invert(100%)";
		document.getElementById("bar").style.backgroundColor = "black";
		document.getElementById("bar").id = "darkBar";
		bullets.forEach(switchColor);
        document.getElementById("contButton").className = "darkContinue";
		buttons.forEach(buttonSwitch);
		option.forEach(switchClasses);

	}

	else{
		document.getElementById("alpha").src = "res/logoBlack.png";
		element.className = "light-mode";
		document.getElementById("header").style.color = "black";
		document.getElementById("modeImg").src = "res/sun.png";
		document.getElementById("modeImg").className = "animate__animated animate__flipInY";
		document.getElementById("modeImg").style.filter = "invert(0%)";
		document.getElementById("darkBar").id = "bar";
		document.getElementById("bar").style.backgroundColor = "white";
		bullets.forEach(switchColor);
		document.getElementById("contButton").className = "continue";
		buttons.forEach(buttonSwitch);
		options.forEach(switchClasses);
	}
}

function switchColor(bulletName){
	var x = document.getElementById(bulletName);

	if(box.checked){
		x.style.color = "white";
	}
	else{
		x.style.color = "black";
	}
}

function buttonSwitch(button){
	var x = document.getElementById(button);

	if(box.checked){
		x.className = "darkOption widen";
	}
	else{
		x.className = "option widen";
	}
}

function switchClasses(optionName){
	var x = document.getElementById(optionName);

	if(box.checked){
		x.className = "darkOption option";
	}

	else{
		x.className = "option";
	}
}