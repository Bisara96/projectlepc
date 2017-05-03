
<html>
	<head>
		<h1>This is a poll</h1>
	</head>
	<body>
	<p>Was this helpfull?</p>
	<div class = "answers">
		
		<label for = "userSel">your answer....</label>
		<input type = "radio" id = "userSel" name = "userSel" value = "yes" onclick = "displaypoll();">YES</input>
		<input type = "radio" id = "userSel" name = "userSel" value = "no" onclick = "displaypoll();">NO</input>
		
		
		</div>
			
		
		
	</body>
</html>

<script>
	function displaypoll(){
		var y = document.getElementsByClassName("answers");
		var x = 0;
		for (x = 0;x < y.length;x++ ){
			y[x].style.display = "none";
		}
		//<?php include 'pollphp.php' ?>

	}

</script>
