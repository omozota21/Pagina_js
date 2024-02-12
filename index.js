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


/*Cmabio de tema */
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

/* Contador de clicks */
let clicks = 0;

function incrementCounter() {
    clicks++;
    document.getElementById('counter').textContent = clicks;
}