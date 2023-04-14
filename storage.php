<?php

  $firstName = $_POST['firstName'];
  $lastName = $_POST['lastName'];
  $phoneNumber = $_POST['phoneNumber'];
  $userMail = $_POST['userMail'];
  $userMessage = $_POST['userMessage'];

/* Connect to Database */

$connection = new mysqli('localhost','root','','learncubedb');

if($connection->connect_error ){
    die('Connection Failed : '.$connection->connect_error);
}else{
    $statement = $connection->prepare("insert in contact_form(firstName,lastName,phoneNumber,userMail,userMessage)
    values(?,?,?,?,?)");
    $statement->bind_param("ssiss",$firstName,$lastName,$phoneNumber,$userMail,$userMessage);
    $statement->execute();

    echo "Form submit ..."
    $statement.close();
    $connection.close();
}

?>
