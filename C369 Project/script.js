document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.popup-button');
    const popups = document.querySelectorAll('.popup');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const popupId = button.getAttribute('data-popup');
            const popup = document.getElementById(popupId);
            popup.style.display = 'flex';
        });
    });

    popups.forEach(popup => {
        const closeBtn = popup.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        // Close popup when clicking outside of popup content
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.style.display = 'none';
            }
        });
    });
});
