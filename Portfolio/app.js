var h = window.innerHeight;
document.getElementById("myHeader").style.height = h;
document.getElementById("sec-2").style.height = h;

window.addEventListener("resize", function(){
   h = window.innerHeight;
   document.getElementById("myHeader").style.height = h;
   document.getElementById("sec-2").style.height = h;
});