<?php 
session_start();

$email = $_SESSION['email'];

$mysqli = new mysqli("lepc.database.windows.net","saucecode","TheGoviya1234","db2");
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}


$query = "SELECT * FROM  quiz WHERE email = '$email'";
$result = mysqli_query($mysqli,$query);
$count = mysqli_num_rows($result);
//echo "$count";
if($count > 0){
	echo "true";
} else {
	echo "false";
}

?>