<?php

include "connection.php";

$fname = $_POST["fname"];
$lname = $_POST["lname"];
$email = $_POST["email"];
$password = $_POST["password"];
$mobile = $_POST["mobile"];
$gender = $_POST["gender"];

if (empty($fname)){
    echo ("First Name is required");
}else if(strlen($fname) >50){
    echo ("First Name Must Contain Less Than 50 Characters");
}else if (empty($lname)){
    echo ("Last Name is required");
}else if(strlen($lname) >50){
    echo ("Last Name Must Contain Less Than 50 Characters");
}else if (empty($email)){
    echo ("Email is required");
}else if(strlen($email) >100){
    echo ("Email Must Contain Less Than 100 Characters");
}else if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
    echo ("Invalid Email");
}else if (empty($password)){
    echo ("Password is required");
}else if(strlen($password) <6 || strlen($password) >20){
    echo ("Password Must Contain 6-20 Characters");
}else if (empty($mobile)){
    echo ("Mobile is required");
}else if(strlen($mobile) !=10){
    echo ("Invalid Mobile Number");
}else if (!preg_match("/07[0,1,2,4,5,6,7,8][0-9]/", $mobile)){
    echo ("Invalid Mobile Number");
}else if ($gender == 1){
    echo ("Please select Gender");
}else{
    $rs = Database::search("SELECT * FROM `user` WHERE `email` = '$email' OR `mobile` = '$mobile'");
    $num = $rs->num_rows;
    if ($num >0){
        echo ("Email or Mobile Already Exists");
    }else{
        $date = new DateTime();
        $time_zone = new DateTimeZone("Asia/Colombo");
        $date->setTimezone($time_zone);
        $datetime = $date->format("Y-m-d H:i:s");

        Database::iud("INSERT INTO `user` (`fname`, `lname`, `email`, `password`, `mobile`, `join_date`, `gender_gender_id`, `status_status_id`)
        VALUES ('$fname', '$lname', '$email', '$password', '$mobile', '$datetime', '$gender', '1')");
        echo ("success");
    }
}


