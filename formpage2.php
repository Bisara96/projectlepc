<html>
<head>
<link href ="style1.css" rel = "stylesheet">

</head>
<body>
<form id="myForm" action="form_page.php" onsubmit="return validateForm()" method="post" >
<div>
 
    <label for="fName">First Name</label>
    <input type="text" id="fName" name="fName" >
	<br>
    <label for="lName">Last Name</label>
    <input type="text" id="lName" name="lName">
	<br>
	

	
	<label for="DOBMonth">Date of Birth</label>
	<select name="DOBMonth" style="width:10%" >
	
	<option> - Month - </option>
	<option value="1">January</option>
	<option value="2">Febuary</option>
	<option value="3">March</option>
	<option value="4">April</option>
	<option value="5">May</option>
	<option value="6">June</option>
	<option value="7">July</option>
	<option value="8">August</option>
	<option value="9">September</option>
	<option value="10">October</option>
	<option value="11">November</option>
	<option value="12">December</option>
	</select>

	<select name="DOBDay" style="width:10%">
	<option> - Day - </option>
	<option value="1">1</option>
	<option value="2">2</option>
	<option value="3">3</option>
	<option value="4">4</option>
	<option value="5">5</option>
	<option value="6">6</option>
	<option value="7">7</option>
	<option value="8">8</option>
	<option value="9">9</option>
	<option value="10">10</option>
	<option value="11">11</option>
	<option value="12">12</option>
	<option value="13">13</option>
	<option value="14">14</option>
	<option value="15">15</option>
	<option value="16">16</option>
	<option value="17">17</option>
	<option value="18">18</option>
	<option value="19">19</option>
	<option value="20">20</option>
	<option value="21">21</option>
	<option value="22">22</option>
	<option value="23">23</option>
	<option value="24">24</option>
	<option value="25">25</option>
	<option value="26">26</option>
	<option value="27">27</option>
	<option value="28">28</option>
	<option value="29">29</option>
	<option value="30">30</option>
	<option value="31">31</option>
	</select>

	<select name="DOBYear" style="width:10%">
	<option> - Year - </option>
	  <option value="2016">2016</option>
	  <option value="2015">2015</option>
	  <option value="2014">2014</option>
	  <option value="2013">2013</option>
	  <option value="2012">2012</option>
      <option value="2011">2011</option>
      <option value="2010">2010</option>
      <option value="2009">2009</option>
      <option value="2008">2008</option>
      <option value="2007">2007</option>
      <option value="2006">2006</option>
      <option value="2005">2005</option>
      <option value="2004">2004</option>
      <option value="2003">2003</option>
      <option value="2002">2002</option>
      <option value="2001">2001</option>
      <option value="2000">2000</option>
      <option value="1999">1999</option>
      <option value="1998">1998</option>
      <option value="1997">1997</option>
      <option value="1996">1996</option>
      <option value="1995">1995</option>
      <option value="1994">1994</option>
      <option value="1993">1993</option>
      <option value="1992">1992</option>
      <option value="1991">1991</option>
      <option value="1990">1990</option>
      <option value="1989">1989</option>
      <option value="1988">1988</option>
      <option value="1987">1987</option>
      <option value="1986">1986</option>
      <option value="1985">1985</option>
      <option value="1984">1984</option>
      <option value="1983">1983</option>
      <option value="1982">1982</option>
      <option value="1981">1981</option>
      <option value="1980">1980</option>
      <option value="1979">1979</option>
      <option value="1978">1978</option>
      <option value="1977">1977</option>
      <option value="1976">1976</option>
      <option value="1975">1975</option>
      <option value="1974">1974</option>
      <option value="1973">1973</option>
      <option value="1972">1972</option>
      <option value="1971">1971</option>
      <option value="1970">1970</option>
      <option value="1969">1969</option>
      <option value="1968">1968</option>
      <option value="1967">1967</option>
      <option value="1966">1966</option>
      <option value="1965">1965</option>
      <option value="1964">1964</option>
      <option value="1963">1963</option>
      <option value="1962">1962</option>
      <option value="1961">1961</option>
      <option value="1960">1960</option>
      <option value="1959">1959</option>
      <option value="1958">1958</option>
      <option value="1957">1957</option>
      <option value="1956">1956</option>
      <option value="1955">1955</option>
      <option value="1954">1954</option>
      <option value="1953">1953</option>
      <option value="1952">1952</option>
      <option value="1951">1951</option>
      <option value="1950">1950</option>
      <option value="1949">1949</option>
      <option value="1948">1948</option>
      <option value="1947">1947</option>
      <option value="1946">1946</option>
      <option value="1945">1945</option>
      <option value="1944">1944</option>
      <option value="1943">1943</option>
      <option value="1942">1942</option>
      <option value="1941">1941</option>
      <option value="1940">1940</option>
      <option value="1939">1939</option>
      <option value="1938">1938</option>
      <option value="1937">1937</option>
      <option value="1936">1936</option>
      <option value="1935">1935</option>
      <option value="1934">1934</option>
      <option value="1933">1933</option>
      <option value="1932">1932</option>
      <option value="1931">1931</option>
      <option value="1930">1930</option>
      <option value="1929">1929</option>
      <option value="1928">1928</option>
      <option value="1927">1927</option>
      <option value="1926">1926</option>
      <option value="1925">1925</option>
      <option value="1924">1924</option>
      <option value="1923">1923</option>
      <option value="1922">1922</option>
      <option value="1921">1921</option>
      <option value="1920">1920</option>
      <option value="1919">1919</option>
      <option value="1918">1918</option>
      <option value="1917">1917</option>
      <option value="1916">1916</option>
	
	</select>
	
	
	<br>
	<label for="email">Email</label>
    <input type="text" id="email" name="email">
	<br>
	<label for="password">Password</label>
    <input type="password" id="password" name="password" style="width:20%">
	<br>
	<label for="cPassword">Confirm Password</label>
    <input type="password" id="cPassword" name="cPassword" style="width:20%">
	<br>
	<label for="height">Height</label>
	<input type="number" id="height" name="height" min="0" step="0.01" >
	*in metres
	<br>	
	<label for="weight">Weight</label>
	<input type="number" id="weight" name="weight" min="0" step="0.01" >
	*in kilograms
	<br>
    <label for="blood">Blood Group</label>
    <select id="blood" name="blood" style="width:7%" value="";>
      <option value="opositive">O+</option>
      <option value="onegative">O-</option>
      <option value="apositive">A+</option>
	  <option value="anegative">A-</option>
	  <option value="bpositive">B+</option>
	  <option value="bnegative">B-</option>
	  <option value="abpositive">AB+</option>
	  <option value="abnegative">AB-</option>
    </select>
	
	<br>
	<br>
	<input type="button" value="Reset" onclick="resetbtnfunction()">
    <input type="submit" value="Register" >
 
