'use strict';

const drawers = document.querySelectorAll('.price-container__detail-label');

for(let i = 0; i < drawers.length; i++) {
    drawers[i].addEventListener('click', () => {
        let drawerLabel = document.querySelectorAll('.price-container__detail-label > span')[i];
        let drawerInner = document.querySelectorAll('.price-container__detail-inner')[i];
        drawerLabel.classList.toggle('open');
        drawerInner.classList.toggle('open');
    })
}
