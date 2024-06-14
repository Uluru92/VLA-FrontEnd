$(document).ready(function () {

    let input_ = document.getElementById("clave");
    let titulo = document.getElementById("titulo")

    input_.addEventListener("input", function () {
        let input_long = parseInt(input_.value.length);
        if (input_long < 6) {
            titulo.classList.add("weak")
            titulo.classList.remove("medium", "strong")
        }
        else if (6 <= input_long && input_long <= 10) {
            titulo.classList.add("medium")
            titulo.classList.remove("weak", "strong")
        }
        else if (input_long > 10) {
            titulo.classList.add("strong")
            titulo.classList.remove("weak", "medium")
        }
        }
    )
})