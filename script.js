function changeView(){
    var signUpBox = document.getElementById("signUpBox");
    var signInBox = document.getElementById("signInBox");

    signUpBox.classList.toggle("d-none");
    signInBox.classList.toggle("d-none");
}

function signup(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var mobile = document.getElementById("mobile").value;
    var gender = document.getElementById("gender").value;

    var form = new FormData();
    form.append("fname", fname);
    form.append("lname", lname);
    form.append("email", email);
    form.append("password", password);
    form.append("mobile", mobile);
    form.append("gender", gender);


    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){

            var response = this.responseText;
            alert(response);
            if (response === "success"){
                document.getElementById("msg").innerHTML = "User Registration Successful";
                document.getElementById("msg").className = ("alert alert-success");
                document.getElementById("msgdiv").className = ("d-block");
                window.location.href = "home.php";
            }
            else{
                document.getElementById("msg").innerHTML = response;
                document.getElementById("msgdiv").className = ("d-block");
            }
        }
        // var data = JSON.parse(this.response);
        // if(data.status === 200){
        //     alert(data.message);
        // }else{
        //     alert(data.message);
        // }
    }
    request.open("POST", "signupprocess.php", true);
    request.send(form);
}


function signin(){

    var email = document.getElementById("email2").value;
    var password = document.getElementById("password2").value;
    var rememberme = document.getElementById("rememberme").checked;

    var form = new FormData();
    form.append("email", email);
    form.append("password", password);
    form.append("rememberme", rememberme);

    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            var response = this.responseText;
            if (response === "success"){
                document.getElementById("msg2").innerHTML = "User Login Successful";
                document.getElementById("msg2").className = ("alert alert-success");
                document.getElementById("msgdiv2").className = ("d-block");
                window.location.href = "home.php";
            }
            else{
                document.getElementById("msg2").innerHTML = response;
                document.getElementById("msgdiv2").className = ("d-block");
            }
        }
    }
    request.open("POST", "signinprocess.php", true);
    request.send(form);
}

var forgotPasswordModal;
function forgetPassword(){
   var modal = document.getElementById("forgotPasswordModal");
   forgotPasswordModal = new bootstrap.Modal(modal);
    forgotPasswordModal.show();



    var email = document.getElementById("email2").value;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){
            var response = request.responseText;

            if (response === "success"){
                // alert(response);
                document.getElementById("msg2").innerHTML = "Password reset link has been sent to your email";
                document.getElementById("msg2").className = ("alert alert-success");
                document.getElementById("msgdiv2").className = ("d-block");
            }
            else{
                // alert(response);
                document.getElementById("msg2").innerHTML = response;
                document.getElementById("msgdiv2").className = ("d-block");
            }
        }
    }
    request.open("GET", "forgotpassword.php?email="+email, true);
    request.send();
}

function showPassword(){
    var textField = document.getElementById("newPassword");
    var button = document.getElementById("show-pwp-button");

    if (textField.type === "password"){
        textField.type = "text";
        button.innerHTML = "Hide";
    }else{
        textField.type = "password";
        button.innerHTML = "Show";
    }
}
function showPassword2(){
    var textField = document.getElementById("repeateNewPassword");
    var button = document.getElementById("show-pwp-button2");

    if (textField.type === "password"){
        textField.type = "text";
        button.innerHTML = "Hide";
    }else{
        textField.type = "password";
        button.innerHTML = "Show";
    }
}

function resetPassword(){
    var email = document.getElementById("email2").value;
    var newPassword = document.getElementById("newPassword").value;
    var reTypePassword = document.getElementById("repeateNewPassword").value;
    var verification = document.getElementById("vcode").value;

    var form = new FormData();
    form.append("email", email);
    form.append("newPassword", newPassword);
    form.append("reTypePassword", reTypePassword);
    form.append("verification", verification);

    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){
            var response = request.responseText;

            if (response === "success"){
                alert(response);
                // document.getElementById("msg2").innerHTML = "Password reset link has been sent to your email";
                // document.getElementById("msg2").className = ("alert alert-success");
                // document.getElementById("msgdiv2").className = ("d-block");
                forgotPasswordModal.hide();
            }
            else{
                alert(response);
                // document.getElementById("msg2").innerHTML = response;
                // document.getElementById("msgdiv2").className = ("d-block");
            }
        }
    }
    request.open("POST", "resetpassword.php", true);
    request.send(form);

}

function signout(){

    var request = new XMLHttpRequest();

    request.onreadystatechange = function (){
        if(request.status == 200 && request.readyState == 4){
            var response = request.responseText;
            if(response == "success"){
                window.location.reload();
            }
        }
    }

    request.open("GET","signOutProcess.php",true);
    request.send();

}