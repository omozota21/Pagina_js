

// Generamos un numero random 
let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

// get the Distance of two points
let getDistance = (e, target) => {   // Calculamos la diferencia entre las cordenadas de x e y ademas del punto de destino  
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));  //Con esto aplicamos como en mates la ley de pitagoras para conocer el valor de (x) e (y) dandonos asi el valor de la distamcia calculada.  
}

let getDistanceHint = distance => {
    if (distance < 30) {
        return "Muy Caliente!!"         //Creamos una estructura de control haciendonos hacer que dependiendo la cantidad de pixeles que hay desde donde das el click hasta donde esta el tesoro muestre una cosa distinta
    } else if (distance < 40) {
        return "Caliente!"
    } else if (distance < 60) {
        return "Templado"
    } else if (distance < 100) {
        return "Fresquito"
    } else if (distance < 180) {
        return "Frio :("
    } else if (distance < 360) {
        return "Helado"
    } else {
        return "Ni de Cerca";
    }

}
