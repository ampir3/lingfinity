var input = document.getElementById("answer");

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("panelButton").click();
    }
});

function Check() {
    var id = document.getElementById("answer").value.toLowerCase();
    var answer = id;

    var correct = new Audio('../../../../sfx/correct.mp3');
    var wrong = new Audio('../../../../sfx/wrong.mp3');

    if(answer == "kako si") {
        document.getElementById("answer").style.borderColor = "green";
        document.getElementById("panelMessage").innerText = "Your answer is correct.";
        document.getElementById("panel").style.backgroundColor = "rgb(0, 70, 0)";
        correct.play();
    }
    else {
        document.getElementById("answer").style.borderColor = "red";
        document.getElementById("panelMessage").innerText = "Your answer is wrong.";
        document.getElementById("panel").style.backgroundColor = "rgb(70, 0, 0)";
        wrong.play();
    }

    if(document.getElementById("panelButton").innerText=="Continue")
        window.location.href = "../4/exercise.html";

    if(id == 0)
        document.getElementById("panelMessage").innerText = "You left a field empty.";
    else {
        document.getElementById("panelButton").innerText="Continue";
    }
}