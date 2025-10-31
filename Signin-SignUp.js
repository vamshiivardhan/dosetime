// setting up firebase
const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyD2gwTZzpRqJxi818uayUpcwTz_ry_j9HM",
    authDomain: "authentication-1de46.firebaseapp.com",
    projectId: "authentication-1de46",
    storageBucket: "authentication-1de46.firebasestorage.app",
    messagingSenderId: "863031272001",
    appId: "1:863031272001:web:aa365a54665aa567ff5cc0",
    measurementId: "G-FMTLX04JLE"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// this function is for signing up a new user only

const signUp = () =>{
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    window.location.href = "index.html";
    console.log(result);
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
    // ..
  });
}


// this function is for the siging in if already a user only

const signIn = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    window.location.href = "index.html";
    console.log(result);
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });
}