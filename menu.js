/* eslint-disable func-names */
const lastWidth = document.querySelector('body').style.width;
const lastHeight = document.querySelector('body').style.height;

const callsClose = function () {
  document.getElementsByClassName('About-myself')[0].classList.remove('hidden');
  document.getElementsByClassName('form')[0].classList.remove('hidden');
  document.getElementsByClassName('headline')[0].classList.remove('hidden');
  document.getElementsByClassName('Desktop-head')[0].classList.remove('hidden');
  document.getElementsByClassName('geom')[0].classList.remove('hidden');
  document.querySelector('body').style.width = lastWidth;
  document.querySelector('body').style.height = lastHeight;
  document.querySelector('body').style.backgroundColor = 'white';
  document.querySelector('.container_2').style.justifyItems = 'initial';
  document.getElementsByClassName('Works')[0].style.display = 'block';
  setTimeout(() => { window.location.replace('#Works'); }, 10);
};

const callsOpen = function () {
  document.getElementsByClassName('About-myself')[0].classList.add('hidden');
  document.getElementsByClassName('form')[0].classList.add('hidden');
  document.getElementsByClassName('headline')[0].classList.add('hidden');
  document.getElementsByClassName('Desktop-head')[0].classList.add('hidden');
  document.getElementsByClassName('geom')[0].classList.add('hidden');
  document.querySelector('body').style.width = '0';
  document.querySelector('body').style.height = '0';
  document.getElementsByClassName('Works')[0].style.display = 'flex';
  document.querySelector('body').style.backgroundColor = '#1a2236';
  document.querySelector('.container_2').style.justifyItems = 'center';
  window.window.location.href = '#';
};

const closeMenu = function () {
  document.getElementsByClassName('menu')[0].classList.add('hidden');
  document.querySelector('body').style.width = lastWidth;
  document.getElementsByClassName('About-myself')[0].classList.remove('hidden');
  document.getElementsByClassName('form')[0].classList.remove('hidden');
  document.getElementsByClassName('Desktop-head')[0].classList.remove('hidden');
  document.getElementsByClassName('geom')[0].classList.remove('hidden');
  document.getElementsByClassName('Works')[0].classList.remove('hidden');
};

const openMenu = function () {
  document.getElementsByClassName('menu')[0].classList.remove('hidden');
  document.querySelector('body').style.width = '10vmax';
  document.getElementsByClassName('About-myself')[0].classList.add('hidden');
  document.getElementsByClassName('form')[0].classList.add('hidden');
  document.getElementsByClassName('Desktop-head')[0].classList.add('hidden');
  document.getElementsByClassName('geom')[0].classList.add('hidden');
  document.getElementsByClassName('Works')[0].classList.add('hidden');
};

const openPopup1 = function () {
  document.getElementsByClassName('popup-1')[0].classList.remove('hidden');
  callsOpen();
};

const closePopup1 = function () {
  window.location.replace('#Works');
  document.getElementsByClassName('popup-1')[0].classList.add('hidden');
  callsClose();
};

const openPopup2 = function () {
  document.getElementsByClassName('popup-2')[0].classList.remove('hidden');
  callsOpen();
};

const closePopup2 = function () {
  window.location.replace('#Works');
  document.getElementsByClassName('popup-2')[0].classList.add('hidden');
  callsClose();
};

const openPopup3 = function () {
  document.getElementsByClassName('popup-3')[0].classList.remove('hidden');
  callsOpen();
};

const closePopup3 = function () {
  window.location.replace('#Works');
  document.getElementsByClassName('popup-3')[0].classList.add('hidden');
  callsClose();
};

const openPopup4 = function () {
  document.getElementsByClassName('popup-4')[0].classList.remove('hidden');
  callsOpen();
};

const closePopup4 = function () {
  window.location.replace('#Works');
  document.getElementsByClassName('popup-4')[0].classList.add('hidden');
  callsClose();
};

const openPopup5 = function () {
  document.getElementsByClassName('popup-5')[0].classList.remove('hidden');
  callsOpen();
};

const closePopup5 = function () {
  window.location.replace('#Works');

  document.getElementsByClassName('popup-5')[0].classList.add('hidden');
  callsClose();
};

