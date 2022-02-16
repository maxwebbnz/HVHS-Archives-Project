let authStatus = false;

fb.auth = function(_provider) {
    console.log("Logging in user")
    firebase.auth().onAuthStateChanged(function(_user) {
        if (_user) {
            fb.initUserData(_user.uid, _user)
            console.log("auth.login | Authentication Process Successful" + _user.displayName)
            authStatus = true;
        } else if (!_user) {
            if (_provider == 'google') {
                firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                    .then(function() {
                        provider = new firebase.auth.GoogleAuthProvider();
                        console.log("fb_auth | Starting Authentication process")
                        return firebase.auth().signInWithPopup(provider).then(function(result) {
                                var token = result.credential.accessToken;
                                let fb_result = result.user;
                                fb.initUserData(fb_result.uid, fb_result)
                                console.log("auth.login | Authentication Process Successful" + fb_result)
                                authStatus = true;
                                // $('#landingPage').fadeOut();
                                // alert.authSuccess();
                            })
                            .catch(function(error) {
                                // Handle Errors here.
                                var errorCode = error.code;
                                var errorMessage = error.message;
                                console.log("fb_auth | Error: " + errorMessage)
                                    // alert.error("We couldn't log you in, " + error)

                            });
                    })
            }
        }
    });
}

fb.initUserData = function(_uid, _userObj) {
    console.log(_uid)
    console.log(_userObj)
        // check if user is got a record
    var db = firebase.database().ref('users/' + _uid)
    db.once('value', (snapshot) => {
        if (snapshot.val() == null) {
            console.log("NO DATA")
                // fb.setupTables()
            firebase.database().ref('users/' + _uid).update({
                "name": _userObj.displayName,
                "email": _userObj.email,
                "role": 'user',
                posts: {
                    "post1": {
                        "content": "THIS IS A NEWS POST"
                    }
                }
            }, (error) => {
                if (error) {
                    alert("We couldn't save some data, Error:" + error)
                } else {
                    console.log(error)
                }
            });
        } else {

        }
    });
}