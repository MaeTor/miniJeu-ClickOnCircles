let titre=document.getElementById('titre');
titre.style.color="green";
var compteur=0;
const btnRed=document.getElementById("btn-red");
btnRed.addEventListener('click', function(){
compter();
});
const btnBlue=document.getElementById("btn-blue");
btnBlue.addEventListener('click', function(){
compter();
});

function compter(){compteur++; console.log(compteur); titre.innerText=compteur;}
setTimeout(function(){
    btnRed.remove();
    btnBlue.remove();console.log("fin du chrono!")}, 10000
);