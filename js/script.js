'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.open-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  document.body.style.overflow = ''; // Enable scrolling
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//scroll animations
const reset = ScrollReveal({
  reset: true
});
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '40px',
  duration: 600,
  delay: 250  , 
})

sr.reveal('#intro , #contact')
sr.reveal('.project1',{origin:'right'})
sr.reveal('.reverse',{origin:'left'})

