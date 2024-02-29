var circleCentre = document.querySelector('.main-circle-centre');
var shapes = document.getElementById('shapes');


circleCentre.addEventListener('mousedown', function() {
  shapes.classList.add('active');

  document.addEventListener('mouseup', function() {

    shapes.classList.remove('active');
  }, { once: true });
});