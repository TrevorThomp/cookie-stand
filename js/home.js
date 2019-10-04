'use strict';

// Event Listeners for homepage
var defaultRadio = document.getElementById('default');
var blueRadio = document.getElementById('blue');
var redRadio = document.getElementById('red');
var greenRadio = document.getElementById('green');
var orangeRadio = document.getElementById('orange');
var navItems = document.querySelectorAll('.nav-item');

defaultRadio.addEventListener('click', function() {
  document.body.style.backgroundColor = '#14303c';
  document.body.style.color = 'rgb(109, 146, 160)';
});

blueRadio.addEventListener('click', function() {
  document.body.style.backgroundColor = '#2F4D74';
  document.body.style.color = '#859DBC';
});

redRadio.addEventListener('click', function() {
  document.body.style.backgroundColor = '#AB3D48';
  document.body.style.color = 'white';
});

greenRadio.addEventListener('click', function() {
  document.body.style.backgroundColor = '#31893C';
  document.body.style.color = 'white';
});

orangeRadio.addEventListener('click', function() {
  document.body.style.backgroundColor = '#AA6939';
  document.body.style.color = '#FFCEAA';
});


