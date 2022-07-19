const workCards = {
  cardOne: {
    id: 1,
    title: 'Tonic',
    author: 'canopy',
    date: 2016,
    devPosition: 'Back End Dev',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imgsrc: "./images/Work-section/tonic-1.png",
    technologies: ['html', 'css', 'javascript', 'ruby', 'bootstrap', 'github'],
    linkToSource: 'https://uisendy.github.io/MyPortFolio/',
    LinkToLiveVer: 'https://github.com/uisendy/MyPortFolio',
  },
  cardTwo: {
    id: 2,
    title: 'Multi-Post Stories',
    author: 'facebook',
    date: 2015,
    devType: 'Full Stack Dev',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imgsrc: "./images/Work-section/multipost-1.svg",
    technologies: ['html', 'css', 'javascript', 'ruby', 'bootstrap', 'github'],
    linkToSource: 'https://uisendy.github.io/MyPortFolio/',
    LinkToLiveVer: 'https://github.com/uisendy/MyPortFolio',
  }, 
  cardThree: {
    id: 3,
    title: 'Facebook 360',
    author: 'facebook',
    date: 2015,
    devType: 'Full Stack Dev',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imgsrc: "./images/Work-section/tonic-2.svg",
    technologies: ['html', 'css', 'javascript', 'ruby', 'bootstrap', 'github'],
    linkToSource: 'https://uisendy.github.io/MyPortFolio/',
    LinkToLiveVer: 'https://github.com/uisendy/MyPortFolio',
  },
  cardFour: {
    id: 4,
    title: 'Uber Navigation',
    author: 'Uber',
    date: 2016,
    devType: 'Lead Developer',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imgsrc: "./images/Work-section/multipost-2.svg",
    technologies: ['html', 'css', 'javascript', 'ruby', 'bootstrap', 'github'],
    linkToSource: 'https://uisendy.github.io/MyPortFolio/',
    LinkToLiveVer: 'https://github.com/uisendy/MyPortFolio',
  }
};

const workSection = document.querySelector('.work-section')
 
Object.keys(workCards).forEach((cards) => {
  if (Object.hasOwnProperty.call(workCards, cards)) {
    const card = workCards[cards];
    console.log(card)
    workSection.innerHTML += `<div class="work-card card-1">
      <div class="work-snapshot">
        <img src="${card.imgsrc}" alt="Card Images" />
      </div>
      <article class="work-details">
        <h3 class="work-header">${card.title}</h3>
        <div class="work-short-desc">
          <small class="point-name">${card.author}</small>
          <i class="fa-solid fa-circle"></i>
          <small>${card.devType}</small>
          <i class="fa-solid fa-circle"></i>
          <small>${card.date}</small>
        </div>
        <p class="work-details-des">
          ${(card.description.length) >= 90 ? (card.description).substring(0,90) + "..." : card.description}
        </p>
        <ul class="work-categories">
          <li class="work-category">HTML</li>
          <li class="work-category ruby-11">Ruby on Rails</li>
          <li class="work-category">CSS</li>
          <li class="work-category">javaScript</li>
        </ul>
        <button type="button" class="project-btn">See project</button>
      </article>
    </div>`
  }
})

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