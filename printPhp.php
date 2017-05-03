<?php 
session_start();

$email = $_SESSION['email'];
$loginstatus = "loginstatus$email";

$_SESSION['$loginstatus'] = "";


?>