//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyApgTDFL5aXLbtaaOibnJe8pHD31pkgSc0",
      authDomain: "kwitter2-45be3.firebaseapp.com",
      databaseURL: "https://kwitter2-45be3-default-rtdb.firebaseio.com",
      projectId: "kwitter2-45be3",
      storageBucket: "kwitter2-45be3.appspot.com",
      messagingSenderId: "885946483098",
      appId: "1:885946483098:web:87bd6f547a19b658367a23"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);  
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
