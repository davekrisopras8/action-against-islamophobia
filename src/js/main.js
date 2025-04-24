import { initHamburgerMenu } from "./components/hamburger.js";
import { initDropdownMenu } from "./components/dropdown.js";
import '../../sass/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  initHamburgerMenu()
  initDropdownMenu()
})
