<?php

include 'db_config.php';

$pId = $_REQUEST["pid"];
//$pId = "m0001";
$pName = "";
$pPrice = "";
$pSrc = "";
$pDescr = "";

$mysqli = new mysqli($db_host, $db_user, $db_password, $db_name);
/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$query = "SELECT * FROM pc WHERE id = '$pId'";
$result = mysqli_query($mysqli, $query);
$count = mysqli_num_rows($result);

if ($count != 0) {
    while ($array = mysqli_fetch_row($result)) {
        $pName = $array[1];
        $pDescr = $array[2];
        $pSrc = $array[3];
        $pPrice = $array[4];
    }
}
echo $pName;echo"//";echo $pDescr; echo "//";echo $pSrc; echo"//";echo $pPrice;