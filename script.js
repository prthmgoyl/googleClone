const firebaseConfig = {
    apiKey: "AIzaSyBuY0FJeGUZav4MK4kv8_Ok4sDb_2McY_M",
    authDomain: "clone-fce8c.firebaseapp.com",
    projectId: "clone-fce8c",
    storageBucket: "clone-fce8c.appspot.com",
    messagingSenderId: "554136031261",
    appId: "1:554136031261:web:a340356c329787410436f4",

  };

firebase.initializeApp(firebaseConfig);

var messageRef = firebase.database().ref('messages');

document.getElementById("form").addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    var query = getInputVal("textbox")

    saveMessage(query);


}

function getInputVal(id){
   return document.getElementById(id).value;
}

function saveMessage(query){
    var newMessageRef = messageRef.push()
    newMessageRef.set({
       query:query
    });
}