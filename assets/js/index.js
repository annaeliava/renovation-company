// menu button
let btn = document.getElementById("btnMenu");
let closeBtn = document.getElementsByClassName("menu__closeBtn");
let menu = document.querySelector(".menu__subnav-list");

function showMenu() {
    if(menu.style.display === 'none'){
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

function closeMenu() {
    menu.style.display = 'none';
}

btn.addEventListener("click", showMenu);
closeBtn[0].addEventListener("click", closeMenu);

