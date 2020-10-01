// JavaScript Document
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
alert("You are welcome to this platform");
  firebase.auth().onAuthStateChange(function(user){
      if(user){
          database.ref().child('/AdminAgent/'+ user.uid).on('value',function(snapshot){
              document.getElementById("username").innerText = "welcome" + snapshot.val().Fullname;
          });
      }else{
          alert("User not found");
      }
  });