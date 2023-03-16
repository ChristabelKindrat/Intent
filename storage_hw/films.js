const initialFilms = [
    {
        id: '1',
        title: 'Поводир',
        category: 'Драма, Історичний',
        imageUrl: 'https://usfa.gov.ua/upload/media/2021/02/03/6019ce4e30e00-5f69f58acd0458090e285747.jpg',
        plot: 'Україна, тридцяті роки. Американський інженер Майкл Шемрок разом із сином приїздить до Харкова допомагати будувати соціалізм. Тут він закохується в актрису Ольгу Левицьку (Джамала), на яку давно має плани червоний комісар. За трагічних обставин американець гине, а його сина рятує від переслідувачів сліпий кобзар.'
    },
    {
        id: '2',
        title: 'Мавка. Лісова пісня.',
        category: 'Мультфільм',
        imageUrl: 'https://usfa.gov.ua/upload/movie-catalog/2021/12/20/61c08c9b95cf5-mavka-lisova-pisnya-1_145x211.jpg',
        plot: '"Мавка. Лісова пісня" – найочікуваніший український мультфільм останніх років. Проєкт створено за мотивами "Лісової пісні" Лесі Українки та адаптовано під жанр сімейної анімації. Також в основі мультфільму – образи зі слов’янських міфів і легенд.'
    },
    {
        id: '3',
        title: 'ОБорщ. Секретний інгредієнт',
        category: 'Документальний, Тревел, Кулінарний',
        imageUrl: 'https://usfa.gov.ua/upload/media/2021/02/03/6019d3c979927-5fbd34a7dcbce200118649f5.jpg',
        plot: 'Який український борщ справжній? На свинині, птиці, яловичині, чи може, таки на грибах? А як щодо квашеної капусти, а не свіжої, і соленого томатного розсолу замість пасти? Буряк варити, запікати чи квасити? Куштували рибний борщ?'
    }
]

//create static div and add him to html
const root_element = document.querySelector('div');
const static_part_wrap = document.createElement('div');
static_part_wrap.classList.add('static_part_wrap');
root_element.appendChild(static_part_wrap);

//create wrap div for films list
const films_render =document.createElement('div');
films_render.classList.add('films_render_wrap');
static_part_wrap.appendChild(films_render);

//this functions render films on static part of website
filmsList(initialFilms);
function filmsList(arr) {
    arr.forEach((film, id) => {
        const film_element = document.createElement('div');
        film_element.classList.add('film_element');

        const name = document.createElement('h2');
        name.textContent = film.title;
        film_element.appendChild(name);

        const edit_button = document.createElement('button');
        edit_button.textContent = 'Edit';
        film_element.appendChild(edit_button);

        edit_button.addEventListener("click", (e) => {
            e.preventDefault();
            editFilm(film);
        });

        name.addEventListener("click", (e) => {
            e.preventDefault();
            showDetails(film);
        });

        films_render.appendChild(film_element);
    });
}

//add button to add films
const add_button = document.createElement('button');
add_button.textContent = 'Add film';
static_part_wrap.appendChild(add_button);

add_button.addEventListener("click", (e) => {
    e.preventDefault();
    addFilm();
});