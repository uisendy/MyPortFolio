const workSection = document.querySelector('.work-section');
const workSectionPopup = document.querySelector('.work-section-popup');

const workCards = {
  cardOne: {
    id: 0,
    title: 'Tonic',
    author: 'canopy',
    date: 2016,
    devPosition: 'Back End Dev',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgsrc: './images/Work-section/Snapshoot-Portfolio.png',
    technologies: ['html', 'css', 'javascript', 'ruby', 'bootstrap', 'github'],
    linkToSource: 'https://uisendy.github.io/MyPortFolio/',
    LinkToLiveVer: 'https://github.com/uisendy/MyPortFolio',
  },
  cardTwo: {
    id: 1,
    title: 'Multi-Post Stories',
    author: 'facebook',
    date: 2015,
    devPosition: 'Full Stack Dev',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgsrc: './images/Work-section/Snapshoot-Portfolio-1.png',
    technologies: ['html', 'css', 'javascript', 'ruby', 'bootstrap', 'github'],
    linkToSource: 'https://uisendy.github.io/MyPortFolio/',
    LinkToLiveVer: 'https://github.com/uisendy/MyPortFolio',
  },
  cardThree: {
    id: 2,
    title: 'Facebook 360',
    author: 'facebook',
    date: 2015,
    devPosition: 'Full Stack Dev',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgsrc: './images/Work-section/Snapshoot-Portfolio-2.png',
    technologies: ['html', 'css', 'javascript', 'ruby', 'bootstrap', 'github'],
    linkToSource: 'https://uisendy.github.io/MyPortFolio/',
    LinkToLiveVer: 'https://github.com/uisendy/MyPortFolio',
  },
  cardFour: {
    id: 3,
    title: 'Uber Navigation',
    author: 'Uber',
    date: 2016,
    devPosition: 'Lead Developer',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgsrc: './images/Work-section/Snapshoot-Portfolio-3.png',
    technologies: ['html', 'css', 'javascript', 'ruby', 'bootstrap', 'github'],
    linkToSource: 'https://uisendy.github.io/MyPortFolio/',
    LinkToLiveVer: 'https://github.com/uisendy/MyPortFolio',
  },
};

Object.keys(workCards).forEach((cards) => {
  if (Object.hasOwnProperty.call(workCards, cards)) {
    const card = workCards[cards];
    workSection.innerHTML += `<div class="work-card card-1">
      <div class="work-snapshot">
        <img src="${card.imgsrc}" alt="Card Images" />
      </div>
      <article class="work-details">
        <h3 class="work-header">${card.title}</h3>
        <div class="work-short-desc">
          <small class="point-name">${card.author}</small>
          <i class="fa-solid fa-circle"></i>
          <small>${card.devPosition}</small>
          <i class="fa-solid fa-circle"></i>
          <small>${card.date}</small>
        </div>
        <p class="work-details-des">
          ${(card.description.length) >= 90 ? `${(card.description).substring(0, 90)}...` : card.description}
        </p>
        <ul class="work-categories">
          <li class="work-category">HTML</li>
          <li class="work-category ruby-11">Ruby on Rails</li>
          <li class="work-category">CSS</li>
          <li class="work-category">javaScript</li>
        </ul>
        <a href="" id = "${card.id}" class="project-btn popup-btn">See Project</a>
      </article>
    </div>`;
  }
});

const popupButton = document.querySelectorAll('.popup-btn');

popupButton.forEach((popup) => {
  popup.addEventListener('click', (e) => {
    e.preventDefault();
    Object.keys(workCards).forEach((cards) => {
      if (Object.hasOwnProperty.call(workCards, cards)) {
        const card = workCards[cards];
        if (card.id.toString() === popup.id.toString()) {
          workSectionPopup.innerHTML = `
              <div class="work-section-popup">
                <div class="work-wrapper">
                  <div class="work-card-pop">
                  <div class = "work-card-pop-close">
                    <div class = "pop-title">
                      <h3 class="work-header">${card.title}</h3>
                      <div class="work-short-desc">
                        <small class="point-name">${card.author}</small>
                        <i class="fa-solid fa-circle"></i>
                        <small>${card.devPosition}</small>
                        <i class="fa-solid fa-circle"></i>
                        <small>${card.date}</small>
                      </div>
                    </div>
                    <div class="times"> <i class="fa-solid fa-xmark"></i> </div>
                  </div>
                    <article class="work-details-pop">
                      <div class="work-snapshot-pop">
                      <img src="${card.imgsrc}" alt="Card Images" />
                      </div>
                      <div class ="pop-large">
                        <p class="work-details-des">
                        ${(card.description)}
                        </p>
                        <div class = "pop-large-lhs">
                          <ul class="work-categories work-cat-pop">
                            <li class="work-category">html</li>
                            <li class="work-category ruby-11">Ruby on Rails</li>
                            <li class="work-category">CSS</li>
                            <li class="work-category">javaScript</li>
                          </ul>
                          <div class="popup-btn-area">
                            <a href="https://github.com/uisendy/MyPortFolio" class="project-btn popup-btn">See Source <img class="imgSrc" src="./images/Icon -GitHub.png"/> </a>
                            <a href="https://uisendy.github.io/MyPortFolio/" class="project-btn popup-btn">See Live <img class="imgSrc" src="./images/Icon - Export.png"/></a>
                          </div>
                      </div>
                      </div>
                      
                    </article>
                  </div>
                </div>
              </div>`;

          const popUpScreen = document.querySelector('.work-section-popup');
          const closePopupBtn = document.querySelector('.work-card-pop-close');
          closePopupBtn.addEventListener('click', () => {
            popUpScreen.innerHTML = '';
          });
        }
      }
    });
  });
});

