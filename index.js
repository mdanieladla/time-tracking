'use strict';

//fetch para coger los datos del json
fetch('./data.json')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
