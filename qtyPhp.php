<?php 
SESSION_START();

$productType = $_REQUEST['type'];
$qty = $_REQUEST['value'];
$email = $_SESSION['email'];
$emailcart = "cart$email";
$emailqty = "qty$email";


if (!isset($_SESSION["$emailqty"])) {
	$_SESSION["$emailqty"] = array();
}



$price = 0;
$found = false;

for ($z = 0;$z < sizeof($_SESSION["$emailcart"]);$z++ ){
	if ($_SESSION["$emailcart"][$z][0] == $productType){
			$_SESSION["$emailcart"][$z][2];
			$_SESSION["$emailcart"][$z][2] = $_SESSION["$emailcart"][$z][2] + $qty;
			$prodName = $_SESSION["$emailcart"][$z][1];
			$price = $_SESSION["$emailcart"][$z][3] * $_SESSION["$emailcart"][$z][2];
			$_SESSION["$emailcart"][$z][3] = $price;
			$found = true;

	}
	
} 

	if (!($found)) {
		exit();
	}
$status = false;

if (sizeof($_SESSION["$emailqty"]) != 0){
	for ($q = 0;$q < sizeof($_SESSION["$emailqty"]);$q++){
		if ($_SESSION["$emailqty"][$q][0] == $productType){
				$_SESSION["$emailqty"][$q][1] = $_SESSION["$emailqty"][$q][1] + $qty;
				$status = true;
			}

		}
	}

	if(sizeof($_SESSION["$emailqty"]) == 0){
		$_SESSION["$emailqty"][0][0] = $productType;
		$_SESSION["$emailqty"][0][1] = $qty;
		$status = true;
	}

	if ($status != true){
		
		$number = sizeof($_SESSION["$emailqty"]);
		$_SESSION["$emailqty"][$number][0] = $productType;
		$_SESSION["$emailqty"][$number][1] = $qty;
		
	}


?>

<html>
<body>
<table border="1" style = "margin: auto;width: 80%;border-collapse: collapse;" >
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


			

