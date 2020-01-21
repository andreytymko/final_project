<meta http-equiv='refresh' content='1; url=https://dariyakirilenko.000webhostapp.com/index.html'>
<meta charset="UTF-8" />
<?php
if (isset($_POST['name'])) {$name = $_POST['name']; if ($name == '') {unset($name);}}
if (isset($_POST['tel'])) {$tel = $_POST['tel']; if ($tel == '') {unset($tel);}}
if (isset($_POST['sub'])) {$sub = $_POST['sub']; if ($sub == '') {unset($sub);}}
if (isset($_POST['date'])) {$date = $_POST['date']; if ($date == '') {unset($date);}}
if (isset($_POST['body'])) {$body = $_POST['body']; if ($body == '') {unset($body);}}
 
if (isset($name) && isset($tel) && isset($sub) && isset($date) && isset($body)){
$address = "andreyka.tima@gmail.com";
$email = "hhhandrej69@gmail.com";
$mes =  " Имя: $name \nНомер телефона: $tel \nТема: $sub \nВыбранная дата:  $date \nТекст:  $body";
$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");

}
else
{
}
?>