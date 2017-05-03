<?php

SESSION_START();

$email = $_POST["email"];
$loginstatus = "loginstatus$email";
$password = $_POST["password"];



$mysqli = new mysqli("localhost", "root", "", "db2");
/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
$query = "SELECT * FROM formData WHERE emailAdd = '$email'";
$result = mysqli_query($mysqli, $query);
$count = mysqli_num_rows($result);


if(!isset($_SESSION['email'])){
				$_SESSION['email'] = "";
	
	
	
}



$_SESSION['email'] = $email;



if ($count > 0) {

    while ($row=mysqli_fetch_row($result)) {
		if($row[8]== $password){
			?>
			<script>if(!alert("Login Successfull!")) document.location = 'index.html';</script>
			<?php 
					if (!(isset($_SESSION["$loginstatus"]))){
						$_SESSION["$loginstatus"] = "false";
					}

					$_SESSION["$loginstatus"] = "true";



			exit();
	
		} else {
			?>
			
			<script>if(!alert("Incorrect password!")) document.location = 'loginpage.html';</script>
			<?php
			exit();
		}
    }

    $result->close();
} else if ($count == 0){
		?>
			
		<script>if(!alert("Email not found! please register.")) document.location = 'formpage.html';</script>
		<?php
}

/* close connection */
$mysqli->close();











	?>



