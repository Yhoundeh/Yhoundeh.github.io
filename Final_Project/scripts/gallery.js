window.addEventListener('load', (event)=>{
    // The urls for the apis.
    const templeUrl = "https://yhoundeh.github.io/Final_Project/scripts/temples.json";

    // Fetch the temple data json file.
    fetch(templeUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // Pass the JSON data to temples.
        const temples = jsonObject.temples;

        // Loop through each temple in the list.
        for (i = 0; i < temples.length; i++) {
            // Create each element need for the card.
            let card = document.createElement("div");
            let text = document.createElement("div");
            let name = document.createElement("h3");
            let image = document.createElement("img");
            let contactTitle = document.createElement("h4");
            let phone = document.createElement("p");
            let address = document.createElement("p");
            let email = document.createElement("p");
            let serviceTitle = document.createElement("h4");
            let clothingSer = document.createElement("p");
            let cafeteriaSer = document.createElement("p");
            let housingSer = document.createElement("p");
            let distributionSer = document.createElement("p");
            let scheduleTitle = document.createElement("h4");
            let ordinanceSch = document.createElement("p");
            let sessionSch = document.createElement("p");
            let status = document.createElement("p");
            let historyTitle = document.createElement("h4");
            let announced = document.createElement("p");
            let groundbreaking = document.createElement("p");
            let dedicated = document.createElement("p");
            let weatherTitle = document.createElement("h4");
            let weatherCond = document.createElement("p");
            let weatherTemp = document.createElement("p");

            // Add the name and image information.
            name.textContent = temples[i].name;
            image.setAttribute("src", temples[i].image);
            image.setAttribute("alt", temples[i].name);

            // Add all the contact information.
            contactTitle.textContent = "Contact Information";
            phone.textContent = "Phone: " + temples[i].phone;
            address.textContent = "Address: " + temples[i].address;
            email.textContent = "Email: " + temples[i].email;

            // Add available services information.
            serviceTitle.textContent = "Available Services";
            if (temples[i].services[0].clothing) {
                clothingSer.textContent = "Clothing rentals available";
            } else {
                clothingSer.textContent = "No clothing rentals available";
            };
            
            if (temples[i].services[0].cafeteria) {
                cafeteriaSer.textContent = "Cafeteria available";
            } else {
                cafeteriaSer.textContent = "No cafeteria available";
            };

            if (temples[i].services[0].housing) {
                housingSer.textContent = "Pateron housing available";
            } else {
                housingSer.textContent = "No pateron housing available";
            };

            if (temples[i].services[0].distribution) {
                distributionSer.textContent = "Distribution center available";
            } else {
                distributionSer.textContent = "No distribution center available";
            };

            // Fetch and add the weather data.
            weatherTitle.textContent = "Current Weather";

            // Setup to url for the API.
            const weatherurl = "https://api.openweathermap.org/data/2.5/weather?id="+ temples[i]["weather-code"] +"&appid=7ad91157396706864277130b86e11838&units=imperial";

            // Fetch the data.
            fetch(weatherurl)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonObject) {
                weatherCond.textContent = "Current Weather: " + jsonObject.weather[0].description;
                weatherTemp.innerHTML = "Current Temperature: " + parseInt(jsonObject.main.temp) + "&#8457;";
            });

            // Add schedule information.
            scheduleTitle.textContent = "Schedule";
            ordinanceSch.textContent = "Ordinance schedule: " + temples[i]["ordinance-schedule"];
            sessionSch.innerHTML = "Session schedule: <br>";
            // Loop through all the session schedule.
            for (j = 0; j < temples[i]["session-schedule"].length; j++) {
                sessionSch.innerHTML += temples[i]["session-schedule"][j] + " <br> ";
            };
            // Check the status.
            status.innerHTML += "Current Temple Status:<br>";
            for (j = 0; j < temples[i].status.length; j++) {
                status.innerHTML += temples[i].status[j] + "<br>";
            };

            // Add history information.
            historyTitle.textContent = "History";
            announced.textContent = "Announced: " + temples[i].history[0].announced;
            groundbreaking.textContent = "Groundbreaking: " + temples[i].history[0].groundbreaking;
            dedicated.textContent = "Dedicated: " + temples[i].history[0].dedicated;

            // Add all the elements to the text part.
            text.appendChild(name);
            text.appendChild(contactTitle);
            text.appendChild(phone);
            text.appendChild(address);
            text.appendChild(email);
            text.appendChild(serviceTitle);
            text.appendChild(clothingSer);
            text.appendChild(housingSer);
            text.appendChild(distributionSer);
            text.appendChild(cafeteriaSer);
            text.appendChild(scheduleTitle);
            text.appendChild(ordinanceSch);
            text.appendChild(sessionSch);
            text.appendChild(status);
            text.appendChild(historyTitle);
            text.appendChild(announced);
            text.appendChild(groundbreaking);
            text.appendChild(dedicated);
            text.appendChild(weatherTitle);
            text.appendChild(weatherTemp);
            text.appendChild(weatherCond);

            // Add the remaining elements to the card.
            card.setAttribute("class", "templeCard");
            card.appendChild(image);
            card.appendChild(text);

            // Append the card to the page.
            document.getElementById("templeList").appendChild(card);
        };
    });
});