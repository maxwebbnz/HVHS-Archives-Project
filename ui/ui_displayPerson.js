let displayPeople = {
    load: function(_profile, _field) {
        console.log(_profile)
        let name = _profile.FIRST + " " + _profile.SURNAME
        console.log(name)
        let yearsattend = _profile.YEARATHVHS
        let title = _profile.TITLE
        let notes = _profile.NOTES
        let knf = _field.charAt(0).toUpperCase() + _field.slice(1);

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

        Swal.fire({
            position: 'top',
            icon: 'info',
            title: 'Loading',
            showConfirmButton: false,
        })

    }
}


let count = 0;
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
                    $('#closeView').modal('show')
                    count = 0;

                    swal.close()

                } else if (imgUrl.contentUrl.includes(_query)) {
                    document.getElementById('profileImage').src = imgUrl.contentUrl
                    $('#closeView').modal('show')
                    count = 0;
                    swal.close()

                } else if (imgUrl.name.includes(_knf)) {
                    document.getElementById('profileImage').src = imgUrl.contentUrl
                    $('#closeView').modal('show')
                    count = 0;

                    swal.close()

                } else if (count > 5) {
                    console.log('Tried 5 times, could not find photo')
                    document.getElementById('profileImage').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png"
                    $('#closeView').modal('show')
                    count = 0;
                    swal.close()

                } else {
                    count = count + 1
                    apiHandler.setImage(_query, _knf)
                }

            }
        };

        xhr.send();
    }
}