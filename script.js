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

let viewBox = document.getElementById("viewBox");

let timeSet = document.getElementById("timeSet").textContent;

let timeSetString = timeSet.toString();

console.log(timeSetString);

let transitionDurationSet = "background-color " + timeSetString + "s";

console.log("transitionDurationSet = " + transitionDurationSet);
console.log(typeof transitionDurationSet);

if(timeSet != 0) {
    createBlocks();
    let block = document.querySelectorAll('#block');             
    let blockHover = document.querySelectorAll(':hover');             

    for (i = 0; i < block.length; i++) {
        block[i].style.transition = transitionDurationSet;
    }

    for (j = 0; j < blockHover.length; j++) {
        blockHover[j].style.transition = "all .1s";
    }
}



