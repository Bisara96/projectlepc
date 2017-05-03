<?php session_start(); ?>
<html>
<head>
	<link rel = "stylesheet" href = "css/tableBootsrap.css">


  <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>LePc-My Cart</title>

 <!-- Bootstrap -->
 
    <link href="css/bootstrap.min.css" rel="stylesheet">
     <link href="css/custom.css" rel="stylesheet">
     <link href='https://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css'>
   
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>


</head>
<body>


    	<div class="navbar-wrapper" >

    		<nav class="navbar transparent navbar-inverse navbar-static-top" >
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
        						<li><a class="btn btn-primary btn-lg outline" href="formpage.html" role="button" id = "signup">SIGN UP</a></p>
                      <li><a class="btn btn-primary btn-lg outline" href="cartBill1.php" role="button" id = "mycart" style="display:none">MY CART</a></p>      &nbsp&nbsp
        						
     	 					</ul>

     	 					

						</div>
					</div>

    			</div>
    		</nav>
    	</div>

     

<!-- slider -->

    	<div id ="theCarousel" class="carousel slide" data-ride="carousel">

    		<ol class = "carousel-indicators">
    			<li data-target = "#theCarousel" data-slide-to="0" class = "active"></li>
    			<li data-target = "#theCarousel" data-slide-to="1"></li>
    			<li data-target = "#theCarousel" data-slide-to="2"></li>
    			<li data-target = "#theCarousel" data-slide-to="3"></li>
			</ol>

			<div class = "carousel-inner">

				<div class = "item active">
					<img src = "sliderImages/macpro.jpg" alt="Mac" class="img-responsive">
					<div class="container">
            			<div class="carousel-caption">
             			<h1>Mac Pro</h1>
              			<p>Get Your Mac Pro Today!</p>
             				 <p><a class="btn btn-primary btn-lg outline" href="#" role="button">Products</a></p>
           			 </div>
         		 </div>
				</div>

				<div class = "item ">
					<img src = "sliderImages/custompc.jpg" alt="GTX" class="img-responsive">
						<div class="container">
           					<div class="carousel-caption">
              					<h1>Build Your Own Beast!</h1>
              						<p>Build your own PC with our PC builder which has an updated item list.</p>
              						<p><a class="btn btn-primary btn-lg outline" href="products.html" role="button">Build Your PC</a></p>
           					 </div>
         				 </div>
				</div>

				<div class = "item ">
					<img src = "sliderImages/custompci7.jpg" alt="i7" class="img-responsive">
						<div class="container">
            				<div class="carousel-caption">
              					<h1>Need anything?</h1>
              					<p>Whatever you're looking for is here! Check the Items Page!</p>
              					<p><a class="btn btn-primary btn-lg outline" href="#" role="button">Items</a></p>
           					</div>
         		 </div>
				</div>

				<div class = "item ">
					<img src = "sliderImages/laptops.jpg" alt="predator" class="img-responsive">
					<div class="container">
            				<div class="carousel-caption">
             	 				<h1>Laptops?</h1>
             	 					<p>Check out the laptop page for branded laptops which includes both Macs and PCs.</p>
              						<p><a class="btn btn-primary btn-lg outline" href="formpage.html" role="button">Sign up today</a></p>
            				</div>
          			</div>
				</div>


			</div>

    	</div>
     

<div class="table-responsive">
<table class="table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Dealer Name</th>
          <th>Product Type </th>
          <th>Qty</th>
          <th>Price </th>
        </tr>
      </thead>
      
        
	  
      <tbody>

			<?php 
			$total = 0;

 
				$email = $_SESSION['email'];

        if(!isset($_SESSION["$email"])){
        $_SESSION["$email"] = array();
  
}

//$cartSize = sizeof($_SESSION["$email"]);
//echo $cartSize;
        
        if (sizeof($_SESSION["$email"]) == 0){
        echo "You dont have any items in your cart!";
        ?> <tr><td colspan="5">You dont have any items in your cart! Please start <a href= "products.html">purchasing</a> or start <a href = "products.html">building your own pc now!</a></td></tr>
        <?php
        exit();
      }
				
				echo "Customer $email 's Bill : <br>";

				$x = 0;
				$c = 0;
				for ($c = 0;$c < sizeof($_SESSION["$email"]);$c++){
				?> <tr> <?php

				
					for ($x = 0;$x < sizeof($_SESSION["$email"][0]);$x++){


								?>
								<td><?php if(isset($_SESSION["$email"][$c])){ echo $_SESSION["$email"][$c][$x];} ?></td>
								<?php
		
								
		
														}
								?> </tr><?php echo "\n";

								
											}
				
for ($z = 0;$z < sizeof($_SESSION["$email"]);$z++){
					//echo $_SESSION["$email"][$z][3];
					$result = substr($_SESSION["$email"][$z][4], 1);
					//echo $result;
					$total = $total + $result;
				}

				?>

     </tbody>
     <tfoot>
      	<tr>
      		<td colspan="4" >Total : </td>
      		<td  align = "right"><?php echo "$$total"; ?></td>
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
    </body>
    </html>