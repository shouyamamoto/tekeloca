'use strict';

// href="#"のaタグを取得
const smoothscrollTrigger = document.querySelectorAll('a[href^="#"]');

// 取得したaを繰り返しでクリックイベントを追加する
for (let i = 0; i < smoothscrollTrigger.length; i++) {
    smoothscrollTrigger[i].addEventListener('click', (e)=> {
        // aのジャンプをキャンセル
        e.preventDefault();
        // hrefの中身を取得
        let href = smoothscrollTrigger[i].getAttribute('href');
        // #を除去
        let targetElement = document.getElementById(href.replace('#', ''));

        const rect = targetElement.getBoundingClientRect().top; //ブラウザからの高さを取得
        const offset = window.pageYOffset; //現在のスクロール量を計測
        const gap = 60; //ヘッダーの高さ
        const target = rect + offset - gap;

        window.scrollTo({
            top: target,
            behavior: 'smooth',
        });
    });
}
