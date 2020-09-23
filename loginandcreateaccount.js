// JavaScript Document
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyASiG3jcUW7IWRhuUcUT4IvhJUfPtF6YiQ",
    authDomain: "emmergencyapps.firebaseapp.com",
    databaseURL: "https://emmergencyapps.firebaseio.com",
    projectId: "emmergencyapps",
    storageBucket: "emmergencyapps.appspot.com",
    messagingSenderId: "1088774519389",
    appId: "1:1088774519389:web:a57f65aefd95ad4921abb4",
    measurementId: "G-XNGCR5B2YQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  //------------------------------------------Progress Bar-------------------------------------------------------//
   /*
	  <div id="myProgress">
<div id="myBar"></div>
</div>
*/
  var i =0;
  function move(){
	   if(i==0){
		  i=1;
		  var elem=document.getElementById("myBar");
		  var width = 1;
		  var id = setInterval(frame,10);
		  function frame(){
			  if(width >=100){
				  clearInterval(id);
				  i=0;
			  }
			  else{
				  width++;
				  elem.style.width = width + "%";
			  }
		  }
	  }
  }
 //-------------------------------------Ready Data----------------------------------------------------------//
  var emailV, passwordV,fullnameV, ConfirmV, StatusV
  
  function Details(){	  
	    fullnameV = document.getElementById("name").value;
		email = document.getElementById("email").value;
  		 password = document.getElementById("password").value;
  		 ConfirmV = document.getElementById("confirm").value;
  		 StatusV = document.getElementById("status").value;
}

//---------------------------------------Inser Process-------------------------------------------------------//
document.getElementById("createAccount").onclick = function(){
	var name = document.forms["myForm1"]["name"].value;
		var emailV = document.forms["myForm1"]["email"].value;
		var passwordV = document.forms["myForm1"]["password"].value;
		var Confirm = document.forms["myForm1"]["confirm"].value;
		var status = document.forms["myForm1"]["status"].value;
		
	if(name ==""){
		alert("Please Enter your Name!");
		document.forms["myForm1"]["name"].focus();
		return false;
	}
	if(emailV==""){
		alert("Please Enter your email address");
		document.forms["myForm1"]["email"].focus();
		return false;
	}
	if(passwordV ==""){
		alert("Please Enter your password!");
		document.forms["myForm1"]["password"].focus();
		return false;
	}
	
	if(Confirm ==""){
		alert("Please Retype your Password!");
		document.forms["myForm1"]["confirm"].focus();
		return false;
		
	}
	if(passwordV != Confirm){
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
	Details();
	firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
		
        
	  
		firebase.database().ref('AdminAgent/' ).push({
		Fullname:fullnameV,
		Email_Address:email,
		Password: password,
		Status:StatusV
		});	
		alert("User Create Successfully" + "        Username: "+ email + "       Password: " + password);
		//window.location.href = "index.html";
	});
	}
	
}
document.getElementById("login").onclick = function(){
var email = document.getElementById("loginemail").value;
var password = document.getElementById("loginpassword").value;
var status = document.getElementById("loginstatus").value;
if(email ==""){
	alert("Email is required!");
	document.getElementById("loginemail").focus();
	return false;
}
else if(password == ""){
	alert("Password is required!");
	document.getElementById("loginpassword").focus();
	return false;
}
else{
	move();
	var user = firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
	if(user){
		if(status == "Select Here"){
			alert("Select What you are login as!");
		}
		else if(status =="Admin"){
			
			
					window.location.href = "admin_dashboard.html";
				
		}
		else if(status == "Agent"){
			
					window.location.href = "AgentDashboard.html";
		}
			
			
		
	}
	else{
		alert("You are not an eligible member, please sign up");
	}
}) .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else if (errorCode == 'auth/email-already-in-use') {
                alert('The email is already taken.');
            } else if (errorCode == 'auth/weak-password') {
                alert('Password is weak');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
  }
}
