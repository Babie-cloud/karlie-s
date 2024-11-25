const firebaseConfig = {
    apiKey: "AIzaSyBK8IyD7jVXIlzrWivcmDdHcM1KmB_vqXM",
    authDomain: "blanchisserie-c051d.firebaseapp.com",
    databaseURL: "https://blanchisserie-c051d-default-rtdb.firebaseio.com",
    projectId: "blanchisserie-c051d",
    storageBucket: "blanchisserie-c051d.firebasestorage.app",
    messagingSenderId: "192260959420",
    appId: "1:192260959420:web:e32476a6aa6cbfd81474b9"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
 var BlanchisserieDB = firebase.database().ref('Blanchisserie')
document.getElementsById('Blanchisserie').addEventListener("submit", submitform);

function submitform(e){
    e.preventDefault();

    var Nom = getElementVal('Nom');
    var Prenom = getElementVal('Prenom')
    var email = getElementVal('email')
    var telephone = getElementVal('telephone')

    saveMessages(Nom, Prenom, email, telephone);
    )
}

    const saveMessages = (Nom, Prenom, email, telephone) => {
        var newBlanchisserie = BlanchisserieDB.push();
        newBlanchisserie.set({
        Nom : Nom ,
        Prenom : Prenom ,
        email : email ,
        telephone : telephone ,
    });
    };




const getElementVal = (id) => {
    return document.getElementById(id).Value;
}