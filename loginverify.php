<?php
session_start();

$email = $_SESSION['email'];
$loginstatus = "loginstatus$email";

echo $_SESSION["$loginstatus"];


?>