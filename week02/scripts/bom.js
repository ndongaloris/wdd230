const verse = document.querySelector("#favchap");
const submitted = document.querySelector("button");
const list = document.querySelector("#list");

submitted.addEventListener('click', ()=>{
    if (verse.value != ''){
        const element = document.createElement('li');
        const deleteButton = document.createElement('button');
        element.innerHTML = verse.value;
        deleteButton.innerHTML = '❌';
        element.append(deleteButton);
        list.appendChild(element);
        console.log(verse.value);
        deleteButton.addEventListener('click', () =>{
            list.removeChild(element);
            verse.focus();
        })
    }
    verse.value = '';
    return verse.focus();
})