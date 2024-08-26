window.addEventListener("load", (event) => {

    var i=0;
    var txt = "Jason's Web of Stuff";
    var speed = 450;
 function typeWriter(){
    if (i<  txt.length){
      document.getElementById("titlepop").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }}
    typeWriter();
});
