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

document.addEventListener("DOMContentLoaded", function() {
  fetch('../xml/main.xml')
      .then(response => response.text())
      .then(data => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(data, "application/xml");
          const form = document.getElementById('contactForm');
          const formElements = xmlDoc.getElementsByTagName('contactForm')[0].children;

          for (let element of formElements) {
              if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
                  const div = document.createElement('div');
                  div.classList.add('form-group');
                  const label = xmlDoc.querySelector(`label[for="${element.getAttribute('name')}"]`);
                  if (label) {
                      const labelElement = document.createElement('label');
                      labelElement.setAttribute('for', element.getAttribute('name'));
                      labelElement.textContent = label.textContent;
                      div.appendChild(labelElement);
                  }
                  const inputElement = document.createElement(element.tagName.toLowerCase());
                  for (let attr of element.attributes) {
                      inputElement.setAttribute(attr.name, attr.value);
                  }
                  div.appendChild(inputElement);
                  form.appendChild(div);
              }
          }
      })
      .catch(error => console.error('Error loading XML:', error));
});
