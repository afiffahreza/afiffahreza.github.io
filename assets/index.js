function showA() {
    document.getElementById("dropA").classList.toggle("show");
}

function showB() {
    document.getElementById("dropB").classList.toggle("show");
}

function showC() {
    document.getElementById("dropC").classList.toggle("show");
}

function showD() {
    document.getElementById("dropD").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.showlinks')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}