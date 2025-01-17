const requestURL = 'https://pipl.ir/v1/getPerson.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    
    const person = jsonObject['person']
    const marriage  = jsonObject['marriage'];
    const personal  = jsonObject['personal'];
    const online  = jsonObject['online_info'];

    var list = [marriage, personal, online];

    for (i = 0; i < list.length; i++){
      let cards = document.createElement('section');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let image = document.createElement('img');


      // h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      // p1.textContent = "Date of Birth: " + prophets[i].birthdate
      // p2.textContent = "Place of Birth: " + prophets[i].birthplace


      // card.appendChild(h2);
      // card.appendChild(p1);
      // card.appendChild(p2);
      // card.appendChild(image);

      // document.querySelector('div.cards').appendChild(card);
      // image.setAttribute('src', prophets[i].imageurl);
      // image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + i)

    }
  })