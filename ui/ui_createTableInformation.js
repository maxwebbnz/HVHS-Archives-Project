function setupRow(_r) {
    let data = _r.data;
    console.log(data)
    checkSports()
    checkAcademic()
    checkArts()
    checkOther()

    function checkSports() {
        for (var i = 0; i < data.length; i++) {
            if (data[i].SPORTS == "") {
                console.log("nosport")
            } else {
                let rows = ""
                let surname = data[i].SURNAME
                let frname = data[i].FIRST
                let title = data[i].TITLE
                let sports = data[i].SPORTS
                let notes = data[i].NOTES

                rows += "<tr data-userId='" + i + "'><td>" + surname + "</td><td>" + frname + "</td><td>" + title + "</td><td>" + sports + "</td><td>" + notes + "</td></tr>";
                $(rows).appendTo("#sportsTable tbody");
            }

        }
    }

    function checkAcademic() {
        for (var i = 0; i < data.length; i++) {
            if (data[i].ACADEMIC == "") {
                console.log("noacamde")
            } else {
                let rows = ""
                let surname = data[i].SURNAME
                let frname = data[i].FIRST
                let title = data[i].TITLE
                let academic = data[i].ACADEMIC
                let notes = data[i].NOTES
                let dt = data[i]

                rows += "<tr data-userId='" + i + "'><td>" + surname + "</td><td>" + frname + "</td><td>" + title + "</td><td>" + academic + "</td><td>" + notes + "</td></tr>";
                $(rows).appendTo("#acamTable tbody");
            }

        }
    }

    function checkArts() {
        for (var i = 0; i < data.length; i++) {
            if (data[i].ARTS == "") {
                console.log("noacamde")
            } else {
                let rows = ""
                let surname = data[i].SURNAME
                let frname = data[i].FIRST
                let title = data[i].TITLE
                let arts = data[i].ARTS
                let notes = data[i].NOTES

                rows += "<tr data-userId='" + i + "'><td>" + surname + "</td><td>" + frname + "</td><td>" + title + "</td><td>" + arts + "</td><td>" + notes + "</td></tr>";
                $(rows).appendTo("#artsTable tbody");
            }

        }
    }

    function checkOther() {
        for (var i = 0; i < data.length; i++) {
            if (data[i].OTHER == "") {
                console.log("noacamde")
            } else {
                let rows = ""
                let surname = data[i].SURNAME
                let frname = data[i].FIRST
                let title = data[i].TITLE
                let other = data[i].OTHER
                let notes = data[i].NOTES

                rows += "<tr data-userId='" + i + "'><td>" + surname + "</td><td>" + frname + "</td><td>" + title + "</td><td>" + other + "</td><td>" + notes + "</td></tr>";
                $(rows).appendTo('#otherTable tbody')
            }

        }
    }

    $("#sportsTable tbody").on("click", "tr", function() {
        let posinarray = $(this).attr("data-userId")
        displayPeople.load(data[posinarray], "sports")
    });
    $("#acamTable tbody").on("click", "tr", function() {
        let posinarray = $(this).attr("data-userId")
        displayPeople.load(data[posinarray], "academic")
    });
    $("#artsTable tbody").on("click", "tr", function() {
        let posinarray = $(this).attr("data-userId")
        displayPeople.load(data[posinarray], "arts")

        console.log(data[posinarray])
    });
    $("#otherTable tbody").on("click", "tr", function() {
        let posinarray = $(this).attr("data-userId")
        displayPeople.load(data[posinarray], " ")

        // displayPeople.load(data[posinarray])
        console.log(data[posinarray])
    });
}