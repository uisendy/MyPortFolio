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