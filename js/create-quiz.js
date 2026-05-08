let questionCount = 0;

function addQuestion(){

questionCount++;

let container = document.getElementById("questions");

let q = document.createElement("div");

q.className="question";

q.innerHTML = `

<h3>Question ${questionCount}</h3>

<select class="question-type" onchange="changeType(this)">

<option value="mcq">Multiple Choice</option>
<option value="truefalse">True / False</option>
<option value="fill">Fill in the blanks</option>
<option value="dropdown">Dropdown</option>
<option value="match">Match</option>

</select>

<input placeholder="Enter question text">

<div class="options"></div>

<button onclick="addOption(this)" class="add-option">
+ Add Option
</button>

<button onclick="removeQuestion(this)">
Delete Question
</button>

`;

container.appendChild(q);

}


function addOption(btn){

let options = btn.parentElement.querySelector(".options");

let option = document.createElement("div");

option.className="option";

option.innerHTML=`

<input placeholder="Option text">

<button onclick="this.parentElement.remove()">
X
</button>

`;

options.appendChild(option);

}



function removeQuestion(btn){

btn.parentElement.remove();

}



function generateCode(){

let code = Math.floor(1000 + Math.random()*9000);

document.getElementById("quizCode").innerText="Quiz Code: "+code;

}



function publishQuiz(){

alert("Quiz Published Successfully!");

}
function changeType(select){

let question = select.parentElement;

let options = question.querySelector(".options");

options.innerHTML="";

if(select.value=="truefalse"){

options.innerHTML=`

<div class="option">True</div>

<div class="option">False</div>

`;

}

if(select.value=="text"){

options.innerHTML=`

<input placeholder="Student will type answer">

`;

}

}
function changeType(select){

let question = select.parentElement;

let options = question.querySelector(".options");

options.innerHTML="";

let type = select.value;

/* TRUE FALSE */

if(type=="truefalse"){

options.innerHTML = `

<div class="option">True</div>
<div class="option">False</div>

`;

}

/* FILL IN BLANK */

if(type=="fill"){

options.innerHTML = `

<input placeholder="Correct Answer">

`;

}

/* DROPDOWN */

if(type=="dropdown"){

options.innerHTML = `

<select>

<option>Option 1</option>
<option>Option 2</option>
<option>Option 3</option>

</select>

`;

}

/* MATCH */

if(type=="match"){

options.innerHTML = `

<div class="match">

<input placeholder="Item A">
<input placeholder="Match A">

</div>

<div class="match">

<input placeholder="Item B">
<input placeholder="Match B">

</div>

`;

}

}
function addOption(btn){

let options = btn.parentElement.querySelector(".options");

let option = document.createElement("div");

option.className="option";

option.innerHTML=`

<input placeholder="Option text">

<button onclick="this.parentElement.remove()">X</button>

`;

options.appendChild(option);

}
function removeQuestion(btn){

btn.parentElement.remove();

}