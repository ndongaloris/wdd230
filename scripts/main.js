const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation")

hamButton.addEventListener('click', () =>{
    hamButton.classList.toggle('open');
    navigation.classList.toggle('open');
})

const modeButton = document.querySelector("#modeButton");
const body = document.querySelector('body');
// const nav = document.querySelector('nav');

modeButton.addEventListener('click', () =>{
        body.classList.toggle('dark');
        if (document.body.classList.contains('dark')){
            modeButton.src = 'images/light-mode.svg';
            hamButton.style.background = 'white';
        }
        else{
            modeButton.src = 'images/dark-mode.svg';
        }
})