<?php 
session_start();

$email = $_SESSION['email'];
$dealerName = "";

$mysqli = new mysqli("localhost","root","","db2");
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$query2 = "SELECT * FROM dealers WHERE dealerEmail = '$email'";
$result2 = mysqli_query($mysqli,$query2);

while ($row = mysqli_fetch_row($result2)){
	$dealerName = $row[0];
	
}



$prodrow = array();

$query = "SELECT * FROM products WHERE prodDealer = '$dealerName'";

$products = array();

$result = mysqli_query($mysqli,$query);

$count = mysqli_num_rows($result);


$i = 0;
while (($prodrow=mysqli_fetch_row($result)) && ($i < $count)){
	$products[$i++] = array($prodrow[1],$prodrow[2],$prodrow[4]);
 
}
?>
<html>
<body>
<div class="table-responsive">
<table class="table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Product Type </th>
          <th>Price </th>
        </tr>
      </thead>
      
        
	  
      <tbody>

			<?php 


        if ($count == 0){
        echo "You havent add any item to sell!";
        ?> <tr><td colspan="5">You havent add any item to sell! Please start <a href= "addProduct.html">adding products</a>right away!</td></tr>
        <?php
        exit();
      }
				
				echo "Your Products : <br>";

				$x = 0;
				$c = 0;
				for ($c = 0;$c < $count;$c++){
				?> <tr> <?php

				
					for ($x = 0;$x < sizeof($products[0]);$x++){


								?>
								<td><?php echo $products[$c][$x]; ?></td><?php
								
		
								
		
														} ?>
								</tr><?php echo "\n";

								
											}
				

				?>

     </tbody>
    </table>
    </div>
    </body>
    </html>

?>