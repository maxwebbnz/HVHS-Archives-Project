let fb = {}

fb.init = function() {
    const firebaseConfig = {
        apiKey: "AIzaSyB5UUkZpURMvMubvT8hicHtSxWsUgO1VwI",
        authDomain: "hvhs-notabelalumni.firebaseapp.com",
        projectId: "hvhs-notabelalumni",
        storageBucket: "hvhs-notabelalumni.appspot.com",
        messagingSenderId: "331229942281",
        appId: "1:331229942281:web:8ee9c7e356a936f7265ed8",
        measurementId: "G-HPXWLV131H"
    };

    firebase.initializeApp(firebaseConfig);

}

$(document).ready(function() {
    fb.init()
    fb.checkDataExists()
    console.log("Firebase ready!");
});