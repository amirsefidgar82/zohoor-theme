// send phone number to jango 09333333333 

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

    // add phonenumber to next modal to title phone number
    document.getElementById("form-code-titel-phone_number").innerText = $('#validation-phonenumber').val();

    // countdown time 
    countdown_timer();
}
// function countdown timer and you can checne his count down  countdown(minutes, seconds);
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
                    setTimeout(function() {
                        countdown(minutes - 1, 59);
                    }, 1000);

                }

            } // if seconds come to 0 chenge inner
            if (seconds < "0" && minutes == "0") {
                document.getElementById("p_sned_retern").classList.remove("d-none");
                document.getElementById("p_sned_retern").classList.add("d-inline");
                document.getElementById("p_sned_retern").style.cursor = "pointer";
                document.getElementById("wait_countdown_timer").classList.add("d-none");
            }
        };
        tick();
    } // you can checnge here
    countdown(1, 45);

}
// if you click to ارسال مجدد کد 
function sned_retern_sms() {
    send_ponenumber();
    document.getElementById("btn-hide").click();
    document.getElementById("p_sned_retern").classList.remove("d-inline");
    document.getElementById("p_sned_retern").classList.add("d-none");
    document.getElementById("wait_countdown_timer").classList.remove("d-none");
    countdown_timer();
}

// if click to button ورود i go you to without page
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

// it is for check input phone number to we import corrent kind number

function check_input_send_phonenumber() {
    let input_phonenumber = $('#validation-phonenumber').val();

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
}


function check_input_send_code() {
    let input_code = $('#import_code').val();
    if (input_code.length == 5) {
        document.getElementById("btn_send_code").classList.remove("btn-secondary");
        document.getElementById("btn_send_code").classList.add("btn-success");
        document.getElementById("btn_send_code").removeAttribute("disabled");
    }
}

//btn send
document.getElementById("btnSend").setAttribute("disabled", "0");
document.getElementById("btnSend").classList.remove("btn-success");
document.getElementById("btnSend").classList.add("btn-secondary");
// btn import code 
document.getElementById("btn_send_code").setAttribute("disabled", "0");
document.getElementById("btn_send_code").classList.remove("btn-success");
document.getElementById("btn_send_code").classList.add("btn-secondary");