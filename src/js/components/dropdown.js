export function initDropdownMenu(){
    const aboutUsLink = document.querySelector('.navigation__bottom a');

    aboutUsLink.addEventListener('click', function(event) {
      event.preventDefault();

      const dropdown = this.nextElementSibling;

      dropdown.classList.toggle('active');

      const linkRect = this.getBoundingClientRect();
      const navigationRect = document.querySelector('.navigation').getBoundingClientRect();
      const leftOffset = linkRect.left - navigationRect.left;
      dropdown.style.left = leftOffset + 'px';
    });
}
