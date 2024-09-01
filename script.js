document.querySelectorAll('.qu').forEach(item => {
    item.addEventListener('click', () => {
        // Toggle the active class on the question element
        item.classList.toggle('active');

        // Toggle the icon from plus to minus (if needed)
        const icon = item.querySelector('.toggle-icon');
        if (icon.src.includes('icon-plus.svg')) {
            icon.src = './assets/images/icon-minus.svg';
        } else {
            icon.src = './assets/images/icon-plus.svg';
        }
    });
});
