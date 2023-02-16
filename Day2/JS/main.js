window.onload = function() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function() {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

document.addEventListener('DOMСontentLoaded', function(event) {
    document.querySelector('#myButton').addEventListener('click', showMore);
});

let countries = ["Абдрахманов.Д", "Барышников.А", "Бузуев.Н", "Вакилов.И", "Вильгаук.А", "Войцеховский.А",
 "Гуляев.М", "Казанцев.М", "Киселёв.М", "Койнов.Д", "Колыбина.А", "Лукьянов.Е", "Манаев.Е", "Мисник.Е",
  "Пахомов.Я", "Попов.С", "Привалов.В", "Старов.А", "Титенок.А", "Томашевский.В", "Фалалеев.Н", "Хайруллин.А", "Чернышёв.Н"];

function showMore() {
    let list = document.querySelector('#myList');
    
    for (let i = 0; i < 23 && countries.length !== 0; i++) {
        let li = document.createElement('li');
        li.innerHTML = countries.shift();
        list.append(li);
    }
}