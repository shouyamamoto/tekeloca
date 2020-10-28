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