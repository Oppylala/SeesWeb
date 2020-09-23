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
  
 
firebase.database().ref().child('AdminAgent/' ).on('value', function(snapshot)
{
if (snapshot.exists()) {
var content = '';
snapshot.forEach(function(data){
var val = data.val();
content += '<tr>';
content += '<td>' + val.Email_Address + '</td>';
content += '<td>' + val.Fullname + '</td>';
content += '<td>' + val.Password + '</td>';
content += '<td>' + val.Status + '</td>';

});
$('#svclist').append(content);
}
});
  
  
  
  
  
  
  
  
  
  
  
  
  /*
  
    var database = firebase.database();
    database.ref('AdminAgent').once('value', function(snapshot){
        if(snapshot.exists()){
            var content = '';
            snapshot.forEach(function(data){
                var val = data.val();
                content += '<tr>';
                content += '<td>' + val.Email_Address + '</td>';
                content += '<td>' + val.ImageUpload + '</td>';
                content += '<td>' + val.ReportDetails + '</td>';
                content += '<td>' + val.Status + '</td>';
                content += '</tr>';
            });
            $('#ex-table').append(content);
        }
    });

 
 












NUMBER OF USERS

firebase.database().ref('data').on('value',(snap)=>{
    var totalRecord =  snap.numChildren();
    console.log("Total Record : "+totalRecord);
  });  
  function displayUsers(){
   firebase.database().ref('user').once('value',   function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
	  
      // ...
    });
  });
  }*/