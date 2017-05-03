<?php session_start(); ?>
<html>
<head>
  <link rel = "stylesheet" href = "css/tableBootsrap.css">
  <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 
<link href ="style1.css" rel = "stylesheet"> 
  The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>LePc-View Sales</title>

 <!-- Bootstrap  <link href="style1.css" rel="stylesheet"> -->

 <link href='logincss.css' rel='stylesheet' type='text/css'>

    <link href="css/bootstrap.min.css" rel="stylesheet">
     <link href="css/custom.css" rel="stylesheet">
     <link href="css/customAddProduct.css" rel="stylesheet">
     

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
<!--
    <style> 
input[type=text],[type=password] {
    
    padding: 12px 20px;
    margin: 8px;
    border-radius: 8px;
     border: none;
    background-color:rgb(69,73,84);
    color: rgb(169,169,169)
}

select {
    padding: 16px 20px;
    border: none;
    border-radius: 8px;
    background-color:rgb(69,73,84);
}

form {
    width: 450px;
    margin: 0 auto;
    padding: 16px 20px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color:rgb(36,37,42);

}

input[type=submit] {
  border-radius: 4px;
  border: none;
  background-color:rgb(17,74,96);
  width:80%;
  height:5%; 
}

 #resetbtn {
  border-radius: 4px;
  border: none;
  background-color:rgb(46,49,56);
  align-content: right;
  width:30%;
  height:5%; 

 }

#signupnow {
  background-color:rgb(69,73,84);
  width: 450px;
  height: 65px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

input[type=submit],[type=button]:hover {
  color: rgb(36,37,42);
}

.button:hover {
    color: rgb(36,37,42) !important;
}

.btn-2:hover: {
  bottom: auto; 
  top: 0;
  width: 70%;
}

</style>



<style>
input[type=text] {
    width: 50% !important;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
 #pType {
    width: 1%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
input[type=number] {
 width: 10% !important;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box; }
}

input[type=submit],[type=button] {
    width: 25%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>
-->
</head>
<body>

<script>
       function onlogin(){
                alert ("clicked");
                  }

      function onloginbtn() {
        //alert ("bbbbbbbbb");
      
    var loginBox = document.getElementById("login-box");

    //Fade in the Popup and add close button
    document.getElementById("login-box").style.display = "block";
    //$(loginBox).fadeIn(300);
    
    //Set the center alignment padding + border
    
    var popMargTop = ($(loginBox).height() + 24) / 2; 
    var popMargLeft = ($(loginBox).width() + 24) / 2; 

    document.getElementById("login-box").style.marginTop = "-100px";
    document.getElementById("login-box").style.marginLeft = "-150px";
    
    /*
    $(loginBox).css({ 
      'margin-top' : -popMargTop,
      'margin-left' : -popMargLeft
    });
    */
    // Add the mask to body
    
    $('body').append('<div id="mask"></div>');
    $('#mask').fadeIn(300);
    
    
    
  }

  function closebtnfunc(){
    var x = document.getElementsByClassName("login-popup");
    var i = 0;
    for (i = 0;i < x.length;i++){
      x[i].style.display = "none";
      $('#mask').fadeOut(300);
      $('#mask').remove();
    }
  }


  function onsigninbtn(){
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "loginhome_php.php?em="+email+"&ps="+password, false);
    xhttp.send();
    var status = xhttp.responseText;
    if (status == "Successfull"){
      alert ("Login Success!!");
      closebtnfunc();
      verifyLogin();
    // document.location = 'index.html';
     exit();
    } else if (status == "failed"){
      alert ("Invalid login credentials! Try again");
    } else {
      alert ("Email not found!Please try again");
    }
                        
     

  }

  function onlogoutbtn(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "signout.php", false);
    xhttp.send();
    verifyLogin();
  }
  
  
    </script>




