const menuIcon = document.querySelector('.mobile-menu-icon');
const menuNavbar = document.querySelector('.nav-menu-link');
const langButton = document.querySelector('#lang');
const langsList = document.querySelector('#langs');
const leftBtns = [...document.querySelectorAll('.left-btn')];
const righttBtns = [...document.querySelectorAll('.right-btn')];
const movieContainers = [...document.querySelectorAll('.movies-container')];
const signInButton = document.querySelector('#sign-in-btn-navbar');
const modalCloseBtn = document.querySelector('.modal-close');
const signInmodal = document.querySelector('#sign-in-modal');
const watchlistButton = document.querySelector('#watchlist-btn');
const watchlist = document.querySelector('.watchlist');
const closeWatchlistBtn = document.querySelector('.close-watchlist');
const addToWatchlistBtns = [...document.querySelectorAll('.fa-heart')];
const removeFromWatchlistBtns = [...document.querySelectorAll('.remove-from-watchlist')];

let maxScrollNum = [...movieContainers[0].children].filter(child => child.className === 'movie-card').length - 4; // 4 is the number of movie cards currently displayed on the screen
let currentScrollNumFisrt = 0;
let currentScrollNumSecond = 0;

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

const leftClickHandler = (e) => {
  let currentScrollNum;
  const container = e.target.classList.contains('scroll-control-btn')
  ? e.target.parentElement
  : e.target.parentElement.parentElement;
  const movieCards = [...container.children].filter(child => child.className === 'movie-card');
  if (e.target.id === 'first-left' || e.target.parentElement.id === 'first-left') {
    if (currentScrollNumFisrt > 0) {
      currentScrollNumFisrt -= 1;
    }
    currentScrollNum = currentScrollNumFisrt;
  } else {
    if (currentScrollNumSecond > 0) {
      currentScrollNumSecond -= 1;
    }
    currentScrollNum = currentScrollNumSecond;
  }
  movieCards.map(card => {
    card.style = `left: calc(${currentScrollNum} * (-20% - 2rem))` ;
  });
}

const rightClickHandler = (e) => {
  let currentScrollNum;
  const container = e.target.classList.contains('scroll-control-btn')
  ? e.target.parentElement
  : e.target.parentElement.parentElement;
  const movieCards = [...container.children].filter(child => child.className === 'movie-card');
  if (e.target.id === 'first-right' || e.target.parentElement.id === 'first-right') {
    if (currentScrollNumFisrt < maxScrollNum) {
      currentScrollNumFisrt += 1;
    }
    currentScrollNum = currentScrollNumFisrt;
  } else {
    if (currentScrollNumSecond < maxScrollNum) {
      currentScrollNumSecond += 1;
    }
    currentScrollNum = currentScrollNumSecond;
  }
  movieCards.map(card => {
    card.style = `left: calc(${currentScrollNum} * (-20% - 2rem))` ;
  });
}

const modalShow = () => {
  signInmodal.classList.add('modal-active');
}

const modalHide = () => {
  signInmodal.classList.remove('modal-active');
}

const watchlistShow = () => {
  watchlist.classList.add('watchlist-active');
}

const watchlistHide = () => {
  watchlist.classList.remove('watchlist-active');
}

const addToWatchlist = (e) => {
  let imgSrc = e.target.parentElement.parentElement.firstElementChild.getAttribute('src');
  let movieTitle = e.target.parentElement.parentElement.children[1].firstElementChild.innerText;

  const movieItem = document.createElement('div');
  movieItem.className = 'watchlist-item';

  const img = document.createElement('img');
  img.className = 'watchlist-poster';
  img.src = imgSrc;

  const title = document.createElement('p');
  title.className = 'watchlist-item-title';
  title.innerText = movieTitle;

  let removeFromWatchlistBtn = document.createElement('div');
  removeFromWatchlistBtn.innerHTML += '<i class="fa-solid fa-x"></i>';
  removeFromWatchlistBtn.className = 'remove-from-watchlist';
  removeFromWatchlistBtn.addEventListener('click', (e) => removeFromWatchlist(e));

  movieItem.appendChild(img);
  movieItem.appendChild(title);
  movieItem.appendChild(removeFromWatchlistBtn);

  watchlist.children[1].appendChild(movieItem);
}

const removeFromWatchlist = (e) => {
  const movieItem = e.target.parentElement.parentElement;
  movieItem.remove();
}

const addEventListeners = () => {
  menuIcon.addEventListener('click', menuClickHandler);
  langButton.addEventListener('click', langClickHandler);
  leftBtns.map(btn => btn.addEventListener('click', (e) => leftClickHandler(e)));
  righttBtns.map(btn => btn.addEventListener('click', (e) => rightClickHandler(e)));
  signInButton.addEventListener('click', modalShow);
  modalCloseBtn.addEventListener('click', modalHide);
  watchlistButton.addEventListener('click', watchlistShow);
  closeWatchlistBtn.addEventListener('click', watchlistHide);
  addToWatchlistBtns.map(btn => btn.addEventListener('click', (e) => addToWatchlist(e)));
  removeFromWatchlistBtns.map(btn => btn.addEventListener('click', (e) => removeFromWatchlist(e)));
}

addEventListeners();