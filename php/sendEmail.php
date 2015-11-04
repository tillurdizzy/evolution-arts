<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
$data = json_decode(file_get_contents("php://input"));

$_first = $data->first;
$_last = $data->last;
$_email = $data->email;
$_phone = $data->phone;
$_state = $data->state;
$_zip = $data->zip;
$_file = $data->file;
$_comments = $data->comments;


$to      = 'tillurdizzy@live.com';
$subject = 'Customer Contact Arts';
$message = $_first." ".$_last."\r\n".$_email."\r\n".$phone."\r\n".$_state."\r\n".$_zip."\r\n".$_file."\r\n".$_comments;

mail($to, $subject, $message);

header("Location: index.php");

?>