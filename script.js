const firebaseConfig = {
    apiKey: "AIzaSyDREMNISyygJJLyNW9nDvrxnpCUus7zegQ",
    authDomain: "clone-fc6b2.firebaseapp.com",
    projectId: "clone-fc6b2",
    storageBucket: "clone-fc6b2.appspot.com",
    messagingSenderId: "554041088263",
    appId: "1:554041088263:web:a62db0115517496fe18da2",
    measurementId: "G-7W23V7WJCT"
  };


firebase.initializeApp(firebaseConfig);

var messageRef = firebase.database().ref("messages");

document.getElementById("form").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    var query = getInputVal("textbox")

    saveMessage(query);
    
    document.querySelector('.alert').style.display  = 'block';

    setTimeout(function(){
        document.querySelector('.alert').style.display  = 'none';
    },3000);
    document.getElementById("form").reset();


}

function getInputVal(id){
   return document.getElementById(id).value;
}

function saveMessage(query){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
       query: query
    });
}