<?php
session_start();

$email = $_SESSION['email'];
$name = "";

$mysqli = new mysqli("localhost", "root", "", "db2");
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

// $query1 = "SELECT * FROM dealers WHERE dealerEmail = '$email'";
// $result1 = mysqli_query($mysqli,$query1);
// $count1 = mysqli_num_rows($result1);

// if ($count1 != 0){
// while ($row = mysqli_fetch_row($result1)){
// 	$name = $row[0];
// 	echo $name;
// 	exit();
    
// 	}

// }

$query2 = "SELECT * FROM formdata WHERE emailAdd = '$email'";
$result2 = mysqli_query($mysqli, $query2);
$count2 = mysqli_num_rows($result2);

if ($count2 != 0) {
    while ($row = mysqli_fetch_row($result2)) {
        $name = "$row[6] $row[7]";
        echo "$name";
        exit();
    }
}