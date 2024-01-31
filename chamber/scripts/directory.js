const hamButton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

hamButton.addEventListener('click', () =>{
    hamButton.classList.toggle('open');
    nav.classList.toggle('open');
})



const url = "https://ndongaloris.github.io/wdd230/chamber/data/members.json";

async function getAPI(url){
    const response = await fetch(url);
    try{
        if (response.ok){
            const data = await response.json();
            populate(data);
        }
        else{
            throw Error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}

const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');
const view = document.querySelector('.grid');

gridBtn.addEventListener('click',() =>{
    view.classList.add('grid');
    view.classList.remove('list');
})
listBtn.addEventListener('click', showList)

function showList(){
    view.classList.add('list');
    view.classList.remove('grid');
}

const article = document.querySelector('article');

function populate(data){
    data['companies'].forEach(company => {
        
        const section = document.createElement('div');
        const name = document.createElement('p');
        const links = document.createElement('a');
        const address = document.createElement('p');
        const number = document.createElement('p');
        const logo = document.createElement("img");

        name.textContent = company.names;
        address.textContent = company.addresses;
        
        links.href = company.website;
        links.textContent = company.website;
        
        number.textContent = company.phone;

        logo.src = company.icon;
        logo.alt = `${company.names} logo`;

        section.appendChild(logo);
        section.setAttribute("class", "grid");
        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(number);
        section.appendChild(links);

        article.appendChild(section);
    });
}



getAPI(url);