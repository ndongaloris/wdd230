const baseUrl = "https://ndongaloris.github.io/wdd230/";

const linksUrl = "https://ndongaloris.github.io/wdd230/data/links.json";

async function getLinks(){
    const response = await fetch(linksUrl);
    try{
        if (response.ok){
            const data = await response.json();
            console.log(data);
        }
        else{
            throw Error(await response.text());
        }
    }
    catch (error){
        console.log(error);
    }
}
getLinks()