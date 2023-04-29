//Variable List
var intro =[];
var startQuiz = document.querySelector(".startButton");
var questionCount = 0;
var answerItem0 = document.createElement("p");
var answerItem1 = document.createElement("p");
var answerItem2 = document.createElement("p");
var answerItem3 = document.createElement("p");
var answerItem4 = document.createElement("p");
var mainText = document.querySelector(".mainText");
var message = document.querySelector("#message");
var eInitial = document.querySelector(".eInitial");
var inputBox = document.querySelector(".inputBox");
var recordButton = document.querySelector(".recordButton");
var goBack = document.querySelector(".goBack");
var viewScore = document.querySelector(".viewScores");
var clearScores = document.querySelector(".clearScores");
var head = document.querySelector(".head");
var clock;
var count = 60;
var score = 0;
var interval;
var saveHighScores = [];


//Initial Screen setup
function introScreen() {
    intro.push('The following Quiz will challenge your knowledge about Geography, you will have sixty (60) seconds to answer Ten (10) questions, every "Correct" answer will give you 5 pts but each "Wrong" answer will reduce 5 seconds from the clock, click the Start button when ready... Have Fun...!!!. At the end you can register your score.');

    head.textContent = "Quiz about Geography";
    mainText.textContent = intro[0];
    startQuiz.style.visibility = "visible";
    eInitial.style.visibility = "hidden";
    inputBox.style.visibility = "hidden";
    recordButton.style.visibility = "hidden";
    clearScores.style.visibility = "hidden";
    goBack.style.visibility = "hidden";
    viewScore.style.visibility = "visible";

    startQuiz.addEventListener("click", populateQuestions);
    viewScore.addEventListener("click", viewScores);

}

