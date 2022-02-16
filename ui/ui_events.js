let currentPage = 'home'

let ui_events = {
    display: function(_page) {
        $('#closeView').modal('hide')
        document.getElementById(currentPage).style.display = 'none'
        document.getElementById(_page).style.display = 'block'
        currentPage = _page

    }
}