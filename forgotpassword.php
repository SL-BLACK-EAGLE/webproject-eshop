<?php
include "connection.php";

include "SMTP.php";
include "PHPMailer.php";
include "Exception.php";

use PHPMailer\PHPMailer\PHPMailer;

if (isset($_GET["email"])) {
    $email = $_GET["email"];

    if (empty($email)) {
        echo ("Email is required");
    } else if (strlen($email) > 100) {
        echo ("Email Must Contain Less Than 100 Characters");
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo ("Invalid Email");
    } else {

        $rs = Database::search("SELECT * FROM `user` WHERE `email` = '".$email."' ");
        $num = $rs->num_rows;

        if ($num == 1) {
           $code = uniqid();
              $rs = Database::iud("UPDATE `user` SET `verification_code` = '$code' WHERE `email` = '".$email."'");

            // email code
            $mail = new PHPMailer;
            $mail->IsSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'chathudreamshms@gmail.com';
            $mail->Password = 'nhswqfgjntjyjlxi';
            $mail->SMTPSecure = 'ssl';
            $mail->Port = 465;
            $mail->setFrom('chathudreamshms@gmail.com', 'Eshop - Reset Password');
            $mail->addReplyTo('chathudreamshms@gmail.com', 'Eshop - Reset Password');
            $mail->addAddress($email);
            $mail->isHTML(true);
            $mail->Subject = 'Eshop - Reset Password';
            $bodyContent = '<h1 style="color: green;">Your Verification Code is '.$code.'</h1>';
            $mail->Body    = $bodyContent;

            if(!$mail->send()) {
                echo 'Verification code sending failed.';
                echo 'Mailer Error: ' . $mail->ErrorInfo;
            }else{
                $mail = new PHPMailer(true);
                echo ("success");
            }


        } else {
            echo ("Invalid Email");
        }
    }
}else
{
    echo ("Invalid Email");
}
?>


