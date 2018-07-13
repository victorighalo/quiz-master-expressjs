const { tween, styler, css, easing } = popmotion;
function _(x) {
    return document.querySelector(x)
}

// Setup the Quiz App
var QuizApp = function() {
    this.candidate = 0,
    this.postion = 0,
    this.quiz = 0,
    this.question = 0,
    this.choice = "",
    this.choices = [],
    this.choiceA = 0,
    this.choiceB = 0,
    this.choiceC = 0,
    this.choiceD = 0,
    this.correct = 0,
    this.questions = [
        ["What is 10 + 4?", "14", "8", "42", "88", "A"],
        ["How old is Nigeria?", "120", "90", "12", "58", "D"],
        ["How many states are in Nigeria?", "14", "36", "42", "88", "B"],
        ["Who is the Founder of Facebook?", "Victor Zuker", "Obinna Collins", "Mark Zukerberg", "Oluwatobi Adamu", "C"],
    ]
};


// Instantiate the App
$(document).ready(function () {
    $.ajax({
        url:"http://localhost:3000/questions",
    }).done(function (result) {
        renderQuiz(result)
    });
});


// Launch the app only when the DOM has loaded
window.addEventListener('DOMContentLoaded', renderQuiz, false)

// The App Contstructor... So to say... Like the the Main method
function renderQuiz(quizData){
   quiz =  _(".quiz-questions");
    var Quiz1 = quizData;
   // This runs only when the Quiz questions are all answered
   // show quiz result
    if (Quiz1.postion >= Quiz1.questions.length){
        quiz.innerHTML = "";
        _(".quiz-status-text").innerHTML = "Quiz Completed";
        _(".quiz-status-text").innerHTML = "You got  " + (Quiz1.correct) + " of " + Quiz1.questions.length + " questions Correct";
        Quiz1.postion = 0;
        Quiz1.correct = 0;

        document.getElementById("result-modal").style.display = "block";
        return false;
    }

    // display the number of questions answered so far
    _(".quiz-status-text").innerHTML = "<h3>QUESTION</h3>" + "<p>" + (Quiz1.postion + 1) + "/" + Quiz1.questions.length + "</p>";
   
   // get the questions and options from the quiz questions array
    Quiz1.question = Quiz1.questions[Quiz1.postion][0];
    Quiz1.choiceA = Quiz1.questions[Quiz1.postion][1]; 
    Quiz1.choiceB = Quiz1.questions[Quiz1.postion][2]; 
    Quiz1.choiceC = Quiz1.questions[Quiz1.postion][3]; 
    Quiz1.choiceD = Quiz1.questions[Quiz1.postion][4]

    // display question
    quiz.innerHTML = "<h3>" + Quiz1.question +"</h3>";

    //display the options
    quiz.innerHTML += "<div class='box'><input type='radio' id='radio1' name='choices' value='A'><label for='radio1'>" + Quiz1.choiceA + "</label></div>";
    quiz.innerHTML += "<div class='box'><input type='radio' id='radio2' name='choices' value='B'><label for='radio2'>" + Quiz1.choiceB + "</label></div>";
    quiz.innerHTML += "<div class='box'><input type='radio' id='radio3' name='choices' value='C'><label for='radio3'>" + Quiz1.choiceC + "</label></div>";
    quiz.innerHTML += "<div class='box'><input type='radio' id='radio4' name='choices' value='D'><label for='radio4'>" + Quiz1.choiceD + "</label></div>";
    quiz.innerHTML += "<button type='button' onclick='checkAnswer()' class='submit-btn'>Submit Answer</submit><br>";


tween(
{
      from: { opacity: 0, y:-10 },
      to: { opacity: 1, y:0 },
      duration: 1000,
      ease:easing.easeOut
}
    )
  .start(styler(quiz).set);



}

function answerTracker(choice){
    Quiz1.choice = choice;
    if (choice ==  Quiz1.questions[Quiz1.postion][5]){
        Quiz1.correct++;
    }
}

function checkAnswer() {
    Quiz1.choices = document.getElementsByName("choices");
 
    // loop true all the options available and select the checked one
    Quiz1.choices.forEach(element => {
        if(element.checked){
            answerTracker(element.value);
        }
    });
    console.log("Answer " + Quiz1.choice + " chosen")
    console.log(Quiz1.correct)
    Quiz1.postion++;

    renderQuiz();
}
