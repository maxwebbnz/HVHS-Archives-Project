let adminUI = {
    addPerson: function() {}
}

$(document).ready(function() {
    $('#addPersonModal').modal('show')

})

let selectedUser = false;

function searchForUser() {
    let input = document.getElementById('firstNameEnter').value
    if (input == "") {
        console.log("Nothing typed")
        $('#firstNameEnter').effect("shake");
    } else {
        let checkFirst = datas.filter(o => o.FIRST === input);
        console.log(checkFirst)
        for (var i = 0; i < checkFirst.length; i++) {
            //creates option tag
            jQuery('<option/>', {
                value: JSON.stringify(checkFirst[i]),
                html: checkFirst[i].FIRST + " " + checkFirst[i].SURNAME,
            }).appendTo('#dropdown select'); //appends to select if parent div has id dropdown
        }
        document.getElementById('submitandsearch').innerHTML = "Select";
        selectedUser = true;

    }
}
let btn = document.getElementById('submitandsearch');

$(document).on('click', '#submitandsearch', function() {
    let selector = document.getElementById('selector')
    console.log(selector.value)
    console.log(selectedUser)
    if (selector == "null") {
        console.log("Hold on buddy!")
    } else {
        console.log(JSON.parse(selector.value))
    }
})