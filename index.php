<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hippocamp</title>

    <link rel="stylesheet" href="style.css">
</head>

<body onload="<?php session_start(); ?>">

<?php

    error_reporting(0);
    $timePicker = $_POST["timePicker"];
    $viewBox = 0;
    $color1 = $_POST["color1"];
    $color2 = $_POST["color2"];
    $color3 = $_POST["color3"];

    if ($timePicker != null) {
        $viewBox = 1;
    }

    ?>

    <div id="formulaire">
        <form action="#" method="post">

            <h1>APP</h1>

            <div class="time">

                <label for="timePicker">Temps de dessin : </label>
                <input type="number" name="timePicker" id="timePicker" min="5" max="100">

            </div>
            <h3>Couleurs</h3>
            <div class="colors">
                <div>
                    <label for="color1">selectionner une couleur</label>
                    <input type="color" name="color1" id="color1">
                </div>
                <div>
                    <label for="color2">selectionner une couleur</label>
                    <input type="color" name="color2" id="color2">
                </div>
                <div>
                    <label for="color3">selectionner une couleur</label>
                    <input type="color" name="color3" id="color3">
                </div>
            </div>
            <button type="submit">Confirmer</button>
        </form>
    </div>


    <div class="colorPicker" id="colorPicker">
        <div class="center">
            <button value="<?php echo($color1);?>" name="color1" id="color1Button"></button>
            <button value="<?php echo($color2);?>" name="color2" id="color2Button"></button>
            <button value="<?php echo($color3);?>" name="color3" id="color3Button"></button>
        </div>
    </div>

    

    <p id="viewBox"><?php echo ($viewBox); ?></p>
    <p id="timeSet"><?php echo ($timePicker); ?></p>
    <p id="color1Set"><?php echo ($color1); ?></p>
    <p id="color2Set"><?php echo ($color2); ?></p>
    <p id="color3Set"><?php echo ($color3); ?></p>

    <div id="box">
        <div id="b"></div>
    </div>


    <script type="text/javascript" src="script.js"></script>
</body>

</html>