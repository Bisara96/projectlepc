<?php 

$name = $_POST['name'];
$email = "Email : ".$_POST['email'];
$message = "Message : ".$_POST['message'];
$rate = "Rating  : ".$_POST['star']." stars";
$name2 = "Name : $name";


$printFile = "$name2".PHP_EOL."$email".PHP_EOL."$message".PHP_EOL."$rate".PHP_EOL;

$array  = array($name,$email,$message,$rate);
$myfile = fopen("Messages/$name.txt", "a") or die("Unable to open file!");
fwrite($myfile, $printFile."\n");
fclose($myfile);

header('Location: contactus.html');
exit();

?>