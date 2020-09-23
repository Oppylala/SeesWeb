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
  
  //--------------------------------------Get Details Ready----------------------------------//
  var emailV, uploadV, reportV, emailP, passwordP, phoneP;
  function ReadyDetails(){
	emailV = document.getElementById("reportemail").value;
	uploadV = document.getElementById("file").value;
	reportV = document.getElementById("reportdetails").value;
	DisFullname= document.getElementById("displayfullname").value;
	DisEmail = document.getElementById("displayemail").value;
	DisPassword = document.getElementById("displaypassword").value;
	DisStatus = document.getElementById("displaystatus").value;
	
  } 
  //--------------------------------------Insert Process--------------------------------------//
document.getElementById("sendReport").onclick = function(){
	ReadyDetails();
	firebase.database().ref('AgentReports/').push({
		Email_Address:emailV,
		ImageUpload:uploadV,
		ReportDetails:reportV
		});
		alert("Sent");
}

document.getElementById("select-user-btn").onclick = function(){
	ReadyDetails();
	if(DisEmail==""){
		alert("Email is required!");
	}
	else{
	firebase.database().ref('AdminAgent' + DisEmail).on('value', function(snapshot){
		if(snapshot.exists()) {
		document.getElementById("displayfullname").value = snapshot.val().Fullname;
		document.getElementById("displayemail").value = snapshot.val().EmailAddress;
		document.getElementById("displaypassword").value = snapshot.val().Password;
		document.getElementById("displaystatus").value = snapshot.val().Status;
		}
		});
}
}
  
  



