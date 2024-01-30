const hamButton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

hamButton.addEventListener('click', () =>{
    hamButton.classList.toggle('open');
    nav.classList.toggle('open');
})

const section = document.createElement('section');
const mainHeader = document.createElement('h1');
const name = document.createElement('p');
const address = document.createElement('p');
const number = document.createElement('p');
const links = document.createElement('a');