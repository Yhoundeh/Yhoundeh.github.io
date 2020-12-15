
  let eventsURL = "https://byui-cit230.github.io/weather/data/towndata.json"
fetch(eventsURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let eventHolder = document.createElement("ul")
        let event1 = document.createElement("li")
        let event2 = document.createElement("li")
        let event3 = document.createElement("li")
        let event4 = document.createElement("li")

        event1.textContent = jsObject.towns[1].events[0]
        event2.textContent = jsObject.towns[1].events[1]
        event3.textContent = jsObject.towns[1].events[2]
        event4.textContent = jsObject.towns[1].events[3]

        document.getElementById("events").appendChild(eventHolder)

        eventHolder.appendChild(event1)
        eventHolder.appendChild(event2)
        eventHolder.appendChild(event3)
        eventHolder.appendChild(event4)

        
    })