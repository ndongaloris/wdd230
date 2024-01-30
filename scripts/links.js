const baseUrl = "https://ndongaloris.github.io/wdd230/";

const linksUrl = "https://ndongaloris.github.io/wdd230/data/links.json";

async function getLinks(){
    const response = await fetch(linksUrl);
    try{
        if (response.ok){
            const data = await response.json();
            displayLinks(data);
        }
        else{
            throw Error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}

function displayLinks(weeks){
    const course = document.querySelector("#course");
    weeks["weeks"].forEach(week => {
        const li = document.createElement('li');
        
        var list = [];
        week['links'].forEach(link =>{
            const a = document.createElement('a');
            a.textContent = `${link.title}`;
            a.href = link.url;
            list.push(a);    
        })
        
        li.innerHTML = `${week.week}:`;
        list.forEach(link =>{
            li.appendChild(link);
            if (list.indexOf(link) != list.length -1){
                li.append(" |");
            }
        })

        course.appendChild(li);
    });
}

getLinks()