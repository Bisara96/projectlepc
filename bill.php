<?php 
SESSION_START();

$email = $_SESSION['email'];

/* echo "User : ";
echo $_SESSION['email'];
echo "<br>Apples : <br> Unit Price = "; 
echo $_SESSION['$email']['apples'][0]; 
echo "<br> Quantity = "; 
echo $_SESSION['$email']['apples'][1];
echo "<br> Price = ";
echo $_SESSION['$email']['apples'][2]; */

$total = 0;
for ($val  = 0; $val < sizeof($_SESSION['$email']); $val++){
	for ($val1 = 0; $val1 < sizeof($_SESSION['$email'][$val]); $val1++){
		
		if ($val1 == 0) {
			echo "Unit price = ";
		} else if ($val1 == 1) {
			echo "Quantity = ";
		} else if ($val1 == 2) {
			echo "Price = ";
			$total = $total + $_SESSION['$email'][$val][$val1];

		}
		echo $_SESSION['$email'][$val][$val1]."<br>";
		
	}
	
}
echo "Total Price = $total";


?>