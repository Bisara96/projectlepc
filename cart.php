<?php 
SESSION_START();

$apples = (int)$_POST['apple'];
$mangoes = (int)$_POST['mangoes'];
$banana = (int)$_POST['banana'];

echo "bla bla";
echo $_SESSION['email'];
$email = $_SESSION['email'];

echo "$email";

//initialising the shopping cart

$_SESSION['$email'] = array();
$_SESSION['$email'][0] = array(60 , $apples , 60*$apples);
$_SESSION['$email'][1] = array(80 , $mangoes , 80*$mangoes);
$_SESSION['$email'][2] = array(100 , $banana , 100*$banana);

header("Location: bill.php");


?>