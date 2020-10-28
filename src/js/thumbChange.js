'use strict';

/* 
サムネイルをクリックすると画像を切り替える
*/

/*
アイコン撮影プラン
*/
const iconThumbs = document.querySelectorAll('.icon-img');
iconThumbs.forEach(function(item, index) {
    item.onclick = function() {
        document.querySelector('.js-icon-img').src = this.dataset.image;
    }
})

/*
カップル撮影プラン
*/
const coupleThumbs = document.querySelectorAll('.couple-img');
coupleThumbs.forEach(function(item, index) {
    item.onclick = function() {
        document.querySelector('.js-couple-img').src = this.dataset.image;
    }
})

/*
結婚式撮影プラン
*/
const weddingThumbs = document.querySelectorAll('.wedding-img');
weddingThumbs.forEach(function(item, index) {
    item.onclick = function() {
        document.querySelector('.js-wedding-img').src = this.dataset.image;
    }
})

