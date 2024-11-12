export const navPages = () => {
    const navItems = document.querySelectorAll('.nav-list__item');
    const pages = document.querySelectorAll('.cv-profile');
    const sidebar = document.querySelector('.cv-sidebar') as HTMLElement;

    navItems.forEach((item) => {
        const span = item.querySelector('span') as HTMLElement;

        span.addEventListener('click', () => {
        navItems.forEach((navItem) => {
            navItem.classList.remove('active');
        });

        item.classList.add('active');

        pages.forEach((page) => {
            page.classList.remove('active');
        });

        if (item.classList.contains('cv')) {
            const page1 = document.querySelector('.page-1') as HTMLElement;
            page1.classList.add('active');
            console.log(sidebar);
            sidebar.classList.remove('hidden');
        } else if (item.classList.contains('presentation')) {
            const page2 = document.querySelector('.page-2') as HTMLElement;
            page2.classList.add('active');
            sidebar.classList.remove('hidden');
        } else if (item.classList.contains('working')) {
            const page3 = document.querySelector('.page-3') as HTMLElement;
            page3.classList.add('active');
            sidebar.classList.add('hidden');
        }
        });
    });
};