// width

let width = document.documentElement.clientWidth;

// menu button
let btn = document.getElementById("btnMenu");
let closeBtn = document.querySelector(".menu__closeBtn");
let menu = document.querySelector(".menu__subnav-list");

function showMenu() {
    if(menu.style.display === 'none' && width >= 992){
        menu.style.display = 'flex';
        closeBtn.style.display = 'block';
    } else if (menu.style.display === 'none' && width <= 992) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
        closeBtn.style.display = 'none';
    }
}

function closeMenu() {
    menu.style.display = 'none';
    closeBtn.style.display='none';
}

btn.addEventListener("click", showMenu);
closeBtn.addEventListener("click", closeMenu);

// input[type="range"]

const rangeInputs = document.querySelectorAll('input[type="range"]');

function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
        target = document.getElementById('range')
    } 
    const min = target.min
    const max = target.max
    const val = target.value

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
})

//mobile class

function addMobile() {
    if(width <= 992) {
        let element = document.getElementById("header__container");
        element.classList.add("header__mobile");
        element.classList.remove("header__container");
        let el = document.getElementById("menu__list");
        el.classList.add("menu__list-mobile");
        el.classList.remove("menu__list");
    }
}

window.addEventListener("resize", addMobile);

addMobile();

// burger-menu 

let toggle = document.querySelector(".header__mobile-toggle");
let toggleItem_1 = document.querySelector("#toggle-one");
let toggleItem_2 = document.querySelector("#toggle-two");
let toggleItem_3 = document.querySelector("#toggle-three");
let list = document.querySelector(".header__menu");

function showMobile() {
    if(list.style.display === 'none') {
        list.style.display = 'block';
        toggleItem_1.style.background = '#5C39BA';
        toggleItem_2.style.background = '#5C39BA';
        toggleItem_3.style.background = '#5C39BA';
        menu.style.display = 'none';
    } else {
        list.style.display = 'none';
        toggleItem_1.style.background = 'white';
        toggleItem_2.style.background = 'white';
        toggleItem_3.style.background = 'white';
    }
}

toggle.addEventListener('click', showMobile);

//scroll 
let scroll = document.querySelector(".scroll__btn");

function scrllDown() {
    window.scrollBy(0, 30);
}

scroll.addEventListener('click', scrllDown)