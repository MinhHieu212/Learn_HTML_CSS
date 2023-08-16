// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar) {
    bar.addEventListener('click', () => {
        if(nav) nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
        if(nav) nav.classList.remove('active');
    })
}