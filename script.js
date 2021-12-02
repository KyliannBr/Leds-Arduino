// Selection des couleurs
let colorPicker = document.getElementById("colorPicker");
// Suppression visuel des couleurs du formulaire
colorPicker.style.display = "none";

// Selection des models
let dessinModels = document.getElementById("dessinModels");
// Suppression visuel des models
dessinModels.style.display = "none";

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

let model1Button = document.getElementById("model1");
let model2Button = document.getElementById("model2");
let model3Button = document.getElementById("model3");
let resetButton = document.getElementById("reset");

color1Button.style.backgroundColor = color1;
color2Button.style.backgroundColor = color2;
color3Button.style.backgroundColor = color3;

// Ajout d'ecouteurs sur chaques boutons de couleurs
color1Button.addEventListener("click", color1Select, false);
color2Button.addEventListener("click", color2Select, false);
color3Button.addEventListener("click", color3Select, false);

model1Button.addEventListener("click", model1, false);
model2Button.addEventListener("click", model2, false);
model3Button.addEventListener("click", model3, false);
resetButton.addEventListener("click", reset, false);

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
    let dessinModels = document.getElementById("dessinModels");

    // Suppression visuelle du formulaire
    formulaire.style.display = "none";

    // Affichage des boutons de couleur
    colorPicker.style.display = "flex";

    dessinModels.style.display = "flex";

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