// Review list of questions and publish each question
function populateQuestions() {
    

    viewScore.style.visibility = "hidden";

    if (questionCount === 0) {
        interval = setInterval(function(){       
            clock = document.querySelector(".counter");
            if (count === 0){
                if (clock.textContent !== " "){
                message.textContent = "You're out of time!";
                clearInterval(interval);
                setTimeout(showscore, 1000);
                }
            } else {
                    if (count <= 10 && clock.textContent !== " ") {
                        clock.setAttribute("id", "redcounter") // This turns the counter on red when 10sec left
                    } else {
                        clock.setAttribute("id", "");
                    }
                    clock.textContent = "Time: "+count;
                    count--;
                }
      }, 1000);
    }

    var mainText = document.querySelector(".mainText");
    var questionList = [    
        {
            question: "How Many states border the Gulf of Mexico?",
            answer: [
                {   text: "3",
                    correct: "false"
                },
                
                {   text: "7",
                    correct: "false"
                },
                
                {   text: "5",
                    correct: "true",
                },
                
                {   text: "2",
                    correct: "false"
                }
            ],
        },    
        {  
            question: "Which is the longest River in US?",
            answer: [
                {   text: "Colorado River",
                    correct: "false"
                },
                
                {   text: "Missouri River",
                    correct: "true"
                },
                
                {   text: "Rio Grande",
                    correct: "false"
                },
                
                {   text: "Amazon River",
                    correct: "false"
                }
            ],
        },
        {  
            question: "What is the tallest mountain in the US?",
            answer: [
                {   text: "Denali",
                    correct: "true"
                },
                
                {   text: "Mount Sandford",
                    correct: "false"
                },
                
                {   text: "Mount Bona",
                    correct: "false"
                },
                
                {   text: "Mount Everest",
                    correct: "false"
                }
            ],
        },
        {  
            question: "What was the last state to join the US territory?",
            answer: [
                {   text: "Hawaii",
                    correct: "true"
                },
                
                {   text: "Arizona",
                    correct: "false"
                },
                
                {   text: "Alaska",
                    correct: "false"
                },
                
                {   text: "New Mexico",
                    correct: "false"
                }
            ],
        },
        {  
            question: "Which US state has the longest coastline?",
            answer: [
                {   text: "California",
                    correct: "false"
                },
                
                {   text: "Maine",
                    correct: "false"
                },
                
                {   text: "Florida",
                    correct: "false"
                },
                
                {   text: "Alaska",
                    correct: "true"
                }
            ],
        },
        {  
            question: "What state is the least populated in the US?",
            answer: [
                {   text: "Florida",
                    correct: "false"
                },
                
                {   text: "North Dakota",
                    correct: "false"
                },
                
                {   text: "Wyoming",
                    correct: "true"
                },
                
                {   text: "Idaho",
                    correct: "false"
                }
            ],
        },
        {  
            question: "Which Country is South Americas's second largest?",
            answer: [
                {   text: "Colombia",
                    correct: "false"
                },
                
                {   text: "Paraguay",
                    correct: "false"
                },
                
                {   text: "Chile",
                    correct: "false"
                },
                
                {   text: "Argentina",
                    correct: "true"
                }
            ],
        },
        {  
            question: "Which Central America Country does not have and Atlantic Coastline?",
            answer: [
                {   text: "Panama",
                    correct: "false"
                },
                
                {   text: "El Salvador",
                    correct: "true"
                },
                
                {   text: "Costa Rica",
                    correct: "false"
                },
                
                {   text: "Belize",
                    correct: "false"
                }
            ],
        },
        {  
            question: "What is the name of the world's largest river",
            answer: [
                {   text: "Congo",
                    correct: "false"
                },
                
                {   text: "Amazon",
                    correct: "true"
                },
                
                {   text: "Rio Negro",
                    correct: "false"
                },
                
                {   text: "Nile",
                    correct: "false"
                }
            ],
        },
        {  
            question: "From which country did Panama declare independence?",
            answer: [
                {   text: "United States",
                    correct: "false"
                },
                
                {   text: "Colombia",
                    correct: "true"
                },
                
                {   text: "Spain",
                    correct: "false"
                },
                
                {   text: "Mexico",
                    correct: "false"
                }
            ],
        },
        
    ];

    startQuiz.style.visibility ='hidden';

        answerItem0.textContent = "";
        answerItem1.textContent = "";
        answerItem2.textContent = "";
        answerItem3.textContent = "";
        message.textContent = "";

    if (questionCount === questionList.length){
        count = 0;
        clock.textContent = " ";
        showscore();
    }
   
    if(questionCount < questionList.length)
    {    
        mainText.textContent = questionList[questionCount].question;
        
        for (var x = 0; x < questionList[questionCount].answer.length; x++) {

            var node = document.createTextNode(questionList[questionCount].answer[x].text);

            switch (x) {

                case 0:
                    answerItem0.appendChild(node);
                    answerItem0.setAttribute('class', "options");
                    answerItem0.setAttribute('id', questionList[questionCount].answer[x].correct);
                    console.log(answerItem0);
                    document.body.children[3].append(answerItem0);
                break;

                case 1:
                    answerItem1.appendChild(node);
                    answerItem1.setAttribute('class', "options");
                    answerItem1.setAttribute('id', questionList[questionCount].answer[x].correct);
                    console.log(answerItem1);
                    document.body.children[3].append(answerItem1);
                break;
            
                case 2:
                    answerItem2.appendChild(node);
                    answerItem2.setAttribute('class', "options");
                    answerItem2.setAttribute('id', questionList[questionCount].answer[x].correct);
                    console.log(answerItem2);
                    document.body.children[3].append(answerItem2);
                break;

                case 3:
                    answerItem3.appendChild(node);
                    answerItem3.setAttribute('class', "options");
                    answerItem3.setAttribute('id', questionList[questionCount].answer[x].correct);
                    console.log(answerItem3);
                    document.body.children[3].append(answerItem3);
                break;


                case 4:
                    answerItem4.appendChild(node);
                    answerItem4.setAttribute('class', "options");
                    answerItem4.setAttribute('id', questionList[questionCount].answer[x].correct);
                    console.log(answerItem4);
                    document.body.children[3].append(answerItem4);
                break;
            }
                    
        }

    }

        answerItem0.addEventListener("click", evaluate);
        answerItem1.addEventListener("click", evaluate);
        answerItem2.addEventListener("click", evaluate);
        answerItem3.addEventListener("click", evaluate);
        
        options = document.querySelector(".options");
        console.log(options);   
}

// Review User answer and update the score
function evaluate(event) {

    console.log(event);
    console.log(event.target.firstChild);
    console.log(event.target.id);

    if (event.target.id === "true") {
        message.textContent = "Correct Answer...!!!";
        score = score + 5;
        console.log(score);
    }   else {
        message.textContent = "Wrong Answer...!!!";
        count = count - 5;
    }
    console.log(message.textContent);

    //answerItem4.removeChild(answerItem4.firstChild);
    questionCount++;
    setTimeout(populateQuestions, 500);
}

