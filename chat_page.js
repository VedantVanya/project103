//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyAFhG0IY0PhN3uQX8XA5Y4DpdVOZU_lLFY",
    authDomain: "kwitter-d79df.firebaseapp.com",
    databaseURL: "https://kwitter-d79df-default-rtdb.firebaseio.com",
    projectId: "kwitter-d79df",
    storageBucket: "kwitter-d79df.appspot.com",
    messagingSenderId: "341531653884",
    appId: "1:341531653884:web:e3d6bede408260bde34979"
  };
  
  // Initialize Firebase
fiebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value="";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
      window.location = "index.html" ;
}