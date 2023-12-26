<?php
include "connection.php";

$email = $_POST["email"];
$password = $_POST["newPassword"];
$confirm_password = $_POST["reTypePassword"];
$vcode = $_POST["verification"];

if($password == $confirm_password){
    $rs = Database::iud("UPDATE `users` SET password = '$password' WHERE email = '$email' AND vcode = '$vcode'");
    if($rs){
        echo "success";
    }else{
        echo "Password reset failed";
    }
}else{
    echo "Password does not match";
}
