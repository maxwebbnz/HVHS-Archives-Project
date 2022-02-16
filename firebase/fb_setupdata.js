fb.checkDataExists = function() {
    var db = firebase.database().ref('homePageConfig/')
    db.once('value', (snapshot) => {
        if (snapshot.val() == null) {
            console.log("NO DATA")
            fb.setupTables()
        } else {
            console.log("DATA")

        }
    });
}

fb.setupTables = function() {
    firebase.database().ref('homePageConfig/').update({
        displayedUser: {
            "name": "Max Webb"
        },
        news: {
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
}