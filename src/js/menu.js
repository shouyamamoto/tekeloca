'use strict';

const spMenu = document.querySelector('.sp-nav .sp-menu-btn');
const spNav = document.querySelector('.sp-nav')

spMenu.onclick = function() {
    spNav.classList.toggle('menu-open');
}

const spMenuList = document.querySelectorAll('.js-click');
for(let i = 0; i < spMenuList.length; i++) {
    spMenuList[i].addEventListener('click', ()=> {
        spNav.classList.remove('menu-open');
    }); 
}

const navPlan = document.querySelector('.js-nav-plan');
const navItems = document.querySelector('.pc-nav-plan-items');
const navPlus = document.querySelector('.pc-nav-list span');
navPlan.addEventListener('click', () => {
    navItems.classList.toggle('menu-open');
    navPlus.classList.toggle('menu-open');
});