const HamburgerMenu = document.querySelector('.hamburger-menu');
const MobileNav = document.querySelector('.mobile-nav-links');
const MobileNavLists = document.querySelectorAll('.mobile-links');

HamburgerMenu.addEventListener('click', () => {
  HamburgerMenu.classList.toggle('is-active');
  MobileNav.classList.toggle('is-active');
});

MobileNavLists.forEach((link) => {
  link.addEventListener('click', () => {
    HamburgerMenu.classList.toggle('is-active');
    MobileNav.classList.toggle('is-active');
  });
});

// form Validation
const form = document.querySelector('.form-container');
const statusMsg = document.querySelector('.validate-status');
const successMsg = 'Validation Successful';
const errorMsg = 'Validation Uncessful: Check for errors';
const nameErrorMsg = '! Please enter your name';
const emailErrorMsg = '! Please enter your email';
const invalidEmailMsg = '! Please enter a correct email address format';
const textErrorMsg = '! Please write a brief Message';
const emailRegex = /^^[a-z0-9_\-.]+@([a-z0-9-_]+\.)+[a-z0-9-]{2,4}$/g;
const contactFormData = [];

const showMessage = (input, text, type) => {
  const alert = input.parentNode.querySelector('small');
  alert.innerText = text;
  return type;
};

function showInvalid(input, text) {
  return showMessage(input, text, false);
}

function showValid(input) {
  return showMessage(input, '', true);
}

function hasValue(input, text) {
  if (input.value.trim() === '') {
    return showInvalid(input, text);
  }
  return showValid(input);
}

function emailCheck(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showInvalid(input, invalidMsg);
  }
  return true;
}
function iconCheck(e, name, max) {
  if (name === 'email') {
    if (e.target.name === name) {
      if (emailRegex.test(e.target.value.trim()) && e.target.value.length < max) {
        e.target.parentNode.querySelector('.valid-icon').classList.add('is-active');
        e.target.parentNode.querySelector('.invalid-icon').classList.remove('is-active');
      } else {
        e.target.parentNode.querySelector('.invalid-icon').classList.add('is-active');
        e.target.parentNode.querySelector('.valid-icon').classList.remove('is-active');
      }
    }
  } else if (e.target.name === name) {
    if (e.target.value && e.target.value.length < max) {
      e.target.parentNode.querySelector('.valid-icon').classList.add('is-active');
      e.target.parentNode.querySelector('.invalid-icon').classList.remove('is-active');
    } else {
      e.target.parentNode.querySelector('.invalid-icon').classList.add('is-active');
      e.target.parentNode.querySelector('.valid-icon').classList.remove('is-active');
    }
  }
}

function clearFormInput(element) {
  const elementsArray = [...element.parentNode.querySelectorAll('i')];
  elementsArray.forEach((element) => {
    element.classList.remove('is-active');
  });
}
function getFromLS() {
  const retrievedData = JSON.parse(localStorage.getItem('contactData'));
  return retrievedData;
}

function fillFormFromStorage() {
  const retrievedData = getFromLS();
  if (retrievedData) {
    form.elements.name.value = retrievedData[0].name;
    form.elements.email.value = retrievedData[0].email;
    form.elements.message.value = retrievedData[0].message;
  }
}

fillFormFromStorage();

function storeToLS() {
  const retrievedData = getFromLS();
  if (retrievedData) {
    contactFormData.concat(retrievedData);
  }

  const data = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  contactFormData.unshift(data);
  localStorage.setItem('contactData', JSON.stringify(contactFormData));
}

form.addEventListener('input', (e) => {
  iconCheck(e, 'name', 30);
  iconCheck(e, 'email', 30);
  iconCheck(e, 'message', 500);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameValid = hasValue(form.elements.name, nameErrorMsg);
  const emailValid = emailCheck(form.elements.email, emailErrorMsg, invalidEmailMsg);
  const textValid = hasValue(form.elements.message, textErrorMsg);

  if (nameValid && emailValid && textValid) {
    storeToLS();
    form.elements.name.value = '';
    form.elements.email.value = '';
    form.elements.message.value = '';
    clearFormInput(form);
    statusMsg.classList.add('success');
    statusMsg.innerText = successMsg;
    statusMsg.classList.remove('error');
  } else {
    statusMsg.classList.add('error');
    statusMsg.innerText = errorMsg;
    statusMsg.classList.remove('success');
  }
});