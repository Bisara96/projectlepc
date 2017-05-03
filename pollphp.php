<?php 
SESSION_START();

if (!isset($_SESSION['votes'])){
	$_SESSION['votes'] = "";
}
if (!isset($_SESSION['votes']['yes'])){
	$_SESSION['votes']['yes'] = 0;
}

if (!isset($_SESSION['votes']['no'])){
	$_SESSION['votes']['no'] = 0;
}

$_SESSION['votes']['yes'];
$_SESSION['votes']['no'];



$userS = $_REQUEST['user'];

if ($userS == "Mac") {
	$_SESSION['votes']['yes'] = $_SESSION['votes']['yes'] + 1;
} else {
	$_SESSION['votes']['no'] = $_SESSION['votes']['no'] + 1;
}

$countYes = $_SESSION['votes']['yes'];
$countNo = $_SESSION['votes']['no'];
echo "You selected : $userS <br>";
echo "Mac : $countYes<br>";
echo "Dell  : $countNo";


?>