const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation")

hamButton.addEventListener('click', () =>{
    hamButton.classList.toggle('open');
    navigation.classList.toggle('open');
})

const modeButton = document.querySelector("#modeButton");
const body = document.querySelector('body');
const nav = document.querySelector('nav');
modeButton.addEventListener('click', () =>{
    body.classList.toggle('dark');
    if (document.body.classList.contains('dark')){
        modeButton.src = 'images/light-mode.svg';
        hamButton.style.background = 'white';
        nav.style.color = 'white';
    }
        else{
            modeButton.src = 'images/dark-mode.svg';
        }
})


let numVisits = parseInt(window.localStorage.getItem('numVisits')) || 0;
const visit = document.querySelector("#visit");
if (parseInt(visit === 0)){
    visit.textContent = `This is your very first time visiting`;
}
else{
    visit.textContent = numVisits;
}
numVisits++;
localStorage.setItem("numVisits", numVisits);