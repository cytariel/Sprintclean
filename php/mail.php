<?php
require_once "PEAR/Mail.php";
$id = rand(100000,999999);
                                          // Mail.php w tym samym katalogu oraz katalogi Net i Mail wymagane
                                          $conf_code = "CONF";
                                          $from = "Sprint <sprint.zamowienia@interia.pl>";
                                          $to = "sprint.zamowienia@gmail.com";
                                          $subject  = "Sprint zamównienie nr ".$id;


$data = $_POST['date'];
$imie = $_POST['imie'];
$nazwisko = $_POST['nazwisko'];
$adres = $_POST['adres'];
$tele = $_POST['tele'];
$ilosc = $_POST['ilosc'];
$wiad = $_POST['wiad'];

$message = "Zamówienie nr ".$id."\n";
$message .= "Zamówienie na dzień ".$data."\n";
$message .= "Imię i nazwisko klienta: ".$imie." ".$nazwisko."\n";  
$message .= "Adres: ".$adres."\n";  
$message .= "Telefon kontaktowy: ".$tele."\n"; 
$message .= "Ilość elementów do pomiaru: ".$ilosc."\n\n"; 
$message .= "Treść wiadomomości: ".$wiad."\n"; 

                                          $host = "tls://poczta.interia.pl";
                                          $port = "465";
                                          $username = "sprint.zamowienia@interia.pl";
                                          $password = "oknasprint123";
 
                                          $headers = array ('From' => $from,
                                            'To' => $to,
                                            'Subject' => $subject);
                                          $smtp = Mail::factory('smtp',
                                          array (
                                             'host' => $host,
                                             'port' => $port,
                                             'auth' => true,
                                             'debug' => true,
                                             'username' => $username,
                                             'password' => $password));
 
                                          $mail = $smtp->send($to, $headers, $message);
 
                                          if (PEAR::isError($mail)) {
                                              echo("<br><br><br><div id=\"err\"><b>".$mail->getMessage()."</b></div>");
                                          } else {
                                             echo(" ");
                                          }

?>
