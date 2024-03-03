document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.querySelector('.aparecer').classList.add('visible');
    }, 200) ;
});



type="text/javascript">
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("abajo",window.scrollY>0);
})

function toggleRespuesta(id) {
  var respuesta = document.getElementById('respuesta' + id);
  if (respuesta.style.display === 'none') {
      respuesta.style.display = 'block';
  } else {
      respuesta.style.display = 'none';
  }
}

function toggleSize(element) {
  element.classList.toggle("ampliada");

}





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



/* Tipos de Variables */ 
var ciudad = "Utebo";
let edad = 18;
const nombre = "Oscar";



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








