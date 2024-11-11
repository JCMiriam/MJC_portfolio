export const toggleDropdown = () => {
    const toggleButton = document.querySelector('.dropdown-toggle') as HTMLElement;
    const dropdownContent = document.querySelector('.dropdown-content') as HTMLElement;
  
    toggleButton.addEventListener('click', () => {
        dropdownContent.classList.toggle('active');
    });
}