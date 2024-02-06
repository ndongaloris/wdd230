const dateTime = document.querySelector('#timestamp');

const dates = new Date();
let dateStorage = window.localStorage.getItem('time') || 0;

localStorage.setItem("time", dates);
dateTime.textContent = dates;