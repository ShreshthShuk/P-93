var firebaseConfig = {

    apiKey: "AIzaSyA6sp5AAH9nW1sox8LsnH5igDjMw9R7LXc",

    authDomain: "classtest-f9806.firebaseapp.com",
    
    databaseURL: "https://classtest-f9806-default-rtdb.firebaseio.com",

    projectId: "classtest-f9806",

    storageBucket: "classtest-f9806.appspot.com",

    messagingSenderId: "286514706665",

    appId: "1:286514706665:web:1e38f29ed572b401251878"

  };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome" + user_name + " !";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({

        purpose: "adding room name"

    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
    
}

function getData()
{
  firebase.database().ref("/").on('value',

  function(snapshot) 

  {

    document.getElementById("output").innerHTML = "";

    snapshot.forEach(function(childSnapshot) 

    {

      childKey  = childSnapshot.key;

       Room_names = childKey;

       console.log("room name - " + Room_names);

       row = "<div class='room_name' id="+ Room_names +" onclick = 'redirectToRoomName(this.id)'>#" +

       Room_names + "</div><hr>";

       document.getElementById("output").innerHTML += row;

      });

    });

    }

getData();

function redirectToRoomName(name)
{

  console.log(name);

  localStorage.setItem("room_name", name);

  window.location = "kwitter_page.html";

}
