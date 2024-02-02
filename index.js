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