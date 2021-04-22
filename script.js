// Grabbing html ids and initiating variables
let submit = document.getElementById('sub');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let counter = document.getElementById('counter')
let urgency
let number = 0

// Defining the main function which creates the 'to-does' and also calls upon the tCounter function to keep track of the tasks completed
function all (){
        var paragraph = document.createElement('p');
        paragraph.classList.add('paragraph-styling-' + urgency);
        paragraph.innerText = inputField.value;
        toDoContainer.appendChild(paragraph);
        inputField.value = ""
        paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration = "line-through";
        });
        paragraph.addEventListener('dblclick', function(){
            toDoContainer.removeChild(paragraph);
            tCounter();
            playSound();
        });
    
}

// Defining the function that separates the different colored urgencies and calls upon the 'all' function accordingly
function init (){
    if (inputField.value === ''){
        alert('You must enter a task!');
    } else {
        urgency = Number(prompt("How urgent is this task on a scale of 1-3?"));
        if(isNaN(urgency)) {
            alert("The urgency must be a number");
            return null;
        }   else if (urgency < 1) {
                alert("The urgency must be between 1-3");
                return null
        }   else if (urgency > 3) {
                alert("The urgency must be between 1-3");
                return null
        }   else if (urgency == 1) {
            all();
        }   else if (urgency == 2) {
            all(); 
        }   else if (urgency == 3) {
            all();
        } else {
            return null
        }
    }
};

// Defining the function that displays how many task have been completed
function tCounter (){
    number++
    counter.innerText = 'Total Tasks Completed - ' + number
}

// Defining the function that will play a quick beep
function playSound() {
    var sound = document.getElementById("audio");
    sound.volume = .2;
    sound.play();
}

// Event listeners that execute the init function when the submit button or enter key are pressed
submit.addEventListener('click', function(){
    init();
});
inputField.addEventListener("keypress", function(e) {
    if (e.key === "Enter"){
        init();
    }
});

var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling-' + urgency);
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = ""
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    });
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
        tCounter();
        playSound();
    });
