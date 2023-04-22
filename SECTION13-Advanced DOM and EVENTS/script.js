'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
//const btnScrollTo = document.querySelector('.btn--scroll-to');
//const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
//const tabs = document.querySelectorAll('.operations__tab');
//const tabsContainer = document.querySelector('.operations__tab-container');
//const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

//const header = document.querySelector('.header');
//const allSections = document.querySelectorAll('.section');
//console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent =
// 'We use cookies for improved functionality and analytics.';

message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//header.prepend(message);
//header.append(message);
//header.append(message.cloneNode(true));

//header.before(message);
//header.after(message);

//Delete elements

//document
// .querySelector('.btn--close-cookie')
// .addEventListener('click', function (e) {
//  e.preventDefault();
// message.remove();
// message.parentElement.removeChild(message);
//});

// styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

logo.getAttribute('src');

const link = document.querySelector('.nav__link--btn');

console.log(link.href);
//console.log(link.getAtttribute('href'));

//Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// Do not use
//logo.className = 'Romane';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll(X/Y)', window.pageXOffset, pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight.clientWidth
  );

  // scrolling
  window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  section1.scrollIntoView({ behavior: 'smooth' });
});
///////////////////////////////////////////////////////////////////////////
// page navigation
//document.querySelectorAll('.nav__links').forEach(function (el) {
// el.addEventListener('click', function (e) {
//e.preventDefault();
//const id = this.getAttribute('href');
// console.log(id);
// document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
// });
//});

// Event delegation

// 1. ADD EVENT LISTENER TO COMMON PARENT ELEMENT
// 2. DETERMINE WHAT ELEMENT ORIGINATED THE EVENT

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault(e);

  // MATCHING STRATEGY
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// TABBED COMPONENT

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //GUARD CLAUSE
  if (!clicked) return;
  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// MENU FADE ANIMATION

const handlerHover = function (e) {
  console.log(this, e.currentTarget);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav');
    querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
  // Passing 'argument' into handler
  nav.addEventListener('mouseover', handlerHover.blind(0.5));

  nav.addEventListener('mouseout', handlerHover.blind(1));
};

// Sticky navigation

//const initialCoords = section1.getBoundingClientRect();
//window.addEventListener('scroll', function (e) {
// if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
// else nav.classList.remove('sticky');
//});

// Sticky navigation: Intersection Observer API
//const obsCallBack = function (entries, observer) {
// entries.forEach(entry => {
//   console.log(entry);
// });
//};

//const obsOptions = {
//  root: null,
//  treshold: [0, 0.2],
//};

//const observer = new IntersectionObserver(obsCallBack, obsOptions);
//observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
//const headerObserver = new IntersectionObserver(stickyNav, {
// root: null,
////treshold: 0,
// rootMargin: `-${navHeight}px`,
//});
//headerObserver.observe(header);

//Reveal sections

//const allSections = document.querySelectorAll('.section');
//const revealSection = function (entries, observer) {
//  const [entry] = entries;
// console.log(entry);

// if (!entry.isIntersecting) return;
// entry.target.classList.remove('section--hidden');
//};

//const sectionObserver = new IntersectionObserver(revealSection, {
//root: null,
///treshold: 0.15,
//});

//allSections.forEach(function (section) {
// sectionObserver.observe(section);
//});
// section.classList.add('section--hidden');
//observer.unobserve(entry.target);
//});
// Types of events and event handlers

//const h1 = document.querySelector('h1');

//const alertH1 = function (e) {
// alert('onmouseenter: Great! You are reading the heading');
//};

//h1.addEventListener('mouseenter', alertH1);

//setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//h1.onmouseenter = function (e) {
// alert('onmouseenter: Great! You are reading the heading');
//};

// event propagation in practice

// rgb(255, 255, 255)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, 
 ${randomInt(0, 255)},
  ${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

// stop propagation
//e.stopPropagation();

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target);
  console.log(e.currentTarget === this);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  },
  false
);

// DOM traversing

//const h1 = document.querySelector('h1');

// Going downwards : child

// Going upwards: parents

//console.log(h1.parentNode);
//console.log(h1.parentElement); //same

//h1.closest('.header').style.background = 'var(--gradient-secondary)';

//h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
//console.log(h1.previousElementSibling);
//console.log(h1.nextElementSibling);

//console.log(h1.previousSibling);
//console.log(h1.nextSibling);

//console.log(h1.parentElement.children);
//[...h1.parentElement.children].forEach(function (el) {
//  if (el !== h1) el.style.transform = 'scale(0.5)';
//});

// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();
};

// Lifecycle DOM events

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

//window.addEventListener('beforeunload', function (e) {
// e.preventDefault();
//console.log(e);
// e.returnValue = 'message';
//});
