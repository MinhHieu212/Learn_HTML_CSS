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

// sproduct

mainImg = document.getElementById('MainImg');
smallImg = document.querySelectorAll('.SmallImg');

smallImg[0].onclick = () => {
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = () => {
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = () => {
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = () => {
    mainImg.src = smallImg[3].src;
}

//add event for href to sproduct

