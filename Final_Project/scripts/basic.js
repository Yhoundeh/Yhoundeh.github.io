window.addEventListener('load', (event)=>{
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateObject = new Date(document.lastModified)
    var currentDate = days[dateObject.getDay()] + ", " + dateObject.getDate() + " " + months[dateObject.getMonth()] + " " + dateObject.getFullYear();

    const mod = document.getElementById("modified");
    mod.textContent = currentDate;

    const cry = document.getElementById("year");
    cry.textContent = new Date().getFullYear();
});