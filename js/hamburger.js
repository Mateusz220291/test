// const ico = document.querySelector('.burger');
// const nav = document.querySelector('nav')

// ico.addEventListener("click", function () {
//     ico.classList.toggle("active");
//     nav.classList.toggle("active");

// })
const btn = document.querySelector('.burger');
const mainMenu = document.querySelector('.menu__list');
const AllNavItems = document.querySelectorAll('.menu__item')

const showMenu = () => {
    mainMenu.classList.toggle('active');
    btn.classList.toggle('active');
    AllNavItems.forEach(item => {
        item.addEventListener('click', () => {
            mainMenu.classList.remove('active');
            btn.classList.remove('active');
        })
    })
}
btn.addEventListener('click', showMenu)
