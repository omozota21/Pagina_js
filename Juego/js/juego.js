


/*
const width = 400;
const heigh = 400;

let MapaDelTesoro = {
    x: obtenRandomNum(width),
    y: obtenRandomNum(heigh)
};

let $mapa = document.getElementById("mapa");

$mapa.addEventListener('click', function (e){
    let distancia = getDistancia(e, MapaDelTesoro);
    let getDistanciaPista = getDistanciaPista(distancia);
    console.log(getDistanciaPista);
})

*/
import {
    getRandomNumber,
    getDistance,
    getDistanceHint
} from "./funciones";

const WIDTH = 400;
const HEIGH = 400;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
};

// click handler
let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let clicks = 0;

$map.addEventListener('click', function (e) {
    console.log('click');
    clicks++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = `<h1>${distanceHint}</h1>`;

    if (distance < 20) {
        alert(`Found the treasure in ${clicks} clicks!`);
        location.reload();
    }
});