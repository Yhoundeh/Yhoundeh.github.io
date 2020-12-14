window.addEventListener('load', (event)=>{
    // The urls for the weather api. Note forcast is quite different.
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=7ad91157396706864277130b86e11838&units=imperial";
    const apiurlforcast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=7ad91157396706864277130b86e11838&units=imperial";

    // Get the data for current weather in the form of a JSON file
    fetch(apiurl)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // Get the current condition.
        document.getElementById("current").textContent = jsonObject.weather[0]["main"];

        // Get the current Temperature.
        document.getElementById("temp").textContent = Math.round(jsonObject.main.temp);

        // Get the current humidity.
        document.getElementById("humidity").textContent = Math.round(jsonObject.main.humidity);

        // Get the current wind speed.
        document.getElementById("wind").textContent = Math.round(jsonObject.wind.speed);

        // Calculate windchill. (Doesn't display unless its significant.)
        let windchill = Math.round(35.74 + 0.6215 * jsonObject.main.temp - 35.75 *
            Math.pow(jsonObject.wind.speed, 0.16) + 0.4275 * jsonObject.main.temp *
            Math.pow(jsonObject.wind.speed, 0.16));
        const wc = document.querySelector('#windchill');
        if (temp < 50 && speed > 3.0) {
            wc.textContent = windchill + ' ℉';
        }
        else {
            wc.textContent = 'N/A'
        }
    });

    // Get the data for current weather in the form of a JSON file
    fetch(apiurlforcast)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // Pass the weather list from the json file.
        const weatherList = jsonObject["list"];
        
        // Setup the days in the week.
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        // Setup the counter.
        let num = 0;
        // Loop through each item in the list adding each box.
        for (i = 0; i < weatherList.length; i++) {
            // Find the time stamp and put it in a date object.
            let forcastTime = new Date(weatherList[i].dt_txt)
            
            // Add the box if the hour is 18.
            if (forcastTime.getHours() == 18){
                // Add one to the counter.
                num = num + 1;

                // Setup the document ids.
                let page_id = "day" + num;
                let page_img = "img" + num;
                let page_output = "temp" + num;

                // Get the alt description.
                const desc = jsonObject.list[i].weather[0].description;

                // Round the tempature.
                let currentTemp = Math.round(weatherList[i].main.temp);

                // Label the day for that box.
                document.getElementById(page_id).textContent = days[forcastTime.getDay()];

                // Add the temperature for that box.
                document.getElementById(page_output).textContent = currentTemp;

                // Create the image link and add it to the box.
                let imagesrc = 'https://openweathermap.org/img/w/' + weatherList[i].weather[0].icon + '.png';  // note the concatenation
                document.getElementById(page_img).setAttribute('src', imagesrc);
                document.getElementById(page_img).setAttribute('alt', desc);
                document.getElementById(page_img).setAttribute('title', desc);
            }
        }
    });
});

