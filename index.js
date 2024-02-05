document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.querySelector('.aparecer').classList.add('visible');
    }, 200) ;
});

function toggleSize(element) {
  element.classList.toggle("ampliada");
}