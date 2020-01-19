<meta http-equiv='refresh' content='0; url=https://dariyakirilenko.000webhostapp.com/contact.html'>
<meta charset="UTF-8" />
<?php
if (isset($_POST['name'])) {$name = $_POST['name']; if ($name == '') {unset($name);}}
if (isset($_POST['email'])) {$email = $_POST['email']; if ($email == '') {unset($email);}}
if (isset($_POST['sub'])) {$sub = $_POST['sub']; if ($sub == '') {unset($sub);}}
if (isset($_POST['date'])) {$date = $_POST['date']; if ($body == '') {unset($body);}}
if (isset($_POST['body'])) {$body = $_POST['body']; if ($body == '') {unset($body);}}
 
if (isset($name) && isset($email) && isset($sub) && isset($body) && isset($date)){
 
$address = "andreyka.tima@gmail.com";
$mes = "Имя: $name \nE-mail: $email \nТема: $sub \nВыбранная дата:  $date \nТекст:  $body";
$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");

}
else
{
}
?>