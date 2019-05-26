let answer;
let question;
let jokes=[];
localStorage.setItem('Favorite',JSON.stringify(jokes));

function loadJoke() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://official-joke-api.appspot.com/jokes/random', false);
    xhr.send();

    if (xhr.status == 200) {

        //let serialObj = JSON.stringify(xhr.responseText, ['setup', 'punchline']);
        //localStorage.setItem('Favorites', 'serialObj');
        let jsonResponse = JSON.parse(xhr.responseText);
        question = jsonResponse.setup;
        answer = jsonResponse.punchline;

        let an = document.getElementById("a");
        an.innerText = answer;
        let qu = document.getElementById("q");
        qu.innerText = question;
    } else {
        alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
    }
}

function addToFavorite() {
    jokes.push({
        q:question,
        a:answer
    });
    localStorage.setItem('Favorite',JSON.stringify(jokes));
}

function showFavorite() {
    let favorite = document.getElementById("favorite");
    favorite.innerHTML = null;
    let obj = JSON.parse(localStorage.getItem("Favorite"));
    obj.forEach((item,i)=>{
        let el1 = document.createElement('li');
        el1.innerText = item.q+" "+item.a;
        favorite.appendChild(el1);
    })
}
