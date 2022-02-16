let currentPage = 'viewByArea'

let events = {
    showInfo: function() {
        $('#closeView').modal('hide')
        document.getElementById(currentPage).style.display = 'none'
        document.getElementById('info').style.display = 'block'

    }
}