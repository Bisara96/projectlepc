<?php 
session_start();


$dealerEmail = $_SESSION['email'];
$prodName = $_POST['pName'];
$prodType = $_POST['pType'];
$prodPrice = $_POST['price'];
$direc = "uploads/";
$dire_file = $direc.basename($_FILES["image"]["name"]);
$dealerName = "";
$prodID = "";



 if (move_uploaded_file($_FILES["image"]["tmp_name"], $dire_file)) {
       
    } else {
        ?><script> alert("Sorry, there was an error uploading your file."); </script> <?php
    }


$mysqli = new mysqli("lepc.database.windows.net","saucecode","TheGoviya1234","db2");
/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$query = "SELECT * FROM products WHERE prodType = '$prodType'";
$result = mysqli_query($mysqli, $query);


if ($result) {
$count = mysqli_num_rows($result);
} 

while ($roww = mysqli_fetch_row($result)){
	$lastP = $roww[0];
}


$count = substr($lastP, 2);


$query2 = "SELECT * FROM dealers WHERE dealerEmail = '$dealerEmail'";
$result2 = mysqli_query($mysqli,$query2);

while ($row = mysqli_fetch_row($result2)){
	$dealerName = $row[0];
	
}



$num = 001 + $count;

switch ($prodType) {
	case 'RAM' :
		
		if (strlen($num) == 1) {
		$prodID = "rm000$num";
	} else {
		$prodID = "rm00$num";
	}
		break;
	
	case 'CPU':
		
		if (strlen($num) == 1) {
		$prodID = "cp000$num";
	} else {
		$prodID = "cp00$num";
	}
		break;
		
	case 'Mother Board':
		
		if (strlen($num) == 1) {
		$prodID = "mb000$num";
	} else {
		$prodID = "mb00$num";
	}
		break;

	case 'GRAPHICS CARD':
		
		if (strlen($num) == 1) {
		$prodID = "gc000$num";
	} else {
		$prodID = "gc00$num";
	}
		break;
		
	case 'SOUND CARD':
		
		if (strlen($num) == 1) {
		$prodID = "ac000$num";
	} else {
		$prodID = "ac00$num";
	}
		break;
		
	case 'POWER SUPPLY':
		
		if (strlen($num) == 1) {
		$prodID = "ps000$num";
	} else {
		$prodID = "ps00$num";
	}
		break;
		
	case 'OPTICAL DRIVE':
		
		if (strlen($num) == 1) {
		$prodID = "od000$num";
	} else {
		$prodID = "od00$num";
	}
		break;
		
	case 'CASE':
		
		if (strlen($num) == 1) {
		$prodID = "cc000$num";
	} else {
		$prodID = "cc00$num";
	}
		break;
		
	case 'HARD':
		
		if (strlen($num) == 1) {
		$prodID = "hd000$num";
	} else {
		$prodID = "hd00$num";
	}
		break;
		
	case 'HARD(SECONDARY':
		
		if (strlen($num) == 1) {
		$prodID = "hd000$num";
	} else {
		$prodID = "hd00$num";
	}
		break;
		
	case 'OS':
		
		if (strlen($num) == 1) {
		$prodID = "os000$num";
	} else {
		$prodID = "os00$num";
	}
		break;
	
}


$query3 = "INSERT INTO newProducts (prodID,imagesrc) VALUES ('$prodID','$dire_file')";
if (!(mysqli_query($mysqli,$query3))){
	echo "Couldnt add to database";
}

$query4 = "INSERT INTO products (prodID,prodName,prodType,prodDealer,prodUnitPrice) VALUES ('$prodID','$prodName','$prodType','$dealerName','$prodPrice')";
if (!(mysqli_query($mysqli,$query4))){
	echo "Couldnt add to database";
}

?>

	<script>if(confirm("Do you want to add more?")){ document.location = 'addProduct.html'; } else {document.location = 'viewdproducts.php';}</script>

	<?php


?>