let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte

alert(monTexte.length);




//Ajouter du code ci dessous pour réaliser la suite de l'exercice
let indexI = monTexte.indexOf("i");
document.getElementById("position").innerHTML = indexI;

let monTextUpp = monTexte.toUpperCase();
document.getElementById("chaineMaj").innerHTML = monTextUpp;

for(let lettre of monTexte){
    if(lettre === "a"){
        alert("a trouvé");
    }
}





