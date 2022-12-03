function form_one_to_form_two() {
    document.getElementById("form_second_reserve").classList.remove("d-none");
    document.getElementById("form_second_reserve").classList.add("d-flex");
    document.getElementById("form_first_reserve").classList.remove("d-flex");
    document.getElementById("form_first_reserve").classList.add("d-none");
}

function back_to_form_first() {
    document.getElementById("form_second_reserve").classList.remove("d-flex");
    document.getElementById("form_second_reserve").classList.add("d-none");

    document.getElementById("form_first_reserve").classList.remove("d-none");
    document.getElementById("form_first_reserve").classList.add("d-flex");
    location.reload();
}

function check_form_first_reserve() {
    var select = document.getElementById("select").value;

    if (document.getElementById("members").value > 0 && select == 1 || select == 2) {
        document.getElementById("btn_form_first_reserve").classList.remove("btn-secondary");
        document.getElementById("btn_form_first_reserve").classList.add("btn-success");
        document.getElementById("btn_form_first_reserve").removeAttribute("disabled");

    } else {
        document.getElementById("btn_form_first_reserve").setAttribute("disabled", "0");
        document.getElementById("btn_form_first_reserve").classList.remove("btn-success");
        document.getElementById("btn_form_first_reserve").classList.add("btn-secondary");
    }
}

function check_form_second_reserve() {
    if (document.getElementById("fname_lname").value.length > 3 && document.getElementById("phonenumber_1").value.length > 8 && document.getElementById("phonenumber_2").value.length > 8) {
        document.getElementById("btn_form_second_reserve").classList.remove("btn-secondary");
        document.getElementById("btn_form_second_reserve").classList.add("btn-success");
        document.getElementById("btn_form_second_reserve").removeAttribute("disabled");

    } else {
        document.getElementById("btn_form_second_reserve").setAttribute("disabled", "0");
        document.getElementById("btn_form_second_reserve").classList.remove("btn-success");
        document.getElementById("btn_form_second_reserve").classList.add("btn-secondary");
    }
}

function btn_send_form_first_reserve() {

    document.getElementById("loading").classList.remove("d-none");
    document.getElementById("form_first_reserve").classList.remove("border-form-reserve");

    document.getElementById("btn_form_first_reserve").setAttribute("disabled", "0");
    document.getElementById("btn_form_first_reserve").classList.remove("btn-success");
    document.getElementById("btn_form_first_reserve").classList.add("btn-secondary");

    var year = document.getElementById("persianDatapicker").value.slice(0, -6);
    var month = document.getElementById("persianDatapicker").value.slice(5, -3);
    var day = document.getElementById("persianDatapicker").value.slice(-2);
    var data = [
        year,
        month,
        day
    ]

    $.ajax({
        type: 'POST',
        url: 'https://reqres.in/api/users',
        data: {
            members: $('#members').val(),
            Meal: $('#select').val(),
            data: data
        },
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: function(data) {
            form_one_to_form_two();
            document.getElementById("price").innerText = data.responseJSON.price;
        },
        error: function(data) {
            back_to_form_first();
            alert(data.responseJSON.error);
        }
    });
}



function btn_send_form_second_reserve() {
    document.getElementById("loading_form-2").classList.remove("d-none");
    document.getElementById("form_second_reserve").classList.remove("border-form-reserve");

    document.getElementById("btn_form_second_reserve").setAttribute("disabled", "0");
    document.getElementById("btn_form_second_reserve").classList.remove("btn-success");
    document.getElementById("btn_form_second_reserve").classList.add("btn-secondary");

    $.ajax({
        type: 'POST',
        url: 'https://reqres.in/api/users',
        data: {
            fname_lname: $('#fname_lname').val(),
            phonenumber1: $('#phonenumber_1').val(),
            phonenumber2: $('#phonenumber_2').val()
        },
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                // 'CSRFToken': getCSRFTokenValue()
        },
        success: function() {
            location.window = "google.com";
        },
        error: function(data) {
            alert(data.responseJSON.error);

            document.getElementById("form_first_reserve").classList.remove("d-flex");
            document.getElementById("form_first_reserve").classList.add("d-none");
        }
    })
}