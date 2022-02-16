// let datas;
function datainit() {
    for (i = 0; i < datas.length; i++) {
        let d = datas
        if (d[i].SPORTS.length > 1) {
            d[i].knf = "sport"
        } else if (d[i].ACADEMIC.length > 1) {
            d[i].knf = "academic"

        } else if (d[i].ARTS.length > 1) {
            d[i].knf = "arts"

        } else if (d[i].OTHER.length > 1) {
            d[i].knf = "other"

        }
    }
}

function searchData(_r) {
    let found = false
    datas = _r.data;
    datainit()

    let data = _r.data
    let stringToSearch = "Andrews"
    let checkFirst = data.find(o => o.FIRST === stringToSearch);
    let checkSports = data.find(o => o.SPORTS === stringToSearch);
    let checkSurname = data.find(o => o.SURNAME === stringToSearch);
    let checkNotes = data.find(o => o.NOTES === stringToSearch);
    // let obj =

    console.log(checkFirst);
    console.log(checkSports);
    console.log(checkSurname);
    console.log(checkNotes);
}
$(document).on('click', '#searchForInfo', function() {
    let valueTaken = document.getElementById('searchbar').value
    console.log(valueTaken)
    let checkFirst = datas.filter(o => o.FIRST === valueTaken);
    let checkSports = datas.find(o => o.SPORTS === valueTaken);
    let checkSurname = datas.find(o => o.SURNAME === valueTaken);
    let checkNotes = datas.find(o => o.NOTES === valueTaken);
    let found = false;
    let foundObject;

    if (checkFirst == undefined) {
        console.log("UNDEFINED!")
    } else if (typeof checkFirst === 'object' && checkFirst !== null) {
        console.log(" NAME")
        foundObject = checkFirst
        found = true;
    }

    if (checkSports == undefined && !found) {
        console.log("No value in sports")
    } else if (found) {
        console.log('already found')
    } else if (typeof checkSports === 'object' && checkSports !== null) {
        console.log(" IN SPORTS")
        foundObject = checkSports
        found = true;

    }

    if (checkSurname == undefined && !found) {
        console.log("No value in surname")
    } else if (typeof checkSurname === 'object' && checkSurname !== null) {
        console.log("IN SURNAME")
        foundObject = checkSurname

        found = true;
    }


    if (checkNotes == undefined && !found) {
        console.log("NO VALUE AT ALL!")
    } else if (typeof checkNotes === 'object' && checkNotes !== null) {
        found = true;
        foundObject = checkNotes
    }

    if (typeof foundObject === 'object' && foundObject !== null) {
        displayPeople.load(foundObject, foundObject.knf)
    } else {
        alert("FOUND NO ONE")
    }

});