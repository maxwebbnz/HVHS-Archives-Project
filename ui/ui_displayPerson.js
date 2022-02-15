let displayPeople = {
    load: function(_profile) {
        console.log(_profile)
        let name = _profile.FIRST + " " + _profile.SURNAME
        console.log(name)
        let yearsattend = _profile.YEARATHVHS
        let title = _profile.TITLE
        let notes = _profile.NOTES
        let nameHTML = document.getElementById('name')
        let attendedHTML = document.getElementById('attended')
        let knfHTML = document.getElementById('knownfor')
        let cHTML = document.getElementById('contents')

        nameHTML.innerHTML = name;
        attendedHTML.innerHTML = yearsattend;
        cHTML.innerHTML = notes;


    }
}

let mock = {
    ACADEMIC: "",
    ARTS: "",
    FIRST: "David",
    NOTES: "1992",
    OTHER: "",
    SPORTS: "Mountainbiking",
    SURNAME: "Abbott",
    TITLE: "",
    YEARATHVHS: "1977 - 1980",
}


$(document).ready(function() {
    displayPeople.load(mock)
});