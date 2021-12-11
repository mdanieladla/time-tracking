'use strict';

let jsonData = [];
let infoHtml = document.querySelector('.js-info');
const menu = document.querySelectorAll('.js-li');
let cardsContent;
const daily = document.querySelector('.js-daily');
const weekly = document.querySelector('.js-weekly');
const monthly = document.querySelector('.js-monthly');
let cardsDaily;
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

//funcion para mostrar daily-weekly-monthly info
function getDailyReport() {
  jsonData.map((data) => {
    cardsContent = '';
    cardsContent = `
        <div class="regular-card">
        <div class="${data.title
          .toLowerCase()
          .replace(/\s/g, '')} container-margin"></div>
        <div class="work-info container-margin">
          <p class="par-work">${data.title}</p>
          <img src="./images/icon-ellipsis.svg" alt="dots" class="dots-img" />
          <p class="par-hrs">${data.timeframes.daily.current}hrs</p>
          <span class="lastweek-span">Yesterday - ${
            data.timeframes.daily.previous
          }hrs</span>
        </div>
      </div>
        `;
  });
  infoHtml.innerHTML = cardsContent;
}

daily.addEventListener('click', getDailyReport);

function getWeeklyReport() {
  jsonData.map((data) => {
    cardsContent = '';
    cardsContent = `
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
}

weekly.addEventListener('click', getWeeklyReport);

function getMonthlyReport() {
  jsonData.map((data) => {
    cardsContent = '';
    cardsContent = `
        <div class="regular-card">
        <div class="${data.title
          .toLowerCase()
          .replace(/\s/g, '')} container-margin"></div>
        <div class="work-info container-margin">
          <p class="par-work">${data.title}</p>
          <img src="./images/icon-ellipsis.svg" alt="dots" class="dots-img" />
          <p class="par-hrs">${data.timeframes.monthly.current}hrs</p>
          <span class="lastweek-span">Last Month - ${
            data.timeframes.monthly.previous
          }hrs</span>
        </div>
      </div>
        `;
  });
  infoHtml.innerHTML = cardsContent;
}

monthly.addEventListener('click', getMonthlyReport);

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
