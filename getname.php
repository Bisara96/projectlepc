<?php 
session_start();
$email = $_SESSION['email'];

$fname = "";
$lname = "";

$mysqli = new mysqli("localhost", "root", "", "db2");
/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$query = "SELECT * FROM formdata WHERE emailAdd = '$email'";
$result = mysqli_query($mysqli, $query);
$count = mysqli_num_rows($result);


while ($row=mysqli_fetch_row($result)) {
$fname = $row[0];
$lname = $row[1];
}

$result->close();
$mysqli->close();


echo $fname;
echo " ";echo $lname;
echo "//";
echo $email;
?>