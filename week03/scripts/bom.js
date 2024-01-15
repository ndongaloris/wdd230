const verse = document.querySelector("#favchap");
const submitted = document.querySelector("button");
const list = document.querySelector("#list");
let chaptersArray = getChapterList() || [];


function displayList(item) {
    const element = document.createElement('li');
    const deleteButton = document.createElement('button');
    element.innerHTML = item;
    deleteButton.innerHTML = '❌';
    element.append(deleteButton);
    list.appendChild(element);
    console.log(item);
    deleteButton.addEventListener('click', () =>{
        list.removeChild(element);
        deleteChapter(element.textContent);
        item.focus();
    })
}

function setChapterList() {
    localStorage.setItem("bookList", JSON.stringify(chaptersArray));
}
function getChapterList() {
    JSON.parse(localStorage.getItem('bookList'));
}
function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length -1) // this slices off the last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
}
submitted.addEventListener('click', ()=>{
    if (verse.value != ''){ // make sure the input is not empty
        displayList(verse.value);
        chaptersArray.push(verse.value);
        setChapterList();
    }
    verse.value = '';
    return verse.focus();
})

chaptersArray.forEach(chapter => {
    displayList(chapter);
});