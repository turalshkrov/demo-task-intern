const menuIcon = document.querySelector('.mobile-menu-icon');
const menuNavbar = document.querySelector('.nav-menu-link');
const langButton = document.querySelector('#lang');
const langsList = document.querySelector('#langs');

const menuClickHandler = () => {
  if (!menuNavbar.classList.contains("menu-active")) {
    menuNavbar.className = "nav-menu-link menu-active";
  } else {
    menuNavbar.className = "nav-menu-link";
  }
}

const langClickHandler = () => {
  if (!langsList.classList.contains("langs-menu-active")) {
    langsList.className = "navbar-btn langs-menu-active";
  } else {
    langsList.className = "navbar-btn";
  }
}

const addEventListeners = () => {
  menuIcon.addEventListener('click', menuClickHandler);
  langButton.addEventListener('click', langClickHandler);
}

addEventListeners();