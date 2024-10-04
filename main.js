// Name = H.M.Laviru Githmal Herath
// UoW ID = 2064801

function NewYork(num){

    if (localStorage.when != null 
        && parseInt(localStorage.when) + 10000 > Date.now()) {

            document.getElementById("img"+num).src = "https://openweathermap.org/img/wn/" + localStorage.img0 + "@2x.png";
            document.getElementById("myWeather").innerHTML = localStorage.description0;
            document.getElementById("humidity"+num).innerText = localStorage.humidity0;
            document.getElementById("wind"+num).innerText = localStorage.wind0; 
            document.getElementById("temp"+num).innerText = localStorage.temp0;
    
    }else{
        fetch('http://localhost/2064801_P2(1).php?city=New York')

    .then(response => response.json())
    .then(response => {
        console.log(response);

        document.getElementById("img"+num).src = "https://openweathermap.org/img/wn/" + response.icon + "@2x.png";
        document.getElementById("myWeather").innerHTML = response.weather_description;
        document.getElementById("humidity"+num).innerText = response.weather_humidity;
        document.getElementById("wind"+num).innerText = response.weather_wind; 
        document.getElementById("temp"+num).innerText = response.weather_temperature;
            
        localStorage.description0 = response.weather_description;
        localStorage.img0 = response.icon;
        localStorage.humidity0 = response.weather_humidity;
        localStorage.wind0 = response.weather_wind;
        localStorage.temp0 = response.weather_temperature;
        localStorage.when0 = Date.now();    
    })
    }
}

function Mumbai(num){
    if (localStorage.when != null 
        && parseInt(localStorage.when) + 10000 > Date.now()) {
            document.getElementById("img"+num).src = "https://openweathermap.org/img/wn/" + localStorage.img1 + "@2x.png";
            document.getElementById("myWeather").innerHTML = localStorage.description1;
            document.getElementById("humidity"+num).innerText = localStorage.humidity1;
            document.getElementById("wind"+num).innerText = localStorage.wind1; 
            document.getElementById("temp"+num).innerText = localStorage.temp1;
    
    }else{
        fetch('http://localhost/2064801_P2(1).php?city=Mumbai')

    .then(response => response.json())
    .then(response => {
        console.log(response);

        document.getElementById("img"+num).src = "https://openweathermap.org/img/wn/" + response.icon + "@2x.png";
        document.getElementById("myWeather").innerHTML = response.weather_description;
        document.getElementById("humidity"+num).innerText = response.weather_humidity;
        document.getElementById("wind"+num).innerText = response.weather_wind; 
        document.getElementById("temp"+num).innerText = response.weather_temperature;
            
        localStorage.description1 = response.weather_description;
        localStorage.img1 = response.icon;
        localStorage.humidity1 = response.weather_humidity;
        localStorage.wind1 = response.weather_wind;
        localStorage.temp1 = response.weather_temperature;    
    })
    }
}

function Melbourne(num){

    if (localStorage.when != null 
        && parseInt(localStorage.when) + 10000 > Date.now()) {

            document.getElementById("img"+num).src = "https://openweathermap.org/img/wn/" + localStorage.img2 + "@2x.png";
            document.getElementById("myWeather").innerHTML = localStorage.description2;
            document.getElementById("humidity"+num).innerText = localStorage.humidity2;
            document.getElementById("wind"+num).innerText = localStorage.wind2; 
            document.getElementById("temp"+num).innerText = localStorage.temp2;
    
    }else{
        fetch('http://localhost/2064801_P2(1).php?city=Melbourne')

    .then(response => response.json())
    .then(response => {
        console.log(response);

        document.getElementById("img"+num).src = "https://openweathermap.org/img/wn/" + response.icon + "@2x.png";
        document.getElementById("myWeather").innerHTML = response.weather_description;
        document.getElementById("humidity"+num).innerText = response.weather_humidity;
        document.getElementById("wind"+num).innerText = response.weather_wind; 
        document.getElementById("temp"+num).innerText = response.weather_temperature;
            
        localStorage.description2 = response.weather_description;
        localStorage.img2 = response.icon;
        localStorage.humidity2 = response.weather_humidity;
        localStorage.wind2 = response.weather_wind;
        localStorage.temp2 = response.weather_temperature;    
    })
    }
}

NewYork (0);
Mumbai (1);
Melbourne (2);