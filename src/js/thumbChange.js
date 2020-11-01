'use strict';

/* 
サムネイルをクリックすると画像を切り替える
*/

/*
アイコン撮影プラン
*/
var iconThumbs = document.querySelectorAll('.icon-img');
iconThumbs.forEach(function (item, index) {
    item.onclick = function () {
        for(let i = 0; i< iconThumbs.length; i++) {
            document.querySelectorAll('.js-icon-img')[i].src = this.dataset.image;
        }
    };    
});

/*
カップル撮影プラン
*/
const coupleThumbs = document.querySelectorAll('.couple-img');
coupleThumbs.forEach(function(item, index) {
    item.onclick = function () {
        for(let i = 0; i< iconThumbs.length; i++) {
            document.querySelectorAll('.js-couple-img')[i].src = this.dataset.image;
        }
    };
})

/*
結婚式撮影プラン
*/
const weddingThumbs = document.querySelectorAll('.wedding-img');
weddingThumbs.forEach(function(item, index) {
    item.onclick = function () {
        for(let i = 0; i< iconThumbs.length; i++) {
            document.querySelectorAll('.js-wedding-img')[i].src = this.dataset.image;
        }
    };
})


