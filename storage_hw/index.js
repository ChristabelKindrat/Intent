//create dynamic div and add him to html
const root_div = document.querySelector('div');
const dynamic_wrap = document.createElement('div');
dynamic_wrap.classList.add('dynamic_wrap');
root_div.appendChild(dynamic_wrap);

//Event will be work when user clicked on arrow back/forward
window.addEventListener('popstate', function (event) {
    if (event.state && event.state.action === 'edit') {
        editFilm(event.state.movie);
    } else if (event.state && event.state.action === 'preview') {
        showDetails(event.state.movie);
    } else if (event.state && event.state.action === 'add') {
        addFilm();
    } else {
        dynamic_wrap.innerHTML = '';
    }
});

//Event will be work when user change url hash manually
window.addEventListener('hashchange', function () {
    if (location.hash === '#edit') {
        let filmId = location.search.substring(4, location.search.length);
        let film = initialFilms.find((film) => film.id === filmId);
        editFilm(film);

    } else if (location.hash === '#preview') {
        let filmId = location.search.substring(4, location.search.length);
        let film = initialFilms.find((film) => film.id === filmId);
        showDetails(film);

    } else if (location.hash === '#add') {
        addFilm();

    } else {
        dynamic_wrap.innerHTML = '';
    }
});

//The function that works when you click on button 'Edit'
function editFilm(film) {
    history.pushState({action: 'edit', movie: film}, null, `?id=${film.id}#edit`);
    dynamic_wrap.innerHTML = '';

    let form_edit = document.createElement("form");
    form_edit.setAttribute('id', 'edit');

    let title_edit = document.createElement("input");
    title_edit.placeholder = `Write Title to change : ${film.title}`;
    title_edit.setAttribute('type', 'text');
    title_edit.setAttribute('required', 'true');
    title_edit.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            category_edit.focus();
        }
    });

    let category_edit = document.createElement("input");
    category_edit.placeholder = `Write Category of film to change : ${film.category}`;
    category_edit.setAttribute('type', 'text');
    category_edit.setAttribute('required', 'true');
    category_edit.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            img_url_edit.focus();
        }
    });

    let img_url_edit = document.createElement("input");
    img_url_edit.placeholder = 'Write image of film to change :';
    img_url_edit.setAttribute('type', 'text');
    img_url_edit.setAttribute('required', 'true');
    img_url_edit.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            plot_edit.focus();
        }
    });

    let plot_edit = document.createElement("input");
    plot_edit.placeholder = 'Write plot about film :';
    plot_edit.setAttribute('type', 'text');
    plot_edit.setAttribute('required', 'true');
    plot_edit.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            button_save.focus();
        }
    });

    let button_save = document.createElement('button');
    button_save.innerText = 'save changes';
    let button_cancel = document.createElement('button');
    button_cancel.innerText = 'cancel changes';
    form_edit.append(title_edit, category_edit, img_url_edit, plot_edit, button_save, button_cancel);
    dynamic_wrap.appendChild(form_edit);

    button_save.onclick = function (ev) {
        ev.preventDefault();

        film.title = title_edit.value;
        film.category = category_edit.value;
        film.imageUrl = img_url_edit.value;
        film.plot = plot_edit.value;

        title_edit.value = '';
        category_edit.value = '';
        img_url_edit.value = '';
        plot_edit.value = '';

        localStorage.setItem('films', JSON.stringify(initialFilms));
        showDetails(film);

        const modal_edit_save = document.createElement('div');
        const close_modal_edit_save = document.createElement('button');

        modal_edit_save.classList.add('modal');
        close_modal_edit_save.classList.add('close_modal');

        modal_edit_save.innerHTML = 'Changes saved successfully!';
        close_modal_edit_save.innerHTML = 'Ok';

        modal_edit_save.appendChild(close_modal_edit_save);
        dynamic_wrap.appendChild(modal_edit_save);

        modal_edit_save.style.display = 'block';
        close_modal_edit_save.onclick = () => modal_edit_save.style.display = 'none';
    }

    button_cancel.onclick = function (ev) {

        const modal_edit_cancel = document.createElement('div');
        const close_modal_edit_cancel = document.createElement('button');
        const stay_modal_edit_cancel = document.createElement('button');

        modal_edit_cancel.classList.add('modal');
        close_modal_edit_cancel.classList.add('close_modal');

        modal_edit_cancel.innerHTML = 'Cancel your changes?';
        close_modal_edit_cancel.innerHTML = 'Yes';
        stay_modal_edit_cancel.innerHTML = 'No';

        modal_edit_cancel.append(close_modal_edit_cancel, stay_modal_edit_cancel);
        dynamic_wrap.appendChild(modal_edit_cancel);

        modal_edit_cancel.style.display = 'block';
        close_modal_edit_cancel.onclick = () => {
            window.history.back();
            modal_edit_cancel.style.display = 'none';
        };
        stay_modal_edit_cancel.onclick = () => modal_edit_cancel.style.display = 'none';
    }
}

