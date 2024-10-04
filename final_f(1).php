// Name = H.M.Laviru Githmal Herath
// UoW ID:2064801

<?php

// Connect to database
$mysqli = new mysqli("localhost","root","","weather");
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

include('2064801_P2.php');

// Execute SQL query
$sql = "SELECT *
	FROM weather
	ORDER BY weather_when DESC limit 1";

$result = $mysqli -> query($sql);

// Get data, convert to JSON and print
$row = $result -> fetch_assoc();
print json_encode($row);

// Free result set and close connection
$result -> free_result();
$mysqli -> close();

?>
