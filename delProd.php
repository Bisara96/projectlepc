<?php 
session_start();


$prodName = $_POST['pName'];
$prodId = "";


$mysqli = new mysqli("localhost", "root", "", "db2");
/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$query = "SELECT * FROM products WHERE prodName = '$prodName'";
$result = mysqli_query($mysqli, $query);
$count = mysqli_num_rows($result);

if ($count == 0){
?> <script>if(confirm("Could not find the product you entered!Try again?")){document.location = 'deldprod.html';}else{
document.location = 'viewdproducts.php';}</script>
<?php exit();
}

if ($result) {
$count = mysqli_num_rows($result);
} 

while ($roww = mysqli_fetch_row($result)){
	$prodId = $roww[0];
}

$query2 = "DELETE FROM products WHERE prodID = '$prodId'";
$result2 = mysqli_query($mysqli, $query2);

if(!$result2){
	echo "Could not delete";
	exit();
}

$query3= "DELETE FROM newproducts WHERE prodID = '$prodId'";
$result3 = mysqli_query($mysqli, $query3);

if(!$result3){
	echo "Could not delete";
	exit();
}


?><script>if(confirm("Product deleted.Do you want to delete more?")){document.location = 'deldprod.html';}else{
document.location = 'viewdproducts.php';}</script>