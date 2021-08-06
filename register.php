<?php
	$name = $_POST['uname'];
	$email = $_POST['email'];
	$password = $_POST['pass'];

	//data base connection
	$conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){
		die('connection Failed :'.$conn->connect_error);
	}else{
		$stmt = $conn->prepare("INSERT INTO registration(name,email,password)VALUES(?,?,?)");
		$stmt->bind_param("sss",$name,$email,$password);
		$stmt->execute();
		echo "Registration Succesfully....";
		$stmt->close();
		$conn->close();
	}
?>
