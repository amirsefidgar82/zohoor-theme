function send_ponenumber() {

    if (document.getElementById("validation-phonenumber").value != 11) {
        document.getElementById("validation-phonenumber").style.border = "2px solid red";
        document.getElementById("label_input_phonenumber").style.color = "red";
        document.getElementById("label_titel_input_phonenumber").style.color = "red";
        document.getElementById("label_input_phonenumber").innerHTML = "لطفا شماره موبایل خود را بصورت درست وارد کنید.";
    }
    let phonenumber = {};
    phonenumber.phone = document.getElementById("validation-phonenumber").value;

    let request = new XMLHttpRequest();
    request.open("post", "https://reqres.in/api/users")
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            alert(this.responseText);
            document.getElementById("btn-hide").click();
        } else if (this.readyState == 4 && this.status == 400) {
            // document.getElementById("btnSend").classList.remove = "bg-secondary";
            // document.getElementById("btnSend").classList.add = "bg-danger";
            document.getElementById("validation-phonenumber").style.border = "2px solid red";
            document.getElementById("label_input_phonenumber").style.color = "red";
            document.getElementById("label_titel_input_phonenumber").style.color = "red";
            document.getElementById("label_input_phonenumber").innerHTML = "لطفا شماره موبایل خود را بصورت درست وارد کنید.";


        }


    }

    //جنس دیتای ارسالی
    request.setRequestHeader("content-type", "application/json");

    request.send(JSON.stringify(phonenumber));
}


// function send_ponenumber() {

//     let phonenumber = {};
//     phonenumber.phone = document.getElementById("validation-phonenumber").value;

//     let request = new XMLHttpRequest();
//     request.open("post", "https://reqres.in/api/register")
//     request.onreadystatechange = function() {
//         if (this.status == 201 || this.status == 201) {
//             alert(this.responseText);
//             document.getElementById("btn-hide").click();



//     }

//     //جنس دیتای ارسالی
//     request.setRequestHeader("content-type", "application/json");

//     request.send(JSON.stringify(phonenumber));
// }