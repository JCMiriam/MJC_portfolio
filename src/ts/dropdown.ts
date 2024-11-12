export const toggleDropdown = () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const toggleButton = dropdown.querySelector('.dropdown-toggle') as HTMLButtonElement;
    const dropdownButtonContent = dropdown.querySelector('.dropdown-btn-content') as HTMLElement;
    const icon = dropdown.querySelector('.icon') as HTMLElement;
    const dropdownContent = dropdown.querySelector('.dropdown-content') as HTMLElement;

    toggleButton.addEventListener('click', () => {
      if (dropdownContent.style.maxHeight === '0px' || dropdownContent.style.maxHeight === '') {
        dropdownContent.style.maxHeight = `${dropdownContent.scrollHeight}px`;
      } else {
        dropdownContent.style.maxHeight = '0';
      }

      if (dropdownContent.style.maxHeight !== '0px') {
        icon.classList.add('fa-caret-up');
        icon.classList.remove('fa-caret-down');

        dropdownButtonContent.textContent === 'See more'
          ? dropdownButtonContent.textContent = 'See less'
          : dropdownButtonContent.textContent = 'See more';
      } else {
        icon.classList.add('fa-caret-down');
        icon.classList.remove('fa-caret-up');

        dropdownButtonContent.textContent === 'See less'
          ? dropdownButtonContent.textContent = 'See more'
          : dropdownButtonContent.textContent = 'See less';
      }
    });
  });
};