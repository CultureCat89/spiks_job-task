const category_buttons = document.querySelectorAll('.header__categories-button-border');

category_buttons.forEach(item => {
    item.addEventListener('click', () => {
            item.classList.toggle('btn-shadow');
            item.children[0].classList.toggle('btn-clicked');
    })
})
