<?php

SESSION_START();

$email = $_REQUEST["em"];
$loginstatus = "loginstatus$email";
$password = $_REQUEST["ps"];

// try {
//     $conn = new PDO("sqlsrv:server = tcp:localhost,3600; Database = db2", "root", "");
//     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// } catch (PDOException $e) {
//     print("Error connecting to SQL Server.");
//     die(print_r($e));
// }

$conn = mysqli_connect("localhost", "root", "", "db2");
// check connection
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
$query = "SELECT * FROM formData WHERE emailAdd = '$email'";
//$result = mysqli_query($mysqli, $query);
$result = $conn->query($query);
$count = mysqli_num_rows($result);


if (!isset($_SESSION['email'])) {
    $_SESSION['email'] = "";
}



$_SESSION['email'] = $email;



if ($count > 0) {
    while ($row=mysqli_fetch_row($result)) {
        if ($row[8]== $password) {
            echo "customer";
            if (!(isset($_SESSION["$loginstatus"]))) {
                $_SESSION["$loginstatus"] = "false";
            }

            $_SESSION["$loginstatus"] = "customer";



            exit();
        } else {
            echo "failed";
            
            exit();
        }
    }

    $result->close();
} elseif ($count == 0) {
    echo "regfail";
}

/* close connection */
$mysqli->close();