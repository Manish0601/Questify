const quiz = [

{
question:"What does HTML stand for?",
options:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyperlinks and Text Markup Language",
"None"
],
answer:0
},

{
question:"Which language is used for styling?",
options:[
"HTML",
"CSS",
"Python",
"Java"
],
answer:1
},

{
question:"Which language adds interactivity?",
options:[
"CSS",
"Java",
"JavaScript",
"HTML"
],
answer:2
}

];

let current = 0;

let score = 0;

function loadQuestion(){

let q = quiz[current];

document.getElementById("question").innerText = q.question;

let optionsHTML = "";

q.options.forEach((opt,i)=>{

optionsHTML += `
<div class="option">

<input type="radio" name="answer" value="${i}">

${opt}

</div>
`;

});

document.getElementById("options").innerHTML = optionsHTML;

document.getElementById("qnum").innerText = current + 1;

}

function nextQuestion(){

let selected = document.querySelector('input[name="answer"]:checked');

if(!selected){

alert("Select an answer");

return;

}

if(selected.value == quiz[current].answer){

score++;

}

current++;

if(current < quiz.length){

loadQuestion();

}
else{

localStorage.setItem("score",score);

window.location.href="result.html";

}

}

function submitQuiz(){

localStorage.setItem("score",score);

window.location.href="result.html";

}

loadQuestion();