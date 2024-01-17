const hamButton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

hamButton.addEventListener('click', () =>{
    hamButton.classList.toggle('open');
    nav.classList.toggle('open');
})

const visit = document.querySelector('#visit');
let numVisits = Number(window.localStorage.getItem('count'))|| 0;
let theDate = new Date().getDay()
let todayDate = Number(window.localStorage.getItem('date')) || 0;
if (numVisits === 0){
    visit.textContent = "Welcome! Let us know if you have any questions.";
}
else if((todayDate - theDate) < 1) {
    visit.textContent = "Back so soon! Awesome!";
}
else{
    visit.textContent = `You last visited ${todayDate - theDate} days ago.`;
}

numVisits++;
localStorage.setItem('count', numVisits);
localStorage.setItem('date', theDate);