//The function that works when you click on title of movie
function showDetails(film) {
    history.pushState({action: 'show', movie: film}, null, `?id=${film.id}#preview`);
    dynamic_wrap.innerHTML = '';

    const wrap_div = document.createElement('div');
    wrap_div.setAttribute('id', 'show');

    const title = document.createElement("h2");
    title.innerText = film.title;

    const category = document.createElement("h4");
    category.innerText = film.category;

    const img = document.createElement("img");
    img['src'] = film.imageUrl;

    const plot = document.createElement("p");
    plot.innerText = film.plot;

    wrap_div.append(title, category, img);
    dynamic_wrap.appendChild(wrap_div);
}

//The function that works when you click on button 'Add'
function addFilm() {
    history.pushState({action: 'edit', movieArr: initialFilms}, null, 'index.html#add');
    dynamic_wrap.innerHTML = '';

    let form_add = document.createElement("form");
    form_add.setAttribute('id', 'add');

    let title_add = document.createElement("input");
    title_add.placeholder = "Film title:";
    title_add.setAttribute('type', 'text');
    title_add.setAttribute('required', 'true');
    title_add.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            category_add.focus();
        }
    });

    let category_add = document.createElement("input");
    category_add.placeholder = "Film category:";
    category_add.setAttribute('type', 'text');
    category_add.setAttribute('required', 'true');
    category_add.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            img_url_add.focus();
        }
    });

    let img_url_add = document.createElement("input");
    img_url_add.placeholder = "Image ung to film:";
    img_url_add.setAttribute('type', 'text');
    img_url_add.setAttribute('required', 'true');
    img_url_add.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            plot_add.focus();
        }
    });

    let plot_add = document.createElement("input");
    plot_add.placeholder = "Write plot about film:";
    plot_add.setAttribute('type', 'text');
    plot_add.setAttribute('required', 'true');
    plot_add.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            button_add.focus();
        }
    });

    let button_add = document.createElement('button');
    button_add.innerText = 'add film';
    let button_back = document.createElement('button');
    button_back.innerText = 'back';
    form_add.append(title_add, category_add, img_url_add, plot_add, button_add, button_back);
    dynamic_wrap.appendChild(form_add);

    button_add.onclick = function (ev) {
        ev.preventDefault();
        let num = initialFilms.length + 1;

        let obj = {
            id: num.toString(),
            title: title_add.value,
            category: category_add.value,
            imageUrl: img_url_add.value,
            plot: plot_add.value
        };
        initialFilms.push(obj);
        localStorage.setItem('films', JSON.stringify(initialFilms));
        showDetails(obj);

        title_add.value = '';
        category_add.value = '';
        img_url_add.value = '';
        plot_add.value = '';

        const modal_add_save = document.createElement('div');
        const close_modal_add_save = document.createElement('button');

        modal_add_save.classList.add('modal');
        close_modal_add_save.classList.add('close_modal');

        modal_add_save.innerHTML = 'Film successfully added!';
        close_modal_add_save.innerHTML = 'Ok';

        modal_add_save.appendChild(close_modal_add_save);
        dynamic_wrap.appendChild(modal_add_save);

        modal_add_save.style.display = 'block';
        close_modal_add_save.onclick = () => modal_add_save.style.display = 'none';
    }

    button_back.onclick = function (ev) {
        const modal_add_cancel = document.createElement('div');
        const close_modal_add_cancel = document.createElement('button');
        const stay_modal_add_cancel = document.createElement('button');

        modal_add_cancel.classList.add('modal');
        close_modal_add_cancel.classList.add('close_modal');

        modal_add_cancel.innerHTML = 'Cancel add?';
        close_modal_add_cancel.innerHTML = 'Yes';
        stay_modal_add_cancel.innerHTML = 'No';

        modal_add_cancel.append(close_modal_add_cancel, stay_modal_add_cancel);
        dynamic_wrap.appendChild(modal_add_cancel);

        modal_add_cancel.style.display = 'block';
        close_modal_add_cancel.onclick = () => {
            window.history.back();
            modal_add_cancel.style.display = 'none';
        };
        stay_modal_add_cancel.onclick = () => modal_add_cancel.style.display = 'none';
    }
}




