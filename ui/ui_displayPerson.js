let displayPeople = {
    load: function(_profile) {
        console.log(_profile)
        let name = _profile.FIRST + " " + _profile.SURNAME
        console.log(name)
        let yearsattend = _profile.YEARATHVHS
        let title = _profile.TITLE
        let notes = _profile.NOTES
        let knf = _profile.KNF
        let nameHTML = document.getElementById('name')
        let titleHTML = document.getElementById('title')
        let attendedHTML = document.getElementById('attended')
        let knfHTML = document.getElementById('knownfor')
        let cHTML = document.getElementById('contents')

        nameHTML.innerHTML = name;
        attendedHTML.innerHTML = yearsattend;
        cHTML.innerHTML = notes;
        titleHTML.innerHTML = title
        knfHTML.innerHTML = knf
        apiHandler.setImage(name, knf)
    }
}

let mock = {
    ACADEMIC: "",
    ARTS: "",
    FIRST: "Janet Ann",
    NOTES: "1992",
    OTHER: "",
    SPORTS: "Fox",
    SURNAME: "Fox",
    TITLE: "Sir",
    KNF: "Principal",
    YEARATHVHS: "1977 - 1980",
}

$(document).ready(function() {
    displayPeople.load(mock)
});

let apiHandler = {
    setImage: function(_query, _knf) {
        let imgUrl;
        var url = "https://api.bing.microsoft.com/v7.0/images/search?q=" + _query + " " + _knf + " nz";

        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.setRequestHeader("Ocp-Apim-Subscription-Key", "d3626fecbca34f5b91a86ea45b4060e1");

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                var jsonResponse = JSON.parse(xhr.responseText);
                imgUrl = jsonResponse.value[0]
                    // imgResponse = xhr.responseText.contentUrl
                console.log(jsonResponse)
                console.log(imgUrl.name)
                if (imgUrl.name.includes(_query)) {
                    document.getElementById('profileImage').src = imgUrl.contentUrl
                } else if (imgUrl.contentUrl.includes(_query)) {
                    document.getElementById('profileImage').src = imgUrl.contentUrl
                } else if (imgUrl.name.includes(_knf)) {
                    document.getElementById('profileImage').src = imgUrl.contentUrl
                } else {
                    apiHandler.setImage(_query, _knf)
                }

            }
        };

        xhr.send();
    }
}