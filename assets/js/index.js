// menu button
let btn = document.getElementById("btnMenu");
let closeBtn = document.querySelector(".menu__closeBtn");
let menu = document.querySelector(".menu__subnav-list");

function showMenu() {
    if(menu.style.display === 'none'){
        menu.style.display = 'flex';
        closeBtn.style.display = 'block';
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

//scroll
