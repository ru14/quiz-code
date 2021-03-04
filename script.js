const bodyElement = body = document.getElementsByTagName('body')[0];
var selectedBtn = null;

var startBtn = document.getElementById("Start-btn");
var infoBox = document.getElementById("info-Box");
var exitBtn = document.getElementById("quit-btn");
var continueBtn = document.getElementById("Next-btn");
var quizBox = document.getElementById("quiz-Box");
var box = document.getElementById("questions-box");
var timeCount = document.getElementById("timer");
var resultBox = document.getElementById("grade");
var restartBtn = document.getElementById("restart");
var saveScoreBtn = document.getElementById("saveScore");
var clearScoreBtn = document.getElementById("clearScore");
//var shuffledQuestions
//code quiz click the start button i
startBtn.onclick = () => {
    infoBox.classList.remove("hide");
    infoBox.classList.add("activeInfo");
}
//exit info box need to be hidden
exitBtn.onclick = () => {
    infoBox.classList.add("hide");
}
// continue quix box need to show and timer will strart
continueBtn.onclick = () => {
    infoBox.classList.remove("activeInfo");
    infoBox.classList.add("hide");
    quizBox.classList.remove("hide");
    quizBox.classList.add("activeInfo");
    box.classList.remove("hide");
    box.classList.add("activeInfo");
    //shuffledQuestions = question.sort(()=>Math.random()-.5),
    //currentQuestionIndex=0
    startTimer(counter);
    setNextquestion(0);
    queCounter(noCount);

}
// if next btn clicked next question selected
//shuffledQuestions = questions.sort(()=>Math.random()-.5);
 let queCount = 0;
 let noCount = 1;
 let counter = 75;

var nextBtn = document.getElementById("Next-Que");
nextBtn.onclick = () => {
    // reset view
    resetView();
    selectedBtn = null;

    if (queCount < questions.length - 1) {
        queCount++;
        noCount++;
        setNextquestion(queCount);
        queCounter(noCount);
        // console.log(queCount);
    } else {
        console.log("Finished");
    }
}

function resetView() {
    bodyElement.classList.remove("correct");
    selectedBtn.classList.remove("correct");
    bodyElement.classList.remove("wrong");
    selectedBtn.classList.remove("wrong");
}
//random question selection
function setNextquestion(index) {
    var selectedQuestion = questions[index];
    var questionElem = document.getElementById("question");
    questionElem.innerHTML = "<span><p>" + noCount + "." + "</p>" + selectedQuestion.question + "</span>";//ques


    var ansBtn1 = document.getElementById("ans1");
    ansBtn1.innerHTML = selectedQuestion.answer[0].text;
    ansBtn1.dataset.correct = selectedQuestion.answer[0].correct;
    ansBtn1.addEventListener('click', selectAnswer);

    var ansBtn2 = document.getElementById("ans2");
    ansBtn2.innerHTML = selectedQuestion.answer[1].text;
    ansBtn2.dataset.correct = selectedQuestion.answer[1].correct;
    ansBtn2.addEventListener('click', selectAnswer);

    var ansBtn3 = document.getElementById("ans3");
    ansBtn3.innerHTML = selectedQuestion.answer[2].text;
    ansBtn3.dataset.correct = selectedQuestion.answer[2].correct;
    ansBtn3.addEventListener('click', selectAnswer);

    var ansBtn4 = document.getElementById("ans4");
    ansBtn4.innerHTML = selectedQuestion.answer[3].text;
    ansBtn4.dataset.correct = selectedQuestion.answer[3].correct;
    ansBtn4.addEventListener('click', selectAnswer);


}



function selectAnswer(e) {
    // once seected button stop all selection
    if (selectedBtn != null) {
        return;
    }
    selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct;
    if (correct === "true") {
        bodyElement.classList.add("correct");
        selectedBtn.classList.add("correct");
    }
    else {
        bodyElement.classList.add("wrong");
        selectedBtn.classList.add("wrong");
        counter = counter-15;
    }
    //display correct ans
};

function startTimer(){
    timeCount.innerHTML="<span>" + counter + "</span>";
    setInterval(timer, 1000);
    function timer(){        
        timeCount.textContent = counter;   
        counter--;
        if(counter <= 0){
            clearInterval(counter);
            timeCount.textContent = 0;
            
        }
    }   
};

//and timer will strart it need to detect 15 sec for wrong question 
function queCounter(index) {
    var counter = document.getElementById("count");
    let queCountTag = "<span><p>" + index + "</p>of<p>" + questions.length + "</p>Questions</span>";
    counter.innerHTML = queCountTag;
};






//select random question and ans wit start button
let questions = [
    {
        question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
        answer: [
            { text: "ul", correct: true },
            { text: "ol", correct: false },
            { text: "li", correct: false },
            { text: "i", correct: false },
        ]
    },
    {
        question: "The correct sequence of HTML tags for starting a webpage is ?",
        answer: [
            { text: "Head, Title, HTML, body", correct: false },
            { text: "HTML, Body, Title, Head", correct: false },
            { text: "HTML, Head, Title, Body", correct: true },
            { text: "Body, Head, Title, HTML", correct: false },
        ]
    },
    {
        question: "If we want define style for an unique element, then which css selector will we use ?",
        answer: [
            { text: "Id", correct: true },
            { text: "text", correct: false },
            { text: "class", correct: false },
            { text: "name", correct: false },
        ]
    },
    {
        question: "Why so JavaScript and Java have similar name?",
        answer: [
            { text: "JavaScript is a stripped-down version of Java", correct: false },
            { text: "JavaScript's syntax is loosely based on Java's", correct: true },
            { text: "They both originated on the island of Java", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
    {

        question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        answer: [
            { text: "The User's machine running a Web browser", correct: true },
            { text: "The Web server", correct: false },
            { text: "A central machine deep within Netscape's corporate offices", correct: false },
            { text: "None of the above", correct: false },
        ]
    },

];

//HEN a timer starts and I am presented with a question

















//code quiz click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question, you can not reselect
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN counter is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score