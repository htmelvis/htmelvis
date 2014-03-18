<?php
//process.php

$errors = array();
$data   = array();

//validate your vars
if(empty($_POST['name'])){
	$errors['name'] = 'Name wasn\'t filled out';
}
if(empty($_POST['email'])){
	$errors['email'] = 'Email Address is Invalid!';
}
if(empty($_POST['url'])){
	$errors['url'] = 'URL was invalid!';
}
if(empty($_POST['message'])){
	$errors['message'] = 'Enter a message to be sent';
}
// return response
if(!empty($errors)){
	$data['success'] = false;
	$data['errors'] = $errors;
} else {
	//if there are no errors, tell us
	$data['success'] = true;
	$data['message'] = 'Thank you for submitting the form!';

}

//return all the data to an AJAX Call
echo json_encode($data);