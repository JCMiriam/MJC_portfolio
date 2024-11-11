export const toggleDropdown = () => {
    const toggleButton = document.querySelector('.dropdown-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');
    toggleButton.addEventListener('click', () => {
        dropdownContent.classList.toggle('active');
    });
};
