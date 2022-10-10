const lastWidth = document.querySelector('body').style.width;
const lastHeight = document.querySelector('body').style.height;

const closeMenu = function () {
  document.getElementsByClassName('menu')[0].classList.add('hidden');
  document.querySelector('body').style.width = lastWidth;
  document.getElementsByClassName('headline')[0].classList.remove('hidden'); 
  document.getElementsByClassName('Works')[0].classList.remove('hidden');
  document.getElementsByClassName('About')[0].classList.remove('hidden'); 
  document.getElementsByClassName('form')[0].classList.remove('hidden'); 
};

const openMenu = function () {
  document.getElementsByClassName('menu')[0].classList.remove('hidden');
  document.querySelector('body').style.width = '10vmax'; 
  document.getElementsByClassName('headline')[0].classList.add('hidden'); 
  document.getElementsByClassName('Works')[0].classList.add('hidden'); 
  document.getElementsByClassName('About')[0].classList.add('hidden');
  document.getElementsByClassName('form')[0].classList.add('hidden');
};

document
  .getElementsByClassName('cancel')[0]
  .addEventListener('click', closeMenu);
document
  .getElementsByClassName('menu-button-selector')[0]
  .addEventListener('click', openMenu);
document
  .getElementsByClassName('Hello')[0]
  .addEventListener('click', closeMenu);
document
  .getElementsByClassName('portfolio')[0]
  .addEventListener('click', closeMenu);
document
  .getElementsByClassName('about')[0]
  .addEventListener('click', closeMenu);
document
  .getElementsByClassName('contact')[0]
  .addEventListener('click', closeMenu);