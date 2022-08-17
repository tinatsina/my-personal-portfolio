const hamburger = document.querySelector('#mobile-menu-button');
const navMenu = document.querySelector('.mobile-menu');
const xBox = document.querySelector('.header-cross');
const blurBackground = document.querySelector('.headline');

// Event Listener for hamburger menu
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  blurBackground.classList.toggle('active');
});

// Event Listener for xBox on click
xBox.addEventListener('click', () => {
  navMenu.classList.remove('active');
  blurBackground.classList.remove('active');
});

// Modal target constants

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-closed-button]');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');

// Modal HTML Text Targets

const modalHeader = document.querySelector('.modal-header-text');
const modalList1 = document.querySelector('.modal-list1-text');
const modalList2 = document.querySelector('.modal-list2-text');
const modalList3 = document.querySelector('.modal-list3-text');
const modalParagraph = document.querySelector('.modal-paragraph-text');
const modalComponent1 = document.querySelector('.component-text-1');
const modalComponent2 = document.querySelector('.component-text-2');
const modalComponent3 = document.querySelector('.component-text-3');

// Button Checks Per Modal

const modalButton1 = document.querySelector('#modal-button-1');
const modalButton2 = document.querySelector('#modal-button-2');
const modalButton3 = document.querySelector('#modal-button-3');
const modalButton4 = document.querySelector('#modal-button-4');

// The Button Checks Per Modal
let buttonCountCheck = 0;

// The Modal Targets Update the Button Checks
modalButton1.addEventListener('click', () => {
  buttonCountCheck = 1;
});

modalButton2.addEventListener('click', () => {
  buttonCountCheck = 2;
});

modalButton3.addEventListener('click', () => {
  buttonCountCheck = 3;
});

modalButton4.addEventListener('click', () => {
  buttonCountCheck = 4;
});

// DOM Data from Javascript

const modalObject = {
  modal_1: {
    portHeading: 'Gamers Conference website',
    portList1: 'Pilot',
    portList2: 'Front End Dev',
    portList3: '2022',
    toolList1: 'HTML',
    toolList2: 'SCSS',
    toolList3: 'Javascript',
    paragraph: 'A gaming Conference website where gamers can get information and also keep event updates.',
    backGround: 'img/25.png',
  },
  modal_2: {
    portHeading: 'Multi Stories',
    portList1: 'Facebook',
    portList2: 'Full Stack Dev',
    portList3: '2015',
    toolList1: 'HTML',
    toolList2: 'Ruby on rails',
    toolList3: 'Javascript',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    backGround: 'img/xx.png',
  },
  modal_3: {
    portHeading: 'Facebook 360',
    portList1: 'Facebook',
    portList2: 'Full Stack Dev',
    portList3: '2015',
    toolList1: 'HTML',
    toolList2: 'Python',
    toolList3: 'Mongo DB',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    backGround: 'img/xx.png',
  },
  modal_4: {
    portHeading: 'Uber Nav',
    portList1: 'UBER',
    portList2: 'Lead Developer',
    portList3: '2018',
    toolList1: 'HTML',
    toolList2: 'CSS',
    toolList3: 'Javascript',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    backGround: 'img/xx.png',
  },
};

function dataFeeder(num) {
  if (num === 1) {
    modalHeader.textContent = modalObject.modal_1.portHeading;
    modalList1.textContent = modalObject.modal_1.portList1;
    modalList2.textContent = modalObject.modal_1.portList2;
    modalList3.textContent = modalObject.modal_1.portList3;
    modalParagraph.textContent = modalObject.modal_1.paragraph;
    modalComponent1.textContent = modalObject.modal_1.toolList1;
    modalComponent2.textContent = modalObject.modal_1.toolList2;
    modalComponent3.textContent = modalObject.modal_1.toolList3;
    document.getElementById('modal-image-1').src = 'img/25.png';
  } else if (num === 2) {
    modalHeader.textContent = modalObject.modal_2.portHeading;
    modalList1.textContent = modalObject.modal_2.portList1;
    modalList2.textContent = modalObject.modal_2.portList2;
    modalList3.textContent = modalObject.modal_2.portList3;
    modalParagraph.textContent = modalObject.modal_2.paragraph;
    modalComponent1.textContent = modalObject.modal_2.toolList1;
    modalComponent2.textContent = modalObject.modal_2.toolList2;
    modalComponent3.textContent = modalObject.modal_2.toolList3;
    document.getElementById('modal-image-1').src = 'img/08.png';
  } else if (num === 3) {
    modalHeader.textContent = modalObject.modal_3.portHeading;
    modalList1.textContent = modalObject.modal_3.portList1;
    modalList2.textContent = modalObject.modal_3.portList2;
    modalList3.textContent = modalObject.modal_3.portList3;
    modalParagraph.textContent = modalObject.modal_3.paragraph;
    modalComponent1.textContent = modalObject.modal_3.toolList1;
    modalComponent2.textContent = modalObject.modal_3.toolList2;
    modalComponent3.textContent = modalObject.modal_3.toolList3;
    document.getElementById('modal-image-1').src = 'img/09.png';
  } else if (num === 4) {
    modalHeader.textContent = modalObject.modal_4.portHeading;
    modalList1.textContent = modalObject.modal_4.portList1;
    modalList2.textContent = modalObject.modal_4.portList2;
    modalList3.textContent = modalObject.modal_4.portList3;
    modalParagraph.textContent = modalObject.modal_4.paragraph;
    modalComponent1.textContent = modalObject.modal_4.toolList1;
    modalComponent2.textContent = modalObject.modal_4.toolList2;
    modalComponent3.textContent = modalObject.modal_4.toolList3;
    document.getElementById('modal-image-1').src = 'img/10.png';
  }
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Modal Data Feeder
    dataFeeder(buttonCountCheck);

    modal.classList.add('active');
    overlay.classList.add('active');
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  });
});