<div id="login-box" class="login-popup">
        <a href="#" class="close"><img src="close_pop.png" class="btn_close" onclick="closebtnfunc()" title="Close Window" alt="Close" /></a>
          <form method="post" class="signin" action="#">

                <fieldset class="textbox" align="center">
              <label class="username">
                <span align="left">Email</span>
                <input id="username" name="username" value="" type="text" autocomplete="on" placeholder="Username" style = "width:100%;">
                </label>
                
                <label class="password">
                <span align="left">Password</span>
                <input id="password" name="password" value="" type="password" placeholder="Password" style = "width:100%;">
                </label>
                
                <button class="submit button" type="button" onclick="onsigninbtn()" style = "width:100%;">Log in</button><br><br>
                 <p>Not registered yet? <a href= "formpage.html">Sign up</a> now</p>
                
               
                
                </fieldset>
          </form>
    </div>



 <nav class="navbar transparent navbar-inverse navbar-static-top" style="background-color:black;"><br><br>
          <div class="container-fluid" >
              <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mainNavBar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <div class="navbar-brand" href="#">
                <a href = "index.html" ><img id="brand-image" alt="Le PC"  src="logopng.png"/></a>
              </div>
            </div>
          <div>
          <!--Menu Items-->
            <div class="collapse navbar-collapse" id="mainNavBar">
              <ul class="nav navbar-nav">
                <li ><a href="index.html">HOME</a></li>
                <li ><a href="products.html">BUILD YOUR PC</a></li>
                

          <!--drop down menu-->

                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">PRODUCTS<span class="carrot"></span></a>
                  <ul class="dropdown-menu">
                    <li ><a href="products3.html#tips">CUSTOM PCs</a></li>
                    <li class="divider"></li>
                    <li ><a href="products3.html#macs">Mac</a></li>
                    <li ><a href="#">Laptops</a></li>
                    <li ><a href="products3.html#bpcs">Branded PCs</a></li>
                    
                  </ul>
                </li>
                <li ><a href="contactus.html">CONTACT US</a></li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                    <li><a class="btn btn-primary btn-lg outline" href="formpage.html" role="button" id = "signup" style="display:none">SIGN UP</a></p>
                      <li><a class="btn btn-primary btn-lg outline" href="cartBill1.php" role="button" id = "mycart" style="display:none">MY CART</a></p>
                      <li><a class="btn btn-primary btn-lg outline" href="viewdproducts.php" role="button" id = "myprod">My Products</a></p></li>
                      <li><a class="btn btn-primary btn-lg outline" href="viewSales.php" role="button" id = "mycus" >My Sales</a></p></li>
                    <li id = "loginbtn" role = "button" onclick="onloginbtn()" style="display:none"><a>LOG IN</a></li>
                    <!-- <li><p>
        <button type="button" class="btn btn-default btn-sm" id = "logoutbtn" role = "button" style="display:none" onclick="onlogoutbtn()">
          <span class="glyphicon glyphicon-off"></span><div id = "name"></div></button>
      </p></li> -->
      <li> <a id = "logoutbtn" class="btn btn-primary btn-lg outline" role = "button" onclick="onloginbtn()" style="display:none"><span class="glyphicon glyphicon-off"></span> &nbsp<span id = "name"></span></a></li>
                </ul>
                </div>
          </div>

          </div>
          <br><br>
        </nav>
                 <script>
                  
                  verifyLogin();

                  function verifyLogin(){
                       var xhttp = new XMLHttpRequest();
                        xhttp.open("GET", "loginverify.php", false);
                        xhttp.send();
                        var status = xhttp.responseText;
                        //var status = "true";
                        //alert (status);
                        if (status == "true"){
                                                
                        // document.getElementById("loginbtn").style.display = "none";
                         //document.getElementById("logoutbtn").style.display = "block";
                         //document.getElementById("signup").style.display = "none";
                         //document.getElementById("mycart").style.display = "block";
                    } else {
                         //document.getElementById("loginbtn").style.display = "block";
                         //document.getElementById("logoutbtn").style.display = "none";
                         //document.getElementById("signup").style.display = "block";
                         //document.getElementById("mycart").style.display = "none";
                    }
               }

               function onlogoutbtn(){
                alert ("b1");
               var xhttp = new XMLHttpRequest();
                xhttp.open("GET", "signout.php", false);
                xhttp.send();
                alert ("b2");
                verifyLogin();
              }

               
                </script>

               <script>
                function g() {
                var fileName = document.getElementById("image").value;
                fileName = fileName.replace(/^.*\\/, "");
                  
                  document.getElementById("Fname").innerHTML=fileName;
                }
                </script>

    
