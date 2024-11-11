export const toggleDropdown = () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const toggleButton = dropdown.querySelector('.dropdown-toggle');
        const icon = dropdown.querySelector('.icon');
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        toggleButton.addEventListener('click', () => {
            dropdownContent.classList.toggle('active');
            if (dropdownContent.classList.contains('active')) {
                icon.classList.add('fa-caret-up');
                icon.classList.remove('fa-caret-down');
            }
            else {
                icon.classList.add('fa-caret-down');
                icon.classList.remove('fa-caret-up');
            }
        });
    });
};