</div>
</form>


<?php

include 'db_config.php';

$email = "email";

$mysqli = new mysqli($db_host, $db_user, $db_password, $db_name);
/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$query = "SELECT emailAdd FROM userInfo WHERE emailAdd = '$email'";
$result = mysqli_query($mysqli, $query);
$count = mysqli_num_rows($result);
echo $count;
?>

<script>

var count = '<?php echo $count; ?>';
alert(count);

</script>

<script>



function resetbtnfunction() {
    document.getElementById("myForm").reset();
}

function validateForm() {

    var x = document.forms["myForm"]["fName"].value;
	var y = document.forms["myForm"]["lName"].value;
	var z = document.forms["myForm"]["DOBMonth"].value;
	var a = document.forms["myForm"]["DOBDay"].value;
	var b = document.forms["myForm"]["DOBYear"].value;
	var c = document.forms["myForm"]["email"].value;
	var d = document.forms["myForm"]["height"].value;
	var e = document.forms["myForm"]["weight"].value;
	var f = document.forms["myForm"]["password"].value;
	var g = document.forms["myForm"]["cPassword"].value;
	
    if (x == null || x == "") {
        alert("First Name must be filled out");
        return false;
    } else if (y == null || y == "") {
        alert("Last Name must be filled out");
        return false;
    } else if (z == null || z == "- Month -") {
        alert("Month must be filled out");
        return false;
    } else if (a == null || a == "- Day -") {
        alert("Day must be filled out");
        return false;
    } else if (b == null || b == "- Year -") {
        alert("Year must be filled out");
        return false;
    } else if (c == null || c == "") {
        alert("Email must be filled out");
        return false;
    } else if (d == null || d == "") {
        alert("Height must be filled out");
        return false;
    } else if (e == null || e == "") {
        alert("Weight must be filled out");
        return false;
    } else if (f == null || f == "") {
        alert("Please enter a password");
        return false;
    }  else if (g == null || g == "") {
        alert("Please confirm password");
        return false;
    } else if (f != g){
		alert("passwords do not match!");
		return false;
	} else if (count > 0){
		alert("Email already in the db!");
		return false;
	}
	
}
</script>

</body>
</html>