'use strict';

let timeframe = 'weekly'; //valor por defecto
//const container = document.querySelector('.container');
let cards; //sitio para las cards

// Initialize menu
const menu = document.querySelectorAll('.js-li');

menu.forEach((element) => {
  element.addEventListener('click', changeTimeframe);
});

//Get JSON Data y creamos cards
let data = {};

fetch('./data.json')
  .then((response) => response.json())
  .then((jsonData) => {
    //crear cards
    jsonData.forEach((elmt) => {
      createRegularCard(elmt, timeframe);
    });
  });

/**************** Functions *********************/
function changeTimeframe(ev) {
  menu.forEach((element) => {
    //quitamos la clase active si la tiene
    element.classList.remove('active');
  });
  //añadimos la clase active al elemt que clickamos
  ev.target.classList.add('active');
  //   timeframe = ev.target.innerText.toLoweCase();
  updateCards(timeframe);
}

// function createRegularCard(elmt, timeframe) {
//   let title = elmt['title'];
//   let current = elmt['timeframes'][timeframe]['current'];
//   let previous = elmt['timeframes'][timeframe]['previous'];
//   console.log(title, current, previous);
//   const timeframeMsg = {
//     daily: 'Yesterday',
//     weekly: 'Last Week',
//     monthly: 'Last Month',
//   };
//   return `
//   <div class="box1 ${title.toLowerCase().replace(/\s/g, '')}">
//     <div class="${title} container-margin"></div>
//     <div class="work-info container-margin">
//       <p class="par-work">${title}</p>
//       <img src="./images/icon-ellipsis.svg" alt="dots" class="dots-img" />
//       <p class="par-hrs">${current}hrs</p>
//       <span class="lastweek-span">${
//         timeframeMsg[timeframe]
//       } - ${previous}hrs</span>
//     </div>
//   </div>`;
// }
