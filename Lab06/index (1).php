<?php
 header('Access-Control-Allow-Origin: *');  

$a=mysqli_connect('localhost','id1958135_viral','94302','id1958135_simple');
$un=$_POST['nm'];
$sc=$_POST['mrk'];
$query="insert into scores(username,score) values('$un','$sc')";
$result=mysqli_query($a,$query);
$dis="select * from scores";
$b=mysqli_query($a,$dis);
$result ="";
while($row=mysqli_fetch_array($b))
	{
		$result =$result .$row["username"]." ".$row["score"] . "<br ?/>";
//		echo $row["username"]." ".$row["score"];
//		echo "<br>";
	}
//echo "Form Submitted Succesfully";
echo json_encode($result);

mysqli_close($a);
?>