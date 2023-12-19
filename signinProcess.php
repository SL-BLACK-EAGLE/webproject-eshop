<?php
session_start();
include "connection.php";

$email = $_POST["email"];
$password = $_POST["password"];
$rememberme = $_POST["rememberme"];

if (empty($email)) {
    echo("Email is required");
}elseif (empty($password)) {
    echo("Password is required");
}else{

    $rs = Database::search("SELECT * FROM `user` WHERE `email` = '$email' AND `password` = '$password'");
    $num = $rs->num_rows;

    if ($num == 1){
        echo ("success");
        $data = $rs->fetch_assoc();
        $_SESSION["user"] = $data;

        if ($rememberme == "true"){
            setcookie("email", $email, time() + (86400 * 30));
            setcookie("password", $password, time() + (86400 * 30));
        }else{
            setcookie("email", "", -1);
            setcookie("password", "", -1);
        }

    }else{
        echo ("Invalid Email or Password");
    }
}