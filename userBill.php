<?php 
SESSION_START();

$email = $_SESSION['email'];
echo "Customer $email 's Bill : ";
echo "Product Name		Product Type		Product price		Dealer Name";
$x = 0;
for ($x = 0;$x < sizeof($_SESSION['$email'][0]);$x++){
	echo $_SESSION['$email'][0][$x];
	echo"		";
	}



?>