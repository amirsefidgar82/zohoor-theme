function send_form_reserve() {
    // document.getElementById("form_seceend_reserve").setAttribute("")

    document.getElementById("form_second_reserve").classList.remove("d-none");
    document.getElementById("form_second_reserve").classList.add("d-flex");

    document.getElementById("form_first_reserve").classList.remove("d-flex");
    document.getElementById("form_first_reserve").classList.add("d-none");

}

function back_to_form_first() {
    // document.getElementById("back_to_form_first")

    document.getElementById("form_second_reserve").classList.remove("d-flex");
    document.getElementById("form_second_reserve").classList.add("d-none");

    document.getElementById("form_first_reserve").classList.remove("d-none");
    document.getElementById("form_first_reserve").classList.add("d-flex");
}

// document.getElementById("form_seceend_reserve").removeAttribute("disabled");
// document.getElementById("form_seceend_reserve").setAttribute("d-inline", "0");



// form_first_reserve