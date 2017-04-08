
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct =0;
var questions = [
	["Which of the following is the most powerful type of computer?", "Super–Micro", "Super Conductor", "Super Computer", "Megaframe", "C"],
	["Which of the following is NOT an operating system?", "MS Dos", "Unix","Window NT","Java","D"],
	["A device that converts digital signals to analog signals is", "A packet", "A modem","A block","None of the above","B"],
	["The computer that is not considered as a portable computer is", "Laptop Computer", "Mini Computer","Notebook Computer","None of the above","B"],
	["Which of the following is an example of non volatile memory?", "VLSI", "LSI","ROM","RAM","C"],
	["One byte is equivalent to", "4 bits", "8 bits","12 bits","32 bits","B"],
	["ROM is composed of", "Floppy Disks", "Magnetic Cores","Microprocessors","Photoelectric cells","D"],
	["What is the Administrative System of the Computer?", "Memory Unit", "Input Unit","Central Processing Unit","Control Unit","C"],
	["CD–ROM is a kind of", "Optical Disk", "Magnetic Disk","Magneto–Optical Disk","None of the above","A"],
	["The word length of a Computer is measured in", "bits", "bytes","millimetres","metres","B"]
		];

function _(x){
	return document.getElementById(x);
}
var login = "";
function verifyLogin(){
                    //alert("here");
                       var xhttp = new XMLHttpRequest();
                        xhttp.open("GET", "loginverify.php", false);
                        xhttp.send();
                        var status = xhttp.responseText;
                        //var status = "true";
                        //alert(status);
                        if (status == "customer"){
                                                
                        login = "true";
                         
                        } else if(status == "dealer"){
                         login = "true";

                        } else {
                         login = "false";
                    }
               }

function renderQuestion () {
	test = _("test");
	if(pos >= questions.length){
		
		var mark = correct*2 + (questions.length - correct)*-1;

		test.innerHTML="You Got "+correct+" of "+questions.length+" questions correct.And you got "+mark+" marks out of "+questions.length*2+" marks .Thank You for participating in our quiz!";
		_("test_status").innerHTML = "Quiz Completed!";
		
		if (login){
			var xhttp = new XMLHttpRequest();
            xhttp.open("GET", "addMarks.php?marks="+mark, false);
            xhttp.send();
		}
		return false;
	}
	
	_("test_status").innerHTML = "Question " + (pos+1)+" of "+questions.length;

	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	chD = questions[pos][4];

	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type= 'radio' name='choices' value='A'>&nbsp&nbsp"+chA+"<br>";
	test.innerHTML += "<input type= 'radio' name='choices' value='B'>&nbsp&nbsp"+chB+"<br>";
	test.innerHTML += "<input type= 'radio' name='choices' value='C'>&nbsp&nbsp"+chC+"<br>";
	test.innerHTML += "<input type= 'radio' name='choices' value='D'>&nbsp&nbsp"+chD+"<br><br>";
	test.innerHTML += "<button class='btn btn-primary btn-lg outline2'onClick='checkAnswer()'>Next »</button>";
}

function checkAnswer() {
	
	choices = document.getElementsByName("choices");
	
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}


	if (choice == questions[pos][5]){
		correct++;
		
	}

	pos++;
	renderQuestion ();
}

window.addEventListener("load",renderQuestion, false);