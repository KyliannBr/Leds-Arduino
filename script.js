// Selection des couleurs
let colorPicker = document.getElementById("colorPicker");
// Suppression visuel des couleurs du formulaire
colorPicker.style.display = "none";

// Grille Visible ou non 
let viewBox = document.getElementById("viewBox");

// Temps de dessin défini
let timeSet = document.getElementById("timeSet").textContent;
let timeSetString = timeSet.toString();
let transitionDurationSet = "background-color " + timeSetString + "s";

// Le choix des couleurs dans le formulaire
let color1 = document.getElementById("color1Set").textContent;
let color2 = document.getElementById("color2Set").textContent;
let color3 = document.getElementById("color3Set").textContent;

// Les boutons pour selectionner les couleurs
let color1Button = document.getElementById("color1Button");
let color2Button = document.getElementById("color2Button");
let color3Button = document.getElementById("color3Button");

color1Button.style.backgroundColor = color1;
color2Button.style.backgroundColor = color2;
color3Button.style.backgroundColor = color3;

// Ajout d'ecouteurs sur chaques boutons de couleurs
color1Button.addEventListener("click", color1Select, false);
color2Button.addEventListener("click", color2Select, false);
color3Button.addEventListener("click", color3Select, false);

let colorSelected = document.getElementById("colorSelected");
let colorSelectedString = colorSelected.textContent;  

let colorButtonInt = 0;

// Fonction pour la création automatique de la grille
function createBlocks() {
    for (let y = 0; y < 16; y++) {      // Définition de la talle de la grille sur y
        for (let x = 0; x < 32; x++) {  // Définition de la talle de la grille sur x
            var b = document.createElement("DIV");      // Création de chaques div
            b.id = "block";                            // Identification de chaques div avec l'id "block" 
            b.setAttribute("posX", x);                // Position x de chaques blocks dans un attribut
            b.setAttribute("posY", y);               // Position y de chaques blocks dans un attribut

            document.getElementById("b").appendChild(b);
        }

        var b = document.createElement("DIV");
        b.id = "blocks";
        document.getElementById("b").appendChild(b);
    }
}

if (timeSet != 0) {     // Si le temps de dessin est défini alors :
    createBlocks();     // Afficher la grille de dessin
    // Selection de tous les blocks dans un tableau
    let block = document.querySelectorAll('#block');
    // Selection du formulaire
    let formulaire = document.getElementById("formulaire");
    // Selection des boutons de couleurs 
    let colorPicker = document.getElementById("colorPicker");

    // Suppression visuelle du formulaire
    formulaire.style.display = "none";

    // Affichage des boutons de couleur
    colorPicker.style.display = "flex";

    // Définition duu temps d'affichage du dessin pour chaques blocks
    for (i = 0; i < block.length; i++) {
        block[i].style.transition = transitionDurationSet;
    }
}


// Quand la souris passe sur un block, le block change de couleur

let isMouseHover = false;

function Coloriage() {
    for (i = 0; i < block.length; i++) {

        let blocks = document.querySelectorAll("#block");
    
        blocks[i].addEventListener("mouseleave", function (event) {
            isMouseHover = false
            event.target.style.backgroundColor = "transparent"
        }, false);
    
        if (colorButtonInt == 0) {
            blocks[i].addEventListener("mouseover", function (event) {
                isMouseHover = true;
                event.target.style.backgroundColor = color1;
            }, false);
        } else if (colorButtonInt == 1) {
            blocks[i].addEventListener("mouseover", function (event) {
                isMouseHover = true;
                event.target.style.backgroundColor = color1;
            }, false);
        } else if (colorButtonInt == 2) {
            blocks[i].addEventListener("mouseover", function (event) {
                isMouseHover = true;
                event.target.style.backgroundColor = color2;
            }, false);
        } else if (colorButtonInt == 3) {
            blocks[i].addEventListener("mouseover", function (event) {
                isMouseHover = true;
                event.target.style.backgroundColor = color3;
            }, false);
        } 
    }
    setTimeout(Coloriage, 100);
}


function color1Select() {
    colorButtonInt = 1;
    console.log(colorButtonInt);
}
function color2Select() {
    colorButtonInt = 2;
    console.log(colorButtonInt);
}
function color3Select() {
    colorButtonInt = 3;
    console.log(colorButtonInt);
}



Coloriage();