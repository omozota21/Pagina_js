

// generate a random Number
let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

// get the Distance of two points
let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = distance => {
    if (distance < 30) {
        return "Muy Caliente!!"
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