const openPopup6 = function () {
  document.getElementsByClassName('popup-6')[0].classList.remove('hidden');
};

const closePopup6 = function () {
  window.location.replace('#Works');

  document.getElementsByClassName('popup-6')[0].classList.add('hidden');
  callsClose();
  window.window.location.href = '#Works';
};

const xButton = function (x) {
  if (x.keyCode === 88) {
    closeMenu();
    closePopup1();
    closePopup2();
    closePopup3();
    closePopup4();
    closePopup5();
    closePopup6();
  }
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
  .getElementsByClassName('About')[0]
  .addEventListener('click', closeMenu);
document
  .getElementsByClassName('contact')[0]
  .addEventListener('click', closeMenu);
document.addEventListener('keydown', xButton);

document.getElementById('See1').addEventListener('click', openPopup1);
document
  .getElementsByClassName('cancel-1')[0]
  .addEventListener('click', () => {
    closePopup1();
  });

document.getElementById('See2').addEventListener('click', openPopup2);
document.getElementById('SeeD2').addEventListener('click', openPopup2);
document
  .getElementsByClassName('cancel-2')[0]
  .addEventListener('click', closePopup2);

document.getElementById('See3').addEventListener('click', openPopup3);
document.getElementById('SeeD3').addEventListener('click', openPopup3);
document
  .getElementsByClassName('cancel-3')[0]
  .addEventListener('click', closePopup3);

document.getElementById('See4').addEventListener('click', openPopup4);
document.getElementById('SeeD4').addEventListener('click', openPopup4);
document
  .getElementsByClassName('cancel-4')[0]
  .addEventListener('click', closePopup4);

document.getElementById('See5').addEventListener('click', openPopup5);
document.getElementById('SeeD5').addEventListener('click', openPopup5);
document
  .getElementsByClassName('cancel-5')[0]
  .addEventListener('click', closePopup5);

document.getElementById('See6').addEventListener('click', openPopup6);
document.getElementById('SeeD6').addEventListener('click', openPopup6);
document
  .getElementsByClassName('cancel-6')[0]
  .addEventListener('click', closePopup6);

const storeObj = {
  1: {
    name: 'Seafood Web',
    description: 'Our JavaScript capstone project entailed the development of a web application that leverages an external API. Our team carefully selected an API that provides comprehensive data on Meals, and we subsequently constructed the web app centered around this API. The resulting webpage is the culmination of our teams efforts.',
    featuredImg: [
      'image/project/recipe.png',
      'image/project/contact.png',
      'image/Project/commenttextn.png',
      'image/Project/commentn.png',
    ],
    technologies: ['HTML/Css', 'Bootstrap', 'JavaScript'],
    live: 'https://frnega.github.io/capstone-JavaScript/dist/index.html',
    source: 'https://github.com/frnega/capstone-JavaScript',
  },
  2: {
    name: 'World Metrics',
    description: 'A mobile web application using React and Redux to facilitate the monitoring of various metrics, all represented as numeric values. The application will allow users to access and check this list of metrics conveniently on their mobile devices.',
    featuredImg: [
      'image/project1/country.png',
      'image/project1/details.png',
      'image/project1/homepage2.png',
      'image/project1/search.png',
    ],
    technologies: ['HTML/Css', 'React/Redux', 'JavaScript'],
    live: '#',
    source: '#',
  },
  3: {
    name: 'Math-Magicians',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featuredImg: [
      'image/project2/calculator.png',
      'image/image/project2/homepage3.png',
      'image/project2/quotes.png',
      'image/project2/calculator.png',
    ],
    technologies: ['HTML/Css', 'React', 'JavaScript'],
    live: '#',
    source: '#',
  },
  4: {
    name: 'Book-An-Appointment',
    description: 'Coders-Hub application allows user to reverse different online classes depending on their preferences. They are the assigned a mentor for each course and also get to choose how long that want to participate on the course.',
    featuredImg: [
      'image/project3/homepage4.png',
      'image/project3/classes.png',
      'image/project3/addclass.png',
      'image/project3/signup.png',
    ],
    technologies: ['HTML/Css', 'Ruby on Rails', 'React'],
    live: 'https://codershub-8u8o.onrender.com/login',
    source: 'https://github.com/frnega/Book-An-Appointment-Front-End',
  },
  5: {
    name: 'DR Tekalign Nega',
    description: 'Website built using wordpress',
    featuredImg: [
      'image/project4/homepage5.png',
      'image/project4/main.png',
      'image/project4/detail.png',
      'image/project4/details2.png',
    ],
    technologies: ['WordPress', 'Scripts','Avada Team'],
    live: 'https://tekalignnega.com/',
    source: '#',
  },
  6: {
    name: 'SpaceX-Hub',
    description: 'This project involves building a simple React application using Redux to display a list of missions and rockets fetched from an API. Additionally, it allows users to make reservations for the missions.',

    featuredImg: [
      'image/project5/homepage6.png',
      'image/project5/mission.png',
      'image/project5/profile.png',
      'image/project5/reserve.png',
    ],
    technologies: ['HTML/Css', 'React/Redux', 'JavaScript'],
    live: 'https://spacex-hub-tefm.onrender.com/',
    source: 'https://github.com/frnega/SpaceX-Hub',
  },
};

const objValues = Object.keys(storeObj);

let currentImage = 0;

const changeScreeshoutIncrease = (currentPopup) => {
  if (currentImage > 4) {
    currentImage = -1;
  }
  document.querySelector(`.popup-${currentPopup + 1} .popupimgmac`).setAttribute('src', storeObj[currentPopup + 1].featuredImg[currentImage >= 3 ? currentImage = 0 : currentImage += 1]);
  for (let i = 1; i <= 4; i += 1) {
    document.querySelector(`.popup-${currentPopup + 1} .pimg-${i} img`).classList.remove('choosenImage');
  }
  document.querySelector(`.popup-${currentPopup + 1} .pimg-${currentImage + 1} img`).classList.add('choosenImage');
};
const changeScreeshoutDecrease = (currentPopup) => {
  if (currentImage < 0) {
    currentImage = 5;
  }

  document.querySelector(`.popup-${currentPopup + 1} .popupimgmac`).setAttribute('src', storeObj[currentPopup + 1].featuredImg[currentImage <= 0 ? currentImage = 3 : currentImage -= 1]);
  for (let i = 1; i <= 4; i += 1) {
    document.querySelector(`.popup-${currentPopup + 1} .pimg-${i} img`).classList.remove('choosenImage');
  }
  document.querySelector(`.popup-${currentPopup + 1} .pimg-${currentImage + 1} img`).classList.add('choosenImage');
};

for (let i = 0; i < objValues.length; i += 1) {
  document.querySelector(`.popup-${i + 1} p`).textContent = storeObj[i + 1].description;
  document.querySelector(`.popup-${i + 1} h5`).textContent = storeObj[i + 1].name;
  document.querySelector('.popupimgmac').setAttribute('src', storeObj[1].featuredImg[0]);

  for (let j = 0; j < storeObj[i + 1].featuredImg.length; j += 1) {
    document
      .querySelector(`.popup-${i + 1} .pimg-${j + 1} img`)
      .setAttribute('src', storeObj[i + 1].featuredImg[j]);
  }
  for (let j = 0; j < storeObj[i + 1].technologies.length; j += 1) {
    document.querySelector(
      `.popup-${i + 1} .first-buttons .tech${j + 1}`,
    ).textContent = storeObj[i + 1].technologies[j];
  }
  document
    .querySelector(`.popup-${i + 1} .live`)
    .setAttribute('href', storeObj[i + 1].live);
  document
    .querySelector(`.popup-${i + 1} .source`)
    .setAttribute('href', storeObj[i + 1].source);
  document.querySelector(`.popup-${i + 1} .vector-1`).addEventListener('click', () => changeScreeshoutDecrease(i));
  document.querySelector(`.popup-${i + 1} .vector-2`).addEventListener('click', () => changeScreeshoutIncrease(i));
  document.querySelector(`.popup-${i + 1} .third-buttons a`).addEventListener('click', (e) => {
    const className = e.path['5'].classList.value;
    if (className[className.length - 1] === '1') {
      document.getElementsByClassName(`popup-${className[className.length - 1]}`)[0].classList.add('hidden');
      callsClose();
      callsOpen();
      document.getElementsByClassName(`popup-${6}`)[0].classList.remove('hidden'); // Show popup-1
    } else {
      document.getElementsByClassName(`popup-${className[className.length - 1]}`)[0].classList.add('hidden');
      callsClose();
      callsOpen();
      document.getElementsByClassName(`popup-${className[className.length - 1] - 1}`)[0].classList.remove('hidden');
    }
  });
  document.querySelector(`.popup-${i + 1} .third-buttons li:last-child a`).addEventListener('click', (e) => {
    const className = e.path['5'].classList.value;

    if (className[className.length - 1] === '6') {
      document.getElementsByClassName(`popup-${className[className.length - 1]}`)[0].classList.add('hidden');
      callsClose();
      callsOpen();
      document.getElementsByClassName(`popup-${1}`)[0].classList.remove('hidden'); // Show popup-1
    } else {
      document.getElementsByClassName(`popup-${className[className.length - 1]}`)[0].classList.add('hidden');
      callsClose();
      callsOpen();
      document.getElementsByClassName(`popup-${Number(className[className.length - 1]) + 1}`)[0].classList.remove('hidden'); // Show popup-1
    }
  });
}

// eslint-disable-next-line no-unused-vars
function ValidateEmail() {
  const email = document.getElementById('mail');
  const form = document.getElementById('form');
  const errorElement = document.getElementById('error');
  const userName = document.getElementById('name');
  const message = document.getElementById('Message');

  const preserveData = function (userName, message, email) {
    let formId = {};
    if (localStorage.getItem('formId')) {
      formId = JSON.parse(localStorage.getItem('formId'));
    }
    formId.userNameId = userName.value;
    formId.emailId = email.value;
    formId.messageId = message.value;
    localStorage.setItem('formId', JSON.stringify(formId));
  };

  const errorPresent = function (e) {
    if (email.value !== email.value.toLowerCase()) {
      e.preventDefault();
      errorElement.innerText = "Please enter the email with lower case letter's";
    } else {
      preserveData(userName, message, email);
    }
  };

  window.addEventListener('scroll', () => {
    const headlineRect = document.querySelector('.headline').getBoundingClientRect();
    const portfolio = document.querySelector('.Works').getBoundingClientRect();
    const About = document.querySelector('.About-myself').getBoundingClientRect();
    const contact = document.querySelector('footer').getBoundingClientRect();

    if (headlineRect.y + 500 >= 0) {
      document.querySelector('#head-1').classList.add('hover');
      document.querySelector('#head-2').classList.remove('hover');
      document.querySelector('#head-3').classList.remove('hover');
      document.querySelector('#head-4').classList.remove('hover');
    } else if (portfolio.y + 900 >= 0) {
      document.querySelector('#head-1').classList.remove('hover');
      document.querySelector('#head-2').classList.add('hover');
      document.querySelector('#head-3').classList.remove('hover');
      document.querySelector('#head-4').classList.remove('hover');
    } else if (About.y + 500 >= 0) {
      document.querySelector('#head-1').classList.remove('hover');
      document.querySelector('#head-2').classList.remove('hover');
      document.querySelector('#head-3').classList.add('hover');
      document.querySelector('#head-4').classList.remove('hover');
    } else if (contact.y >= 0) {
      document.querySelector('#head-1').classList.remove('hover');
      document.querySelector('#head-2').classList.remove('hover');
      document.querySelector('#head-3').classList.remove('hover');
      document.querySelector('#head-4').classList.add('hover');
    }
  });

  form.addEventListener('submit', errorPresent);
  const formId = JSON.parse(localStorage.getItem('formId'));
  if (!document.getElementById('mail').value && (localStorage.length > 0)) {
    document.getElementById('mail').value = formId.emailId;
  }
  if (!document.getElementById('name').value && (localStorage.length > 0)) {
    document.getElementById('name').value = formId.userNameId;
  }
  if (!document.getElementById('Message').value && (localStorage.length > 0)) {
    document.getElementByfId('Message').value = formId.messageId;
  }
}