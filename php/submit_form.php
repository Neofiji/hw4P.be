<?php
// Simple example to send an email using the form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // The email address where you want to receive the messages
    $to = 'benhakom@gmail.com';
    $subject = 'New Message from Website';
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Ensure the $to email is updated to your receiving email address
    mail($to, $subject, $email_content);
}
?>
