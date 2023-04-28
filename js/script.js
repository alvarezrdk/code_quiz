//var container = document.querySelector(".container");

//container.addEventListener("click", function(event) {
  //var element = event.target;

  // TODO: Complete function
  //console.log(event.target.getAttribute("Data-state"));
//});

var intro = ["Conding Quiz Paragraph"];
var startQuiz = document.querySelector(".startButton");
var questionCount = 0;
var answerItem0 = document.createElement("button");
var answerItem1 = document.createElement("button");
var answerItem2 = document.createElement("button");
var answerItem3 = document.createElement("button");
var answerItem4 = document.createElement("button");
var mainText = document.querySelector(".mainText");
var message = document.querySelector("#message");
var clock;
var count = 20;
var score = 0;


function introScreen() {
    mainText.textContent = intro[0];
}

function populateQuestions() {
    var interval;

    if (questionCount === 0) {
        interval = setInterval(function(){       
            clock = document.querySelector(".counter");
            if (count === 0){
                if (clock.textContent !== " "){
                clock.textContent = "You're out of time!";
                clearInterval(interval);
                setTimeout(showscore, 500);
                }
            } else {
                    clock.textContent = count;
                    count--;
                }
      }, 1000);
    }

    var mainText = document.querySelector(".mainText");
    var questionList = [    
        {
            question: "Question One",
            answer: [
                {   text: "A",
                    correct: "false"
                },
                
                {   text: "B",
                    correct: "false"
                },
                
                {   text: "C",
                    correct: "true",
                },
                
                {   text: "D",
                    correct: "false"
                }
            ],
        },    
        {  
            question: "Question Two",
            answer: [
                {   text: "E",
                    correct: "false"
                },
                
                {   text: "F",
                    correct: "true"
                },
                
                {   text: "G",
                    correct: "false"
                },
                
                {   text: "H",
                    correct: "false"
                }
            ],
        },
        {  
            question: "Question Three",
            answer: [
                {   text: "I",
                    correct: "false"
                },
                
                {   text: "J",
                    correct: "true"
                },
                
                {   text: "K",
                    correct: "false"
                },
                
                {   text: "L",
                    correct: "false"
                }
            ],
        },
        {  
            question: "Question Four",
            answer: [
                {   text: "M",
                    correct: "false"
                },
                
                {   text: "N",
                    correct: "true"
                },
                
                {   text: "O",
                    correct: "false"
                },
                
                {   text: "P",
                    correct: "false"
                }
            ],
        },
        {  
            question: "Question Five",
            answer: [
                {   text: "Q",
                    correct: "false"
                },
                
                {   text: "R",
                    correct: "true"
                },
                
                {   text: "S",
                    correct: "false"
                },
                
                {   text: "T",
                    correct: "false"
                }
            ],
        },
    ];

    startQuiz.style.visibility ='hidden';

    if (answerItem0.firstChild !== null) {
        answerItem0.removeChild(answerItem0.firstChild);
        answerItem1.removeChild(answerItem1.firstChild);
        answerItem2.removeChild(answerItem2.firstChild);
        answerItem3.removeChild(answerItem3.firstChild);
        message.textContent = "";
    }

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
                    document.body.children[2].append(answerItem0);
                break;

                case 1:
                    answerItem1.appendChild(node);
                    answerItem1.setAttribute('class', "options");
                    answerItem1.setAttribute('id', questionList[questionCount].answer[x].correct);
                    console.log(answerItem1);
                    document.body.children[2].append(answerItem1);
                break;
            
                case 2:
                    answerItem2.appendChild(node);
                    answerItem2.setAttribute('class', "options");
                    answerItem2.setAttribute('id', questionList[questionCount].answer[x].correct);
                    console.log(answerItem2);
                    document.body.children[2].append(answerItem2);
                break;

                case 3:
                    answerItem3.appendChild(node);
                    answerItem3.setAttribute('class', "options");
                    answerItem3.setAttribute('id', questionList[questionCount].answer[x].correct);
                    console.log(answerItem3);
                    document.body.children[2].append(answerItem3);
                break;


                case 4:
                    answerItem4.appendChild(node);
                    answerItem4.setAttribute('class', "options");
                    answerItem4.setAttribute('id', questionList[questionCount].answer[x].correct);
                    console.log(answerItem4);
                    document.body.children[2].append(answerItem4);
                break;
            }
                    
        }

    }
        options = document.querySelector(".options");
        console.log(options);   
}

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
    }
    console.log(message.textContent);

    //answerItem4.removeChild(answerItem4.firstChild);
    questionCount++;
    setTimeout(populateQuestions, 500);
}

function showscore() {

    mainText.textContent = "";
    clock.textContent = "";
    document.body.children[2].removeChild(answerItem0);
    document.body.children[2].removeChild(answerItem1);
    document.body.children[2].removeChild(answerItem2);
    document.body.children[2].removeChild(answerItem3);
    //document.body.children[2].removeChild(answerItem4);

}

introScreen();

startQuiz.addEventListener("click", populateQuestions);
answerItem0.addEventListener("click", evaluate);
answerItem1.addEventListener("click", evaluate);
answerItem2.addEventListener("click", evaluate);
answerItem3.addEventListener("click", evaluate);





