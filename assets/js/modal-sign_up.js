function send_ponenumber() {
    $.ajax({
        type: 'POST',
        url: 'https://reqres.in/api/users',
        data: {
            phone: $('#validation-phonenumber').val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function() {
            document.getElementById("btn-hide").click();
        },
        error: function() {
            alert(Response);

        }
    });



    document.getElementById("form-code-titel-phone_number").innerText = $('#validation-phonenumber').val();
    countdown_timer();
}

function countdown_timer() {
    function countdown(minutes, seconds) {
        function tick() {
            var counter = document.getElementById("p_timer");
            counter.innerText =
                minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
            seconds--;

            if (seconds >= 0) {
                timeoutHandle = setTimeout(tick, 1000);
            } else {
                if (minutes >= 1) {
                    // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
                    setTimeout(function() {
                        countdown(minutes - 1, 59);
                    }, 1000);

                }

            }
            if (seconds < "0" && minutes == "0") {
                document.getElementById("p_sned_retern").classList.remove("d-none");
                document.getElementById("p_sned_retern").classList.add("d-inline,text-danger");
                document.getElementById("p_sned_retern").style.cursor = "pointer";
                document.getElementById("wait_countdown_timer").classList.add("d-none");
            }
        };
        tick();
    }
    countdown(1, 45);

}

function sned_retern_sms() {
    send_ponenumber();
    document.getElementById("btn-hide").click();
    document.getElementById("p_sned_retern").classList.remove("d-inline");
    document.getElementById("p_sned_retern").classList.add("d-none");
    document.getElementById("wait_countdown_timer").classList.remove("d-none");
    countdown_timer();
}

const send_code = () => {
    $.ajax({
        type: 'POST',
        url: 'https://reqres.in/api/users',
        data: {
            phone: $('#import_code').val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },

        success: function() {
            window.location = "http://google.com";
        },
        error: function(error) {
            alert(error);
        }


    });
}



const check_input = () => {
    let input_phonenumber = $('#validation-phonenumber').val();

    // console.log(input_phonenumber.charAt(0));

    if (input_phonenumber.length == 11 && input_phonenumber.charAt(0) == 0 && input_phonenumber.charAt(1) == 9) {
        document.getElementById("btnSend").classList.remove("btn-secondary");
        document.getElementById("btnSend").classList.add("btn-success");
        document.getElementById("btnSend").removeAttribute("disabled");


    } else if (input_phonenumber.length == 10 && input_phonenumber.charAt(0) == 9) {
        document.getElementById("btnSend").classList.remove("btn-secondary");
        document.getElementById("btnSend").classList.add("btn-success");
        document.getElementById("btnSend").removeAttribute("disabled");
    } else if (input_phonenumber.length == 12 && input_phonenumber.charAt(0) == 9 && input_phonenumber.charAt(1) == 8) {
        document.getElementById("btnSend").classList.remove("btn-secondary");
        document.getElementById("btnSend").classList.add("btn-success");
        document.getElementById("btnSend").removeAttribute("disabled");
    } else if (input_phonenumber.length == 0) {
        document.getElementById("btnSend").setAttribute("disabled", "0");
        document.getElementById("btnSend").classList.remove("btn-success");
        document.getElementById("btnSend").classList.add("btn-secondary");
    } else {
        document.getElementById("btnSend").setAttribute("disabled", "0");
        document.getElementById("btnSend").classList.remove("btn-success");
        document.getElementById("btnSend").classList.add("btn-secondary");

    }
    // else if()


}
document.getElementById("btnSend").setAttribute("disabled", "0");
document.getElementById("btnSend").classList.remove("btn-success");
document.getElementById("btnSend").classList.add("btn-secondary");