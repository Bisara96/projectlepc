<?php 
SESSION_START();

$conn = mysqli_connect("sqlsrv:server = tcp:lepc.database.windows.net,1433","saucecode","TheGoviya1234","db2");

// Check connection


if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else 
echo "connected!";

// PHP Data Objects(PDO) Sample Code:
/*try {
    $conn = new PDO("sqlsrv:server = tcp:lepc.database.windows.net,1433; Database = db2", "saucecode", "TheGoviya1234");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {
    print("Error connecting to SQL Server.");
    die(print_r($e));
}
*/

 ?>