<?php
//process.php

$errors = array();
$data   = array();

$name = 	$_POST['name'];
$email = 	$_POST['email'];
$subject = 	$_POST['subject'];
$url = 		$_POST['url'];
$message = 	$_POST['message'];
$honeypot = $_POST['honeypot'];

function check_email_address($email) {
  // First, we check that there's one @ symbol, 
  // and that the lengths are right.
  if (!ereg("^[^@]{1,64}@[^@]{1,255}$", $email)) {
    // Email invalid because wrong number of characters 
    // in one section or wrong number of @ symbols.
    return false;
  }
  // Split it into sections to make life easier
  $email_array = explode("@", $email);
  $local_array = explode(".", $email_array[0]);
  for ($i = 0; $i < sizeof($local_array); $i++) {
    if(!ereg("^(([A-Za-z0-9!#$%&'*+/=?^_`{|}~-][A-Za-z0-9!#$%&
↪'*+/=?^_`{|}~\.-]{0,63})|(\"[^(\\|\")]{0,62}\"))$",
$local_array[$i])) {
      return false;
    }
  }
  // Check if domain is IP. If not, 
  // it should be valid domain name
  if (!ereg("^\[?[0-9\.]+\]?$", $email_array[1])) {
    $domain_array = explode(".", $email_array[1]);
    if (sizeof($domain_array) < 2) {
        return false; // Not enough parts to domain
    }
    for ($i = 0; $i < sizeof($domain_array); $i++) {
      if(!ereg("^(([A-Za-z0-9][A-Za-z0-9-]{0,61}[A-Za-z0-9])|
↪([A-Za-z0-9]+))$",
$domain_array[$i])) {
        return false;
      }
    }
  }
  return true;
}

//validate your vars
if(empty($name)){
	$errors['name'] = 'Name wasn\'t filled out';
}
if(empty($email) && check_email_address($email)){
	$errors['email'] = 'Email Address is Invalid!';
}
if(empty($url)){
	$errors['url'] = 'URL was invalid!';
}
if(empty($message)){
	$errors['message'] = 'Enter a message to be sent';
}
if(!empty($honeypot)){
	$errors['honeypot'] = 'must be a bot';
}
// return response
if(!empty($errors)){
	$data['success'] = false;
	$data['errors'] = $errors;
} else {
	//if there are no errors, tell us
	$data['success'] = true;
	$data['message'] = 'Thank you for submitting the form! I will get back in touch with you as soon as I can!';
	$message="\n Customer Inquiry \n" . "From: $name \n" ;
	$message.="Customer Email: $email" . " \n Their Website: $url";
	$message.="Subject: \n $subject" . "\n The Message: \n". $message;


	mail('info@htmelvis.com', $subject, $message, 'From:' . $email);
}

//return all the data to an AJAX Call
echo json_encode($data);