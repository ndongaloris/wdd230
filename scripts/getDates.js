const currentDate = new Date;
document.querySelector("#year").innerHTML = currentDate.getFullYear();

const lastModif = new Date(document.lastModified)
document.querySelector("#lastModified").innerHTML = `Last Modification: ${lastModif}`