
/*



let obtenRandomNum = size => {
    return Math.floor(Math.random() * size)    //Random solo da de 0 a 1 pro esto lo multimplica por el tamaño que yo le diga 
                                                //pero al dartelo en decimal metiendolo dentro de floor me lo da decimal
}

let getDistancia = (e , MapaDelTesoro) => {
    let diferenciaX = e.offsetX - MapaDelTesoro.x;  
    let diferenciaY = e.offsetY - MapaDelTesoro.y;
    return Math.sqrt((diferenciaX * diferenciaX) + (diferenciaY + diferenciaY))
}

let getDistanciaPista = distancia => {
    if (distancia < 30){
        return "Muy Caliente!!"
    }else if (distancia < 40){
        return "Caliente!"
    }else if (distancia < 60){
        return "Templado"
    }else if (distancia < 100){
        return "Fresquito"
    }else if (distancia < 180){
        return "Frio :("
    }else if (distancia < 360){
        return "Helado"
    }else {
        return "Ni de Cerca";
    }

}
*/
let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

// get the Distance of two points
let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// return an String depending on the distances 
let getDistanceHint = distance => {
    if (distance < 30) {
        return "Boiling hot!";
    } else if (distance < 40) {
        return "Really Hot";
    } else if (distance < 60) {
        return "Hot";
    } else if (distance < 100) {
        return "Warm";
    } else if (distance < 180) {
        return "Cold";
    } else if (distance < 360) {
        return "Really Cold";
    } else {
        return "Freezing!";
    }
}








