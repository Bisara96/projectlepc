<?php 
session_start();

$email = $_SESSION['email'];

if(!isset($_SESSION["$email"])){
        $_SESSION["$email"] = array();
  
}


$pId = $_REQUEST['pid'];
//$pId = "m0001";
$qty = $_REQUEST['qty'];
$pName = "";
$pPrice = "";
//$qty = 10;
$ptype = "pc";
$pDealer = "lePc";

$mysqli = new mysqli("localhost", "root", "", "db2");
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$query = "SELECT * FROM pc WHERE id = '$pId'";
$result = mysqli_query($mysqli,$query);
$count = mysqli_num_rows($result);

if ($count != 0) {
while($array = mysqli_fetch_row($result)){
$pName = $array[1];
$pPrice = $array[4];
	}
}

$finalPrice = $qty * $pPrice;
$finalPrice = "$$finalPrice";


$array = array($pName,$pDealer,$ptype,$qty,$finalPrice);

$size = sizeOf($_SESSION["$email"]);



$size = sizeOf($_SESSION["$email"]);


$_SESSION["$email"][$size] = $array;
//$array_push($_SESSION["$email"],$array);

//echo "success";
//print_r($array);
//print_r($_SESSION["$email"][$size-1]);
//print_r($_SESSION["$email"][$size]);

?>