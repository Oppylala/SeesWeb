// JavaScript Document

document.querySelector('.img-btn').addEventListener('click', function()
{
	document.querySelector('.cont').classList.toggle('s-signup')
}
);


 

function validateLogin(){
		var email = document.getElementById('loginemail').value;
		var password = document.getElementById('loginpassword').value;
		
				
	if(email==""){
		alert("Please Enter your email address");
		document.getElementById('loginemail').focus();
		return false;
	}
	if(password ==""){
		alert("Please Enter your password!");
		document.getElementById('loginpassword').focus();
		return false;
	}
	else{
		return false;
	}
}

function validateCreate(){
		
		var name = document.forms["myForm1"]["name"].value;
		var email = document.forms["myForm1"]["email"].value;
		var password = document.forms["myForm1"]["password"].value;
		var Confirm = document.forms["myForm1"]["confirm"].value;
		var status = document.forms["myForm1"]["status"].value;
		
	if(name ==""){
		alert("Please Enter your Name!");
		document.forms["myForm1"]["name"].focus();
		return false;
	}
	if(email==""){
		alert("Please Enter your email address");
		document.forms["myForm1"]["email"].focus();
		return false;
	}
	if(password ==""){
		alert("Please Enter your password!");
		document.forms["myForm1"]["password"].focus();
		return false;
	}
	
	if(Confirm ==""){
		alert("Please Retype your Password!");
		document.forms["myForm1"]["confirm"].focus();
		return false;
		
	}
	if(password != Confirm){
		alert("Your passwords are not corresponding!");
		document.forms["myForm1"]["password"].focus();
		return false;
		
	}
	if(status =="Select Here"){
		alert("Please select what you want Create account!");
		return false;
		document.forms["myForm1"]["status"].focus();
	}
	
	else{
		firebase.document().ref("Users").set({
			
		});
	}
}
function createValidate(){
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var confirm = document.getElementById('confirm').value;
	var status = document.getElementById('status').value;
	
	if(name ==""){
		alert("Your name must not be empty");
		document.getElementById('name').focus();
		return false;
		
	}
	else if(email == ""){
		alert("Your email is required !");
		document.getElementById('email').focus();
		return false;
	}
	else if(password == ""){
		alert("Your password is required !");
		document.getElementById('password').focus();
		return false;
	}
	else if(confirm == ""){
		alert("Confirm your password ");
		document.getElementById('confirm').focus();
		return false;
	}
	if(password != Confirm){
		alert("Your passwords are not corresponding!");
		document.getElementById('confirm').focus();
		return false;
		
	}
	else if(status == "Select Here"){
		alert("Are you Admin or Agent?");
		document.getElementById('status').focus();
		return false;
	}
	else{
	}
}


 