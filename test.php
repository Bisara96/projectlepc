<?php 
SESSION_START();

$conn = mysqli_connect("lepc.database.windows.net","saucecode","TheGoviya1234","db2");

// Check connection


if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else 
echo "connected!";


 ?>