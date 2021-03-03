var startBtn = document.getElementById("Start-btn");
var infoBox = document.getElementById("info-Box");
var exitBtn = document.getElementById("quit-btn");
var continueBtn = document.getElementById("Next-btn");
var quizBox = document.getElementById("quiz-Box");
var box = document.getElementById("questions-box")
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
}

//and timer will strart





//select random question and ans wit start button
let question = [
    {
        no: 1,
        question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
        answer: "<ul>",
        options: [
            "<ul>",
            "<ol>",
            "<li>",
            "<i></i>",
        ]
    },
    {
        no: 2,
        question: "The correct sequence of HTML tags for starting a webpage is -",
        answer: "HTML, Head, Title, Body",
        option: [
            "Head, Title, HTML, body",
            "HTML, Body, Title, Head",
            "HTML, Head, Title, Body",
            "Body, Head, Title, HTML",
        ]
    },
    {
        no: 3,
        question: "If we want define style for an unique element, then which css selector will we use ?",
        answer: "Id",
        option: [
            "Id",
            "text",
            "class",
            "name",
        ]
    },
    {
        no: 4,
        question: "Why so JavaScript and Java have similar name?",
        answer: "JavaScript's syntax is loosely based on Java's",
        option: [
            "JavaScript is a stripped-down version of Java",
            "JavaScript's syntax is loosely based on Java's",
            "They both originated on the island of Java",
            "None of the above",
        ]
    },
    {

        no: 5,
        question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        answer: "The User's machine running a Web browser",
        option: [
            "The User's machine running a Web browser",
            "The Web server",
            "A central machine deep within Netscape's corporate offices",
            "None of the above",
        ]
    },

];
//HEN a timer starts and I am presented with a question
function startGame() {

}
function nextQuestion() {

}
function selectAnswer() {

}















//code quiz click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question, you can not reselect
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score