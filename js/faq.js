const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    question.classList.toggle('active');
    const answer = question.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});

const clickBurger = (event) => {
  event.preventDefault();
  const navList = document.querySelector('.navigation-list');
  navList.classList.toggle('active');
};

const burger = document.querySelector('.burger');
burger.addEventListener('click', clickBurger);

window.addEventListener('scroll', () => {
  const navList = document.querySelector('.navigation-list');
  if (navList.classList.contains('active')) {
    navList.classList.remove('active');
  }
});

let form = document.getElementById('contactForm');
let button = document.getElementById('form-button');
button.addEventListener('click', () => form.reset());