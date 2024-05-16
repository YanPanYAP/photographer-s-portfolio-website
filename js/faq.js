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

function generateXML() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const message = document.getElementById('message').value;

  const xmlDoc = document.implementation.createDocument('', '', null);
  const contactForm = xmlDoc.createElement('ContactForm');

  const firstNameElement = xmlDoc.createElement('FirstName');
  firstNameElement.textContent = firstName;
  contactForm.appendChild(firstNameElement);

  const lastNameElement = xmlDoc.createElement('LastName');
  lastNameElement.textContent = lastName;
  contactForm.appendChild(lastNameElement);

  const emailElement = xmlDoc.createElement('Email');
  emailElement.textContent = email;
  contactForm.appendChild(emailElement);

  const phoneNumberElement = xmlDoc.createElement('PhoneNumber');
  phoneNumberElement.textContent = phoneNumber;
  contactForm.appendChild(phoneNumberElement);

  const messageElement = xmlDoc.createElement('Message');
  messageElement.textContent = message;
  contactForm.appendChild(messageElement);

  xmlDoc.appendChild(contactForm);

  const serializer = new XMLSerializer();
  const xmlString = serializer.serializeToString(xmlDoc);

  const blob = new Blob([xmlString], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'contactForm.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
