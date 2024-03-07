document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.querySelector('.aparecer').classList.add('visible');
    }, 200) ;
});



/* Tipos de Variables */ 
var ciudad = "Utebo";
let edad = 18;
const nombre = "Oscar";

/* Funciones */
function suma(a, b) {
    return a + b;
}

var num1 = 5;
var num2 = 3;
console.log("La suma de", num1, "y", num2, "es:", suma(num1, num2));

/* Arrays */
var numeros = [1, 2, 3, 4, 5];

var colores = ["rojo", "verde", "azul"];

var mixto = [1, "dos", true, 4.5];

console.log("El primer número es:", numeros[0]);
console.log("El segundo color es:", colores[1]);



/*Cambio de tema */
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

/* Contador de clicks */
let clicks = 0;

function incrementCounter() {
    clicks++;
    document.getElementById('counter').textContent = clicks;
}


/* Galeria de imagenes */
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Cambia la imagen cada 2 segundos


}

/* Lista de Tareas */
const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}

const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}

setDate();













