import { toggleDropdown } from './dropdown';
import { navPages } from './pagination';

document.addEventListener('DOMContentLoaded', () => {
    navPages();
    toggleDropdown();
});