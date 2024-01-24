const hamButton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

hamButton.addEventListener('click', () =>{
    hamButton.classList.toggle('open');
    nav.classList.toggle('open');
})

const dateTime = document.querySelector('#timestamp');

const dates = new Date();
let dateStorage = window.localStorage.getItem('time') || 0;

localStorage.setItem("time", dates);
dateTime.textContent = dates;