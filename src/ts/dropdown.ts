export const toggleDropdown = () => {
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(dropdown => {
        const toggleButton = dropdown.querySelector('.dropdown-toggle') as HTMLButtonElement;
        const icon = dropdown.querySelector('.icon') as HTMLElement;
        const dropdownContent = dropdown.querySelector('.dropdown-content') as HTMLElement;
  
        toggleButton.addEventListener('click', () => {
            dropdownContent.classList.toggle('active');
            
            if (dropdownContent.classList.contains('active')) {
                icon.classList.add('fa-caret-up');
                icon.classList.remove('fa-caret-down');
              } else {
                icon.classList.add('fa-caret-down');
                icon.classList.remove('fa-caret-up');
              }
        });
    });
  }