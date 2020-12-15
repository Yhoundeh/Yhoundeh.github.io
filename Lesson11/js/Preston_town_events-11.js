
  let eventsURL = "https://byui-cit230.github.io/weather/data/towndata.json"
fetch(eventsURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let eventHolder = document.createElement("ul")
        let event1 = document.createElement("li")
        let event2 = document.createElement("li")
        let event3 = document.createElement("li")

        event1.textContent = jsObject.towns[5].events[0]
        event2.textContent = jsObject.towns[5].events[1]
        event3.textContent = jsObject.towns[5].events[2]

        document.getElementById("events").appendChild(eventHolder)

        eventHolder.appendChild(event1)
        eventHolder.appendChild(event2)
        eventHolder.appendChild(event3)
    })