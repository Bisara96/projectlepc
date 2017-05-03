<?php 
SESSION_START();

$email = $_SESSION['email'];
$cpu = $_POST['cpu'];
$ram = $_POST['ram'];
$mb = $_POST['mb'];
$hd = $_POST['hard'];
$hdS = $_POST['hardSec'];
$grap = $_POST['grap'];
$snd = $_POST['snd'];
$pow = $_POST['pow'];
$case = $_POST['uni'];
$cd = $_POST['cd'];
$os = $_POST['os'];
$emailqty = "qty$email";



$mysqli = new mysqli("localhost", "root", "", "db2");
/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
$x = 0;
$query[0] = "SELECT * FROM products WHERE prodID = '$cpu'";
$query[1] = "SELECT * FROM products WHERE prodID = '$ram'";
$query[2] = "SELECT * FROM products WHERE prodID = '$mb'";
$query[3] = "SELECT * FROM products WHERE prodID = '$hd'";
$query[4] = "SELECT * FROM products WHERE prodID = '$grap'";
$query[5] = "SELECT * FROM products WHERE prodID = '$snd'";
$query[6] = "SELECT * FROM products WHERE prodID = '$pow'";
$query[7] = "SELECT * FROM products WHERE prodID = '$case'";
$query[8] = "SELECT * FROM products WHERE prodID = '$cd'";
$query[9] = "SELECT * FROM products WHERE prodID = '$os'";
$query[10] = "SELECT * FROM products WHERE prodID = '$hdS'";






$n = 0;
for ($n = 0;$n <= 10;$n++) {
	$result = mysqli_query($mysqli, $query[$n]);

 while ($row=mysqli_fetch_row($result)) {
	$price = "$$row[4]";
		$_SESSION["$email"][$n] = array($row[1] ,$row[2] ,$row[3] , 1, $price );
		$queryLog = "INSERT into log (customerEmail,prodID,dealerName) VALUES ('$email','$row[0]','$row[2]')";
		if(!(mysqli_query($mysqli , $queryLog))){
			echo "Error : <br>" . $queryLog . "<br>" . mysqli_error($mysqli);
		}
		}
			}
			$nprice = "";

if (isset($_SESSION["$emailqty"])) {

	for ($y = 0;$y < sizeof($_SESSION["$emailqty"]);$y++){
		for ($x = 0;$x < sizeof($_SESSION["$email"]);$x++){
			if ($_SESSION["$emailqty"][$y][0] == $_SESSION["$email"][$x][2]){
				$_SESSION["$email"][$x][3] = $_SESSION["$emailqty"][$y][1];
				$str = substr($_SESSION["$email"][$x][4], 1);
				$_SESSION["$email"][$x][4] = $str * $_SESSION["$emailqty"][$y][1];
				$nprice = $_SESSION["$email"][$x][4];
				$_SESSION["$email"][$x][4] = "$$nprice";
 			}
		}
	}


} 





    echo "Added to session<br>";
/*
    $queryName = "SELECT * FROM formData WHERE emailAdd = '$email'";
	$result1 = mysqli_query($mysqli, $queryName);

	if(!isset($_SESSION['cusFullName'])){
				$_SESSION['cusFullName'] = "";
	
	
	
}

	if(!isset($_SESSION['cusTel'])){
				$_SESSION['cusTel'] = "";
	
	
	
}

	
$customerName = "";


     while ($row1=mysqli_fetch_row($result1)) {

			$customerName = "$row1[0] $row1[1]";
			$tellNo = "$row1[6]";
			//$_SESSION['cusFullName'] = $customerName;
			//$_SESSION['cusTel'] = $row[6]; 
			
			echo $customerName;
			echo $tellNo;
			echo $email;
    }
*/
    $result->close();
	
	header('Location: cartBill1.php');

/* close connection */
$mysqli->close();


?>