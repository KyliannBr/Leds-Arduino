let colorPicker = document.getElementById("colorPicker");
let viewBox = document.getElementById("viewBox");
let timeSet = document.getElementById("timeSet").textContent;
let timeSetString = timeSet.toString();
let transitionDurationSet = "background-color " + timeSetString + "s";

let color1 = document.getElementById("color1Set").textContent;
let color2 = document.getElementById("color2Set").textContent;
let color3 = document.getElementById("color3Set").textContent;

let color1Button = document.getElementById("color1Button");
let color2Button = document.getElementById("color2Button");
let color3Button = document.getElementById("color3Button");

color1Button.style.backgroundColor = color1;
color2Button.style.backgroundColor = color2;
color3Button.style.backgroundColor = color3;

console.log(color1);
console.log(color2);
console.log(color3);
console.log(timeSet);

colorPicker.style.display = "none";

function createBlocks(){
    console.log("cc");
    for(let y = 0; y < 16; y++){
        for(let x = 0; x < 32; x++){
            var b = document.createElement("DIV");
            b.id = "block";
            b.setAttribute("posX", x);
            b.setAttribute("posY", y);

            if(x == 0)
                b.style.backgroundColor = "green";
                else if(x == 31)
                    b.style.backgroundColor = "red";
            
            document.getElementById("b").appendChild(b);
        }
        
        var b = document.createElement("DIV");
        b.id = "blocks";
        document.getElementById("b").appendChild(b);
    } 
}

if(timeSet != 0) {
    createBlocks();
    let block = document.querySelectorAll('#block');
    let formulaire = document.getElementById("formulaire");
    let colorPicker = document.getElementById("colorPicker");
    

    formulaire.style.display = "none";
    colorPicker.style.display = "flex"
                           
    for (i = 0; i < block.length; i++) {
        block[i].style.transition = transitionDurationSet;
    }



}



