function openmodal(){
    document.getElementById("modal").style.display="block";
    document.getElementById("header").style.display="none";
    document.getElementById("main").style.display="none";
}
function closemodal(){
    document.getElementById("modal").style.display="none";
    document.getElementById("header").style.display="flex";
    document.getElementById("main").style.display="inherit";
}
