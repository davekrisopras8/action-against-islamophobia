export function initHamburgerMenu(){
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const closeBtn = document.querySelector('.mobile-menu__close');
    const mobileMenu = document.querySelector('.mobile-menu');
    document.documentElement.classList.add('loaded');


    function toggleMobileMenu() {
      const body = document.body;
      mobileMenu.classList.toggle('mobile-menu--active');
      body.classList.toggle('menu-open');
    }

    hamburgerBtn.addEventListener('click', toggleMobileMenu);
    closeBtn.addEventListener('click', toggleMobileMenu);
}
