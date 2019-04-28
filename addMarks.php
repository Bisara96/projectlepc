<?php
session_start();


if (!isset($_SESSION['email'])) {
    exit();
}
$email = $_SESSION['email'];
$marks = $_REQUEST['marks'];

//$marks = 10;

$mysqli = new mysqli("localhost", "root", "", "db2");
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$query = "INSERT INTO quiz (email,marks) 
VALUES ('$email',$marks)";
if (!mysqli_query($mysqli, $query)) {
    echo "failed to add!";
} else {
    echo "added";
}