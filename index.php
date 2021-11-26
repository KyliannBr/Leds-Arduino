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
    <form action="#" method="post">
        <h1>APP</h1>
        <div>
            <label for="timePicker">Temps de dessin : </label>
            <input type="number" name="timePicker" id="timePicker" min="10" max="100">
        </div>
        <button type="submit">Confirmer</button>
    </form>

    <?php 
    
        error_reporting(0);
        $timePicker = $_POST["timePicker"];

        $viewBox = 0; 

        if($timePicker != null) {
            $viewBox = 1;
        }

    ?>

        <p id="viewBox"><?php echo($viewBox); ?></p>

        <p id="timeSet"><?php echo($timePicker); ?></p>

    <div id="box">

        

        <div id="b"></div>
    </div>
    

    <script type="text/javascript" src="script.js"></script>
</body>

</html>