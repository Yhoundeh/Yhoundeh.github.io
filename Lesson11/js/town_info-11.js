window.addEventListener('load', (event)=>{
    // The url of the Json that we are using.
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
  
    // Fetch the JSON file.
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing (remove?)
        const towns = jsonObject['towns']; // create variable for the Json.
  
        // Loop through the list of towns.
        for (i = 0; i < towns.length; i++) {
            // Find Fish Haven, Preston, and Soda Springs.
            if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs') {
                // Create all the needed elements for the cards.
                let link = document.createElement('a');
                let card = document.createElement('section');
                let cardText = document.createElement('div');
                let townName = document.createElement('h3');
                let motto = document.createElement('h4');
                let yearFounded = document.createElement('p');
                let population = document.createElement('p');
                let rainFall = document.createElement('p');
                let images = document.createElement('img');
  
                // Add the text to the content.
                townName.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
                population.textContent = 'Population: ' + towns[i].currentPopulation;
                rainFall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
                
                // Add the photo content.
                images.setAttribute('src', 'images/' + towns[i].photo);
                images.setAttribute('alt', towns[i].name);

                // Tags each image with an id. Super experimental. Probbably should be an if statment.
                images.setAttribute('id', 'image'+ i);
  
                // Add needed attribute to the div.
                cardText.setAttribute('class', 'data');                
  
                // Append the elements to the cardText.
                cardText.appendChild(townName);
                cardText.appendChild(motto);
                cardText.appendChild(yearFounded);
                cardText.appendChild(population);
                cardText.appendChild(rainFall);
  
                // Insert the text and the image to the cards.
                card.appendChild(cardText);
                card.appendChild(images);
  
                // Set the link for the cards. (inprogress)
                if (towns[i].name == 'Fish Haven'){
                    link.setAttribute('href', '/Lesson11/Fish_haven-11.html');
                }
                else if (towns[i].name == 'Preston'){
                    link.setAttribute('href', '/Lesson11/Preston-11.html');
                }
                else if (towns[i].name == 'Soda Springs'){
                    link.setAttribute('href', '/Lesson11/Soda_springs-11.html');
                }
                else {
                    link.setAttribute('#');
                }
  
                // Append Child to link.
                link.appendChild(card);
  
                // Add the element to the page as a section.
                document.querySelector('div.towns').appendChild(link);
            }
        }
    });
  })