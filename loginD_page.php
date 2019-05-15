<?php
session_start();

include 'db_config.php';


$email = $_REQUEST["em"];
$loginstatus = "loginstatus$email";
$password = $_REQUEST["ps"];



$mysqli = new mysqli($db_host, $db_user, $db_password, $db_name);
/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
$query = "SELECT * FROM dealers WHERE dealerEmail = '$email'";
$result = mysqli_query($mysqli, $query);
$count = mysqli_num_rows($result);



if(!isset($_SESSION['email'])){
				$_SESSION['email'] = "";
	
	
	
}



$_SESSION['email'] = $email;



if ($count > 0) {

    while ($row=mysqli_fetch_row($result)) {
		if($row[2]== $password){
			 echo "dealer";
					if (!(isset($_SESSION["$loginstatus"]))){
						$_SESSION["$loginstatus"] = "false";
					}

					$_SESSION["$loginstatus"] = "dealer";



			exit();
	
		} else { echo "failed";
			
			exit();
		}
    }

    $result->close();
} else if ($count == 0){
		echo "regfail";
}

/* close connection */
$mysqli->close();











	?>