function model1() {
    let blocks = document.querySelectorAll("#block");
    let colorSelectForModel = 0; 

    if(colorButtonInt == 0) {
        colorSelectForModel = color1;
    } else if(colorButtonInt == 1) {
        colorSelectForModel = color1;
    } else if(colorButtonInt == 2) {
        colorSelectForModel = color2;
    } else if (colorButtonInt == 3) {
        colorSelectForModel = color3;
    }

    blocks.forEach(element => {
        // line0 

            if(element.getAttribute("posy") == 0 && element.getAttribute("posx") == 13) {
            element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 0 && element.getAttribute("posx") == 14) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 0 && element.getAttribute("posx") == 15) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 0 && element.getAttribute("posx") == 16) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 0 && element.getAttribute("posx") == 17) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 0 && element.getAttribute("posx") == 18) {
            element.style.backgroundColor = colorSelectForModel;
            }

        // line 1 
            
            if(element.getAttribute("posy") == 1 && element.getAttribute("posx") == 11) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 1 && element.getAttribute("posx") == 12) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 1 && element.getAttribute("posx") == 13) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 1 && element.getAttribute("posx") == 14) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 1 && element.getAttribute("posx") == 15) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 1 && element.getAttribute("posx") == 16) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 1 && element.getAttribute("posx") == 17) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 1 && element.getAttribute("posx") == 18) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 1 && element.getAttribute("posx") == 19) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 1 && element.getAttribute("posx") == 20) {
                element.style.backgroundColor = colorSelectForModel;
            }

        // line 2 

            if(element.getAttribute("posy") == 2 && element.getAttribute("posx") == 10) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 2 && element.getAttribute("posx") == 11) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 2 && element.getAttribute("posx") == 12) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 2 && element.getAttribute("posx") == 13) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 2 && element.getAttribute("posx") == 14) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 2 && element.getAttribute("posx") == 15) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 2 && element.getAttribute("posx") == 16) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 2 && element.getAttribute("posx") == 17) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 2 && element.getAttribute("posx") == 18) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 2 && element.getAttribute("posx") == 19) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 2 && element.getAttribute("posx") == 20) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 2 && element.getAttribute("posx") == 21) {
                element.style.backgroundColor = colorSelectForModel;
            }

        // line 3

            if(element.getAttribute("posy") == 3 && element.getAttribute("posx") == 9) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 3 && element.getAttribute("posx") == 10) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 3 && element.getAttribute("posx") == 11) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 3 && element.getAttribute("posx") == 12) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 3 && element.getAttribute("posx") == 13) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 3 && element.getAttribute("posx") == 16) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 3 && element.getAttribute("posx") == 17) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 3 && element.getAttribute("posx") == 18) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 3 && element.getAttribute("posx") == 19) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 3 && element.getAttribute("posx") == 22) {
                element.style.backgroundColor = colorSelectForModel;
            }

        // line 4

            if(element.getAttribute("posy") == 4 && element.getAttribute("posx") == 9) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 4 && element.getAttribute("posx") == 10) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 4 && element.getAttribute("posx") == 11) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 4 && element.getAttribute("posx") == 12) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 4 && element.getAttribute("posx") == 13) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 4 && element.getAttribute("posx") == 16) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 4 && element.getAttribute("posx") == 17) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 4 && element.getAttribute("posx") == 18) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 4 && element.getAttribute("posx") == 19) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 4 && element.getAttribute("posx") == 22) {
                element.style.backgroundColor = colorSelectForModel;
            }

        // line 5

            if(element.getAttribute("posy") == 5 && element.getAttribute("posx") == 8) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 5 && element.getAttribute("posx") == 9) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 5 && element.getAttribute("posx") == 10) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 5 && element.getAttribute("posx") == 11) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 5 && element.getAttribute("posx") == 12) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 5 && element.getAttribute("posx") == 13) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 5 && element.getAttribute("posx") == 14) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 5 && element.getAttribute("posx") == 15) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 5 && element.getAttribute("posx") == 16) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 5 && element.getAttribute("posx") == 17) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 5 && element.getAttribute("posx") == 18) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 5 && element.getAttribute("posx") == 19) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 5 && element.getAttribute("posx") == 23) {
                element.style.backgroundColor = colorSelectForModel;
            }

        // line 6

            if(element.getAttribute("posy") == 6 && element.getAttribute("posx") == 8) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 6 && element.getAttribute("posx") == 9) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 6 && element.getAttribute("posx") == 10) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 6 && element.getAttribute("posx") == 11) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 6 && element.getAttribute("posx") == 12) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 6 && element.getAttribute("posx") == 13) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 6 && element.getAttribute("posx") == 14) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 6 && element.getAttribute("posx") == 15) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 6 && element.getAttribute("posx") == 16) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 6 && element.getAttribute("posx") == 17) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 6 && element.getAttribute("posx") == 18) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 6 && element.getAttribute("posx") == 23) {
                element.style.backgroundColor = colorSelectForModel;
            }

        // line 7

            if(element.getAttribute("posy") == 7 && element.getAttribute("posx") == 8) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 7 && element.getAttribute("posx") == 9) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 7 && element.getAttribute("posx") == 10) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 7 && element.getAttribute("posx") == 11) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 7 && element.getAttribute("posx") == 12) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 7 && element.getAttribute("posx") == 13) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 7 && element.getAttribute("posx") == 14) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 7 && element.getAttribute("posx") == 15) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 7 && element.getAttribute("posx") == 16) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 7 && element.getAttribute("posx") == 17) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 7 && element.getAttribute("posx") == 23) {
                element.style.backgroundColor = colorSelectForModel;
            }

        // line 8

            if(element.getAttribute("posy") == 8 && element.getAttribute("posx") == 8) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 8 && element.getAttribute("posx") == 9) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 8 && element.getAttribute("posx") == 10) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 8 && element.getAttribute("posx") == 11) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 8 && element.getAttribute("posx") == 12) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 8 && element.getAttribute("posx") == 13) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 8 && element.getAttribute("posx") == 14) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 8 && element.getAttribute("posx") == 15) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 8 && element.getAttribute("posx") == 16) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 8 && element.getAttribute("posx") == 23) {
                element.style.backgroundColor = colorSelectForModel;
            }
            
        // line 9

            if(element.getAttribute("posy") == 9 && element.getAttribute("posx") == 8) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 9 && element.getAttribute("posx") == 9) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 9 && element.getAttribute("posx") == 10) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 9 && element.getAttribute("posx") == 11) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 9 && element.getAttribute("posx") == 12) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 9 && element.getAttribute("posx") == 23) {
                element.style.backgroundColor = colorSelectForModel;
            }

        // line 10

            if(element.getAttribute("posy") == 10 && element.getAttribute("posx") == 8) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 10 && element.getAttribute("posx") == 9) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 10 && element.getAttribute("posx") == 10) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 10 && element.getAttribute("posx") == 11) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 10 && element.getAttribute("posx") == 23) {
                element.style.backgroundColor = colorSelectForModel;
            }
            
        // line 11

            if(element.getAttribute("posy") == 11 && element.getAttribute("posx") == 9) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 11 && element.getAttribute("posx") == 10) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 11 && element.getAttribute("posx") == 11) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 11 && element.getAttribute("posx") == 16) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 11 && element.getAttribute("posx") == 17) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 11 && element.getAttribute("posx") == 22) {
                element.style.backgroundColor = colorSelectForModel;
            }

        // line 12

            if(element.getAttribute("posy") == 12 && element.getAttribute("posx") == 9) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 12 && element.getAttribute("posx") == 10) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 12 && element.getAttribute("posx") == 11) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 12 && element.getAttribute("posx") == 16) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 12 && element.getAttribute("posx") == 17) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 12 && element.getAttribute("posx") == 21) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 12 && element.getAttribute("posx") == 22) {
                element.style.backgroundColor = colorSelectForModel;
            }

        // line 13

            if(element.getAttribute("posy") == 13 && element.getAttribute("posx") == 10) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 13 && element.getAttribute("posx") == 11) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 13 && element.getAttribute("posx") == 12) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 13 && element.getAttribute("posx") == 20) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 13 && element.getAttribute("posx") == 21) {
                element.style.backgroundColor = colorSelectForModel;
            }

        // line 14

            if(element.getAttribute("posy") == 14 && element.getAttribute("posx") == 11) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 14 && element.getAttribute("posx") == 12) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 14 && element.getAttribute("posx") == 13) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 14 && element.getAttribute("posx") == 14) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 14 && element.getAttribute("posx") == 19) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 14 && element.getAttribute("posx") == 20) {
                element.style.backgroundColor = colorSelectForModel;
            }

        // line 1

            
            if(element.getAttribute("posy") == 15 && element.getAttribute("posx") == 13) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 15 && element.getAttribute("posx") == 14) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 15 && element.getAttribute("posx") == 15) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 15 && element.getAttribute("posx") == 16) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 15 && element.getAttribute("posx") == 17) {
                element.style.backgroundColor = colorSelectForModel;
            }
            if(element.getAttribute("posy") == 15 && element.getAttribute("posx") == 18) {
                element.style.backgroundColor = colorSelectForModel;
            }


    });

    
}


function model2() {
    
}
function model3() {

}

function reset() {
    location.reload();
}


Coloriage();