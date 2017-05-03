<?php 
session_start();

$mysqli = new mysqli("lepc.database.windows.net","saucecode","TheGoviya1234","db2");
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$prodrow = array();

$query = "SELECT * FROM newproducts";

$newprods  = array();

$result = mysqli_query($mysqli,$query);

$count = mysqli_num_rows($result);


$i = 0;
while (($prodrow=mysqli_fetch_row($result)) && ($i < $count)){
	$newprods[$i] = array($prodrow[0],$prodrow[1]);
	$query2 = "SELECT * FROM products WHERE prodID = '$prodrow[0]'";
	$result2 = mysqli_query($mysqli,$query2);
	while ($row=mysqli_fetch_row($result2)){
		$newprods[$i][2] = $row[1];
		$newprods[$i][3] = $row[3];
	}

	echo $newprods[$i][0];
	echo "//";
	echo $newprods[$i][1];
	echo "//";
	echo $newprods[$i][2];
	echo "//";
	echo $newprods[$i][3];
	echo "//"; 

}



?>