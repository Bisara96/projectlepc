<?php 

$productId = $_REQUEST['Id'];
echo $productId;

$mysqli = new mysqli("lepc.database.windows.net","saucecode","TheGoviya1234","db2");
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