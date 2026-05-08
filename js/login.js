function loginUser(){

let role = document.getElementById("role").value

if(role === "student"){
window.location.href="student-dashboard.html"
}
else{
window.location.href="instructor-dashboard.html"
}

}