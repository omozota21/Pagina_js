// import {
//   getRandomNumber,
//   getDistance,
//   getDistanceHint
// } from './helper';


// Definimos las constantes
const WIDTH = 400;   
const HEIGH = 400;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH)
};

//  Contador de clicks
let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let clicks = 0;

$map.addEventListener('click', function (e) {
  console.log('click');
  clicks++;
  let distance = getDistance(e, target);             //calcula la distancia entre el punto (e) y (target) 
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

  if (distance < 20 ) {
    alert(`Enorabuena!! Lo has encontrado en ${clicks} clicks!`);
    location.reload();
  }
});
