<?php 
session_start();

$email = $_SESSION['email'];
$loginstatus = "loginstatus$email";
$emailcart = "cart$email";


$_SESSION["$loginstatus"] = "";

unset($_SESSION['email']);

unset($_SESSION["$emailcart"]);

echo $_SESSION["$loginstatus"];

session_destroy();

//header("Location: index.html");
die();

?>