<?php 
SESSION_START();

$product = $_REQUEST['pId'];
$email = $_SESSION['email'];
$emailcart = "cart$email";
$emailqty = "qty$email";




if (!isset($_SESSION["$emailcart"])) {

	$_SESSION["$emailcart"] = array();

} 


if (!isset($_SESSION["$emailqty"])) {
	$_SESSION["$emailqty"] = array();
}


$mysqli = new mysqli("localhost", "root", "", "db2");
/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
$prodType = "";
$prodName = "";
$prodPrice = "";

$query = "SELECT * FROM products WHERE prodID = '$product'";
$result = mysqli_query($mysqli, $query);

while ($row=mysqli_fetch_row($result)) {

	

	$prodName = $row[1];
	$prodType = $row[3];
	$prodPrice = $row[4];
		
		
		if(!(mysqli_query($mysqli , $query))){
			echo "Error : <br>" . $query . "<br>" . mysqli_error($mysqli);
		}
		}




		

$cartSize = sizeof($_SESSION["$emailcart"]);


	$swapped = false;

	if ($cartSize != 0){
$e = 0;
	for ($e = 0;$e < $cartSize;$e++){
		if ($_SESSION["$emailcart"][$e][0] == $prodType){
			$_SESSION["$emailcart"][$e][1] = $prodName;
			$_SESSION["$emailcart"][$e][2] = 0;
			$_SESSION["$emailcart"][$e][3] = $prodPrice;

			$swapped = true;
		}

	}
	if (!$swapped) {
		$_SESSION["$emailcart"][$cartSize][0] = $prodType;
		$_SESSION["$emailcart"][$cartSize][1] = $prodName;
		$_SESSION["$emailcart"][$cartSize][2] = 0;
		$_SESSION["$emailcart"][$cartSize][3] = $prodPrice;

		//array($prodType,$prodName, 0, $prodPrice);
		

	}

} else {

	$_SESSION["$emailcart"][0][0] = $prodType;
	$_SESSION["$emailcart"][0][1] = $prodName;
	$_SESSION["$emailcart"][0][2] = 0;
	$_SESSION["$emailcart"][0][3] = $prodPrice;

}

if (sizeof($_SESSION["$emailqty"]) != 0) {

for ($q = 0;$q < sizeof($_SESSION["$emailqty"]);$q++){
	
		if ($_SESSION["$emailqty"][$q][0] == $prodType){
				$_SESSION["$emailqty"][$q][1] = 0;
				
		}
	}
}


?>

<html>
<body>
<table border="1" style = "margin: auto;width: 80%;border-collapse: collapse;">
<caption>Your cart : </caption>
      <thead>
        <tr>
          <th>Product Type</th>
          <th>Product Name </th>
          <th>Qty</th>
          <th>Price </th>
        </tr>
      </thead>
	  
      <tbody>

			<?php 

 
				
				
				$x = 0;
				$c = 0;
				for ($c = 0;$c < sizeof($_SESSION["$emailcart"]);$c++){
				?> <tr> <?php
					for ($x = 0;$x < sizeof($_SESSION["$emailcart"][0]);$x++){


								?>
								<td><?php echo $_SESSION["$emailcart"][$c][$x]; ?></td>
								<?php
		
								
		
														}
								?> </tr><?php echo "\n";
								
											}


				?>

     </tbody>
    </table>
    </body>
    </html>


			