<?php 

$email = $_SESSION['email'];
$dealerName = "";
$totalIncome = 0;

$mysqli = new mysqli("localhost","root","","db2");
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$query = "select firstName, lastName , prodName, prodUnitPrice,  qty,prodType
from products,formdata,dealers,log
where dealers.dealerName = log.dealerName and log.prodID = products.prodID and log.customerEmail = formdata.emailAdd and dealers.dealerEmail = 'buwanekainc@gmail.com'
order by prodType";

$result = mysqli_query($mysqli,$query);
$count = mysqli_num_rows($result);




$prodrow = array();


$products = array();


$i = 0;
while (($prodrow=mysqli_fetch_row($result)) && ($i < $count)){
  $prodrow[4]++;
  $totalIncome = $totalIncome +$prodrow[4]*$prodrow[3];
  $products[$i++] = array($prodrow[0],$prodrow[1],$prodrow[2],$prodrow[5],$prodrow[4],$prodrow[3],$prodrow[4]*$prodrow[3]);
 
}
?>
<html>
<body>
<div class="table-responsive" >
<table class="table" bgcolor="#FFFFFF">
      <thead>
        <tr>
          <th colspan = '2'>Customer Name</th>
          <th>Product Name </th>
          <th>Product Type</th>
          <th>Qty </th>
          <th>Unit price </th>
          <th>Total price </th>
        </tr>
      </thead>
      
        
    
      <tbody>

      <?php 


        if ($count == 0){
        //echo "You havent sold any items yet!";
        ?> <tr><td colspan="5">You havent sold any items yet!</td></tr>
        <?php
        exit();
      }
        
        echo "Your Sales : <br>";

        $x = 0;
        $c = 0;
        for ($c = 0;$c < $count;$c++){
        ?> <tr> <?php

        
          for ($x = 0;$x < sizeof($products[0]);$x++){


                ?>
                <td><?php echo $products[$c][$x]; ?></td><?php
                
    
                
    
                            } ?>
                </tr><?php echo "\n";

                
                      }
        

        ?>

     </tbody>
     <tfoot>
        <tr>
          <td colspan="6" >Your total income : </td>
          <td  align = "right"><?php echo "$$totalIncome"; ?></td>
        </tr>
      </tfoot>
    </table>
    </div>






 



























  <div class= "site-footer">

  <div class= "container footerinfo">

    

    <div class= "row-fluid">
      

      <div class="col-sm-4">
        
          <h4>Social Media</h4>


       
        
        <a href = "#facebook">Facebook</a><br>
        <a href = "#instagram">Instagram</a><br>
        <a href = "#google+">Google+</a><br>
        
       
        
      
      </div>

      <div class="col-sm-4">
        <h4>Products</h4>

        

        <a href = "#products-mac">Macs</a><br>
        <a href = "#products-custom">Branded PCs</a><br>
        <a href = "#build your - pc">Custom PCs</a><br>

        

        
        
      </div>

      <div class="col-sm-4">
      <h4>Contact Details</h4>

      

        Email - socod@gmail.com<br>
        Mobile - 0776383151<br>
        Address - No.88,Perera Road, Colombo 05.<br>

        
      
      </div>



    </div>

  </div>


  </div>

  <div class="copyright">
  © 2016 Team SauceCode

  </div>






<script>

function loadTable(){

}



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
	var d = document.forms["myForm"]["phoneNo"].value;
	var e = document.forms["myForm"]["add"].value;
	var h = document.forms["myForm"]["post"].value;
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
        alert("Phone No must be filled out");
        return false;
    } else if (e == null || e == "") {
        alert("Address must be filled out");
        return false;
    }else if (h == null || h == "") {
        alert("Postal Code must be filled out");
        return false;
    }  else if (f == null || f == "") {
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