<?php
session_start();





$fname = $_POST["fName"];
$lname = $_POST["lName"];
$email = $_POST["email"];
$pass = $_POST["password"];
$phoneNo = $_POST["phoneNo"];
$address = $_POST["add"];
$post =$_POST["post"];
$dateOfBirth = $_POST["DOBYear"].$_POST["DOBMonth"].$_POST["DOBDay"];
$loginstatus = "loginstatus$email";





if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

	?>

	<script>if(!alert("The email you entered is not valid")) document.location = 'formpage.html';</script>

	<?php


}









  
$age = (date("md", date("U", mktime(0, 0, 0, $_POST["DOBMonth"], $_POST["DOBDay"], $_POST["DOBYear"]))) > date("md")
    ? ((date("Y") - $_POST["DOBYear"]) - 1)
    : (date("Y") - $_POST["DOBYear"]));
 
  
 
  
/*$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db2";*/

// Create connection
$conn = mysqli_connect("lepc.database.windows.net","saucecode","TheGoviya1234","db2");

// Check connection


if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$query = mysqli_query($conn, "SELECT * FROM  formData WHERE emailAdd = '".$email."'");
if(mysqli_num_rows($query) > 0){
	?>
	<script>if(!alert("The email you entered is already in use! please use a different one")) document.location = 'formpage.html';</script>
	<?php
	
	exit();
}



$sql = "INSERT INTO formData (age,Address,dateOfBirth,Phone_No,emailAdd,Postal_Code,firstName,lastName,loginPassword) 
VALUES ( $age,'$address',$dateOfBirth,$phoneNo, '$email',$post,'$fname','$lname','$pass')";
if (!(mysqli_query($conn, $sql))) {
    echo "Error : <br>" . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

if (!(isset($_SESSION['$loginstatus']))){
						$_SESSION['$loginstatus'] = "false";
					}

					$_SESSION['$loginstatus'] = "true";

if(!isset($_SESSION['email'])){
				$_SESSION['email'] = "";
	
	
	
}



$_SESSION['email'] = $email;

?>

<script>if(!alert("Registration Successfull!")) document.location = 'index.html';</script>


  


