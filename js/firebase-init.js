// Initialize Firebase
var config = {
  apiKey: "AIzaSyBriqtdp51FhdytXVrIhgSehVBDaHktsVU",
  authDomain: "android-masters-2017.firebaseapp.com",
  databaseURL: "https://android-masters-2017.firebaseio.com",
  projectId: "android-masters-2017",
  storageBucket: "android-masters-2017.appspot.com",
  messagingSenderId: "1034349517228"
};

firebase.initializeApp(config);
var db = firebase.firestore();
firebase.firestore().enablePersistence()
.then(function() {
    // Initialize Cloud Firestore through firebase
    var db = firebase.firestore();
})
.catch(function(err) {
    if (err.code == 'failed-precondition') {
      console.log("OFFLINE FAILED");
    } else if (err.code == 'unimplemented') {
      console.log("OFFLINE NOT AVIALABLE");
    }
});

// ------------------------------------------------------------------------------------ //

var connectedRef = firebase.database().ref(".info/connected");
connectedRef.on("value", function(snap) {
  if (snap.val() === true) {
    console.log("----Connected to Firebase----");
  }else{

  }
});
