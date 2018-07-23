<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './src/Exception.php';
require './src/PHPMailer.php';
require './src/SMTP.php';

$template = '<table></table>';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    $username = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
	
	
	
       //Server settings
    $mail->SMTPDebug = 1;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'sagarpoudel1010@gmail.com';                 // SMTP username
    $mail->Password = 'narendramodi123';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to
 
    
    //Recipients
    $mail->setFrom($email , $username);
    $mail->addAddress('sagarpoudel1010@gmail.com');     // Add a recipient
  


   

    //Content
    $mail->IsHTML(true);                                // Set email format to HTML
    $mail->Subject = $subject;
    
    $mail->Body = 'jn';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message'.$e;
}

?>