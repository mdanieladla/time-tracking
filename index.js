'use strict';

let jsonData = [];
let infoHtml = document.querySelector('.js-info');
const menu = document.querySelectorAll('.js-li');
let cardsContent;

//a cada timeframe le añadimos el evento del click.
menu.forEach((elemnt) => {
  elemnt.addEventListener('click', changeTimeframe);
});

//eliminamos/añadimos la clse active cuando se haga click en cda timeframe
function changeTimeframe(ev) {
  menu.forEach((elemnt) => {
    elemnt.classList.remove('active');
  });
  ev.target.classList.add('active');
}

//funcion para recoger los datos del json
function getDataJson() {
  fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
      jsonData = data;
      cardsContent = '';
      jsonData.map((data) => {
        cardsContent += `
        <div class="regular-card">
        <div class="${data.title
          .toLowerCase()
          .replace(/\s/g, '')} container-margin"></div>
        <div class="work-info container-margin">
          <p class="par-work">${data.title}</p>
          <img src="./images/icon-ellipsis.svg" alt="dots" class="dots-img" />
          <p class="par-hrs">${data.timeframes.weekly.current}hrs</p>
          <span class="lastweek-span">Last Week - ${
            data.timeframes.weekly.previous
          }hrs</span>
        </div>
      </div>
        `;
      });
      infoHtml.innerHTML = cardsContent;
    });
}

getDataJson();
