



// Disable right click
document.addEventListener("contextmenu", e => e.preventDefault());


// Disable copy paste
document.addEventListener("copy", e => e.preventDefault());
document.addEventListener("paste", e => e.preventDefault());


// Detect tab switching
document.addEventListener("visibilitychange", function(){

if(document.hidden){

alert("⚠ Tab switching detected. Quiz will be submitted.");

submitQuiz();

}

});


// Auto submit
function submitQuiz(){

alert("Quiz Submitted!");

window.location.href="result.html";

}