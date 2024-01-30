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
const main = document.querySelector('#directory');

const mainHeader = document.createElement('h1');
mainHeader.textContent = "Beto Na Beto Directory";
main.appendChild(mainHeader);

function populate(data){
    data['companies'].forEach(company => {
        
        const section = document.createElement('div');
        const name = document.createElement('p');
        const links = document.createElement('a');
        const address = document.createElement('p');
        const number = document.createElement('p');

        name.textContent = company.names;
        address.textContent = company.addresses;
        
        links.href = company.website;
        links.textContent = company.website;
        
        number.textContent = company.phone;

        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(number);
        section.appendChild(links);

        main.appendChild(section);
    });


}


getAPI(url);