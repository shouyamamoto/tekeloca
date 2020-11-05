'use strict';

/* 
サムネイルをクリックすると画像を切り替える
*/

/*
アイコン撮影プラン
*/
const iconThumbs = document.querySelectorAll('.icon-img');
iconThumbs.forEach((iconThumb, index) => {
    iconThumb.addEventListener('click', ()=> {
        document.querySelector('.js-icon-img').src = iconThumb.dataset.image;
    });
})

/*
カップル撮影プラン
*/
const coupleThumbs = document.querySelectorAll('.couple-img');
coupleThumbs.forEach((coupleThumb, index) => {
    coupleThumb.addEventListener('click', ()=> {
        document.querySelector('.js-couple-img').src = coupleThumb.dataset.image;
    });
})

/*
結婚式撮影プラン
*/
const weddingThumbs = document.querySelectorAll('.wedding-img');
weddingThumbs.forEach((weddingThumb, index) => {
    weddingThumb.addEventListener('click', ()=> {
        document.querySelector('.js-wedding-img').src = weddingThumb.dataset.image;
    });
})

