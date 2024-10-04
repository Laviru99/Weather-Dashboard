// Name = H.M.Laviru Githmal Herath
// UoW ID:2064801

<?php

// Select weather data for given parameters
$sql = "SELECT *
	FROM weather
	WHERE city = '{$_GET['city']}'
	AND weather_when >= DATE_SUB(NOW(), INTERVAL 10 SECOND)
	ORDER BY weather_when DESC limit 1";

$result = $mysqli -> query($sql);

// If 0 record found
if ($result->num_rows == 0) {

    $url = 'https://api.openweathermap.org/data/2.5/weather?q=' . $_GET['city'] . '&appid=55f66a647157c5426efd0d0d6561e51b&units=metric';

    // Get data from openweathermap and store in JSON object
    $data = file_get_contents($url);
    $json = json_decode($data, true);

    // Fetch required fields
    $city = $json['name'];
    $weather_when = date("Y-m-d H:i:s"); // now
    $weather_description = $json['weather'][0]['description'];
    $icon = $json['weather'][0]['icon'];
    $weather_humidity = $json['main']['humidity'];
    $weather_wind = $json['wind']['speed'];
    $weather_temperature = $json['main']['temp'];          

    // Build INSERT SQL statement
    $sql = "INSERT INTO weather (city, weather_when, weather_description, icon, weather_humidity, weather_wind, weather_temperature)
    VALUES('{$city}', '{$weather_when}', '{$weather_description}', '{$icon}', {$weather_humidity}, {$weather_wind}, {$weather_temperature})";

    // Run SQL statement and report errors
    if (!$mysqli -> query($sql)) {
        echo("<h4>SQL error description: " . $mysqli -> error . "</h4>");
    }
}
?>
