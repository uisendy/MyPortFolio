const workSection = document.querySelector('.work-section');
const workSectionPopup = document.querySelector('.work-section-popup');


const workCards = {
  cardOne: {
    id: 0,
    title: 'Tonic',
    author: 'canopy',
    date: 2016,
    devPosition: 'Back End Dev',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
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
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
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
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
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
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
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
  
  popupButton.forEach(popup => {
    popup.addEventListener("click" , (e)=> {
      e.preventDefault()
      Object.keys(workCards).forEach((cards) => {
        if (Object.hasOwnProperty.call(workCards, cards)) {
           const card = workCards[cards];
           if (card.id == popup.id) {
            console.log("smile")
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
                  &times;
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
                            <a href="" class="project-btn popup-btn">See Source</a>
                            <a href="" class="project-btn popup-btn">See Live</a>
                          </div>
                      </div>
                      </div>
                      
                    </article>
                  </div>
                </div>
              </div>`;

              const popUpScreen = document.querySelector('.work-section-popup')
              const closePopupBtn = document.querySelector('.work-card-pop-close')
                closePopupBtn.addEventListener('click', () => {
                  popUpScreen.innerHTML = ''
                });
              

           }

        }
      })
    })
    
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


