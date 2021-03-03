var startBtn = document.getElementById("Start-btn");
var infoBox = document.getElementById("info-Box");
var exitBtn = document.getElementById("quit-btn");
var continueBtn = document.getElementById("Next-btn");
var quizBox = document.getElementById("quiz-Box")
//code quiz click the start button i
startBtn.onclick=()=>{
    infoBox.classList.remove("hide");
    infoBox.classList.add("activeInfo");
   }
//exit info box need to be hidden
exitBtn.onclick=()=>{
    infoBox.classList.add("hide");
}
// continue quix box need to show and timer will strart
continueBtn.onclick=()=>{
    infoBox.classList.remove("activeInfo");
    infoBox.classList.add("hide");
    quizBox.classList.remove("hide");
    quizBox.classList.add("activeInfo");
}






//select random question and ans wit start button
//HEN a timer starts and I am presented with a question
function startGame(){

}
function nextQuestion(){

}
function selectAnswer(){

}


































//timer will be loop
//1) How to create an unordered list (a list with the list items in bullets) in HTML?
//ANSWER<ul>
//<ol>
//<li>
//<i></i>

//The correct sequence of HTML tags for starting a webpage is -
//Head, Title, HTML, body
//HTML, Body, Title, Head
//HTML, Head, Title, Body
//HTML, Head, Title, Body


//	If we want define style for an unique element, then which css selector will we use ?
//A. Id
//B. text
//C. class
//D. name

//1.  Why so JavaScript and Java have similar name?
//A.  JavaScript is a stripped-down version of Java
//B.  JavaScript's syntax is loosely based on Java's
//C.  They both originated on the island of Java
//D.  None of the above
//Ans: B


//2.  When a user views a page containing a JavaScript program, which machine actually executes the script?
//A.  The User's machine running a Web browser
//B.   The Web server
//C.  A central machine deep within Netscape's corporate offices
//D.  None of the above
//Ans:  A

















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