function startQuiz(){

let code = document.querySelector("input").value;

if(code === ""){
alert("Please enter quiz code");
return;
}

window.location.href = "quizpage.html";

}



