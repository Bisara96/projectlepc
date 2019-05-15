<?php 

include 'db_config.php';

$productId = $_REQUEST['Id'];
echo $productId;

$mysqli = new mysqli($db_host, $db_user, $db_password, $db_name);
/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
$prodType = "";
$prodName = "";
$prodPrice = "";
$dealer = "";

$query = "SELECT * FROM products WHERE prodID = '$productId'";
$result = mysqli_query($mysqli, $query);

while ($row=mysqli_fetch_row($result)) {

	

	$prodName = $row[1];
	$prodType = $row[3];
	$prodPrice = $row[4];
	$dealer = $row[2];
echo "Name = $prodName<br>";
echo "Type = $prodType<br>";
echo "Dealer = $dealer<br>";
echo "Price = $prodPrice<br>";
		
		
		if(!(mysqli_query($mysqli , $query))){
			echo "Error : <br>" . $query . "<br>" . mysqli_error($mysqli);
		}
		}

?>