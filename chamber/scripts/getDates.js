const year = new Date().getFullYear();
document.querySelector('#year').textContent = year;

const modif = new Date(document.lastModified);
document.querySelector('#lastModif').textContent = `Last Modified: ${modif}`