document.addEventListener("click", enterFullscreen, { once: true });

function enterFullscreen(){

let elem = document.documentElement;

if(elem.requestFullscreen){
elem.requestFullscreen();
}
else if(elem.webkitRequestFullscreen){
elem.webkitRequestFullscreen();
}
else if(elem.msRequestFullscreen){
elem.msRequestFullscreen();
}

}
