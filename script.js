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
            if (response === "success"){
                document.getElementById("msg").innerHTML = "User Registration Successful";
                document.getElementById("msg").className = ("alert alert-success");
                document.getElementById("msgdiv").className = ("d-block");
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
    request.open("POST", "http://localhost/webproject-eshop/signupprocess.php", true);
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
                window.location.href = "http://localhost/webproject-eshop/home.php";
            }
            else{
                document.getElementById("msg2").innerHTML = response;
                document.getElementById("msgdiv2").className = ("d-block");
            }
        }
    }
    request.open("POST", "http://localhost/webproject-eshop/signinprocess.php", true);
    request.send(form);
}