// after finishing the quiz show the score obtained
function showscore() {
    

    clearInterval(interval);
    message.textContent = "";
    mainText.textContent = "";
    clock.textContent = "";
    document.body.children[3].removeChild(answerItem0);
    document.body.children[3].removeChild(answerItem1);
    document.body.children[3].removeChild(answerItem2);
    document.body.children[3].removeChild(answerItem3);
    //document.body.children[2].removeChild(answerItem4);
    
    head.textContent = "All Done...!!!"
    eInitial.style.visibility = "visible";
    inputBox.style.visibility = "visible";
    recordButton.style.visibility = "visible";
    mainText.textContent = "Your total score is "+score;
    recordButton.addEventListener("click", saveScore);

}

// Save the score the score board
function saveScore() {
    var newScore;

    newScore = score + " - " + inputBox.value;
    console.log(newScore);
    saveHighScores.push(newScore);
    inputBox.value = "";
    arraysort(); // Allows the score board to be displayed descending
    console.log(saveHighScores);
    setTimeout(showhighScores, 500);
}

// Display the score board
function showhighScores() {

    eInitial.style.visibility = "hidden";
    inputBox.style.visibility = "hidden";
    recordButton.style.visibility = "hidden";
    head.textContent ="";
    mainText.textContent = "High Scores";
    clearScores.style.visibility = "visible";
    goBack.style.visibility = "visible";
    startQuiz.style.visibility = "hidden";
    viewScore.style.visibility = "hidden";

        console.log(saveHighScores);

        answerItem0.textContent = "";
        answerItem1.textContent = "";
        answerItem2.textContent = "";
        answerItem3.textContent = "";

    for (var x = 0; x < saveHighScores.length; x++) {

        var node = document.createTextNode(saveHighScores[x]);

        switch (x) {

            case 0:
                answerItem0.appendChild(node);
                answerItem0.setAttribute('class', "scores");
                console.log(answerItem0);
                document.body.children[3].append(answerItem0);
            break;

            case 1:
                answerItem1.appendChild(node);
                answerItem1.setAttribute('class', "scores");
                console.log(answerItem1);
                document.body.children[3].append(answerItem1);
            break;
        
            case 2:
                answerItem2.appendChild(node);
                answerItem2.setAttribute('class', "scores");
                console.log(answerItem2);
                document.body.children[3].append(answerItem2);
            break;

            case 3:
                answerItem3.appendChild(node);
                answerItem3.setAttribute('class', "scores");
                console.log(answerItem3);
                document.body.children[3].append(answerItem3);
            break;


            case 4:
                answerItem4.appendChild(node);
                answerItem4.setAttribute('class', "scores");
                console.log(answerItem4);
                document.body.children[3].append(answerItem4);
            break;
        }

    }
    goBack.addEventListener("click", returnBack);
    clearScores.addEventListener("click", clearScoreArray);
}

// controls the actions to return to the initial screen
function returnBack() {

    cleaningVar();

    questionCount = 0;
    count = 60;
    score = 0;
    introScreen();

}

// allow to review the score board
function viewScores() {
    //cleaningVar();
    showhighScores();
}

// routine to clear variable after each Quiz iteration
function cleaningVar () {

    for (var x =0; x < saveHighScores.length; x++) {

        if (x === 0) {
            document.body.children[3].removeChild(answerItem0);
        }
        
        if (x === 1) {
            document.body.children[3].removeChild(answerItem1);
        }

        if (x === 2) {
            document.body.children[3].removeChild(answerItem2);
        }

        if (x === 3) {
            document.body.children[3].removeChild(answerItem3);
        }
    }

    

}

// Allow to clear teh score board
function clearScoreArray () {

    for (var x =0; x < saveHighScores.length; x++) {

        if (x === 0) {
            document.body.children[3].removeChild(answerItem0);
        }
        
        if (x === 1) {
            document.body.children[3].removeChild(answerItem1);
        }

        if (x === 2) {
            document.body.children[3].removeChild(answerItem2);
        }

        if (x === 3) {
            document.body.children[3].removeChild(answerItem3);
        }
    }
    
    for (var x =0; x < saveHighScores.length; x++) {
        saveHighScores.shift();
    }

    showhighScores();

}

function arraysort() {

    for (var x = 0; x < saveHighScores.length; x++) {
        for (var y = 0; y < saveHighScores.length; y++) {
            if (saveHighScores[x] > saveHighScores[y]) {
                var x1 = saveHighScores[x];
                var y1 = saveHighScores[y];

                saveHighScores[x] = y1;
                saveHighScores[y] = x1;

            }
        }
    }
}
introScreen();








