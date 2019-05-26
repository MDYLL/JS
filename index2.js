function loadJoke() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://official-joke-api.appspot.com/jokes/random', false);
  xhr.send();

  if (xhr.status != 200) {
    alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
  } else {

    let serialObj = JSON.stringify(xhr.responseText, ['setup', 'punchline']);
    localStorage.setItem('Favorites', 'serialObj');
    let jsonResponse=JSON.parse(xhr.responseText);
    alert(localStorage.getItem('Favorites'));
    alert(jsonResponse.setup);
    alert(jsonResponse.punchline);
  }
}
