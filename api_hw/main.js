const form = document.querySelector('form.content__search');
const input = document.querySelector('input.content__input');
const button = document.querySelector('button.content__button');
const loader = document.querySelector('div.content__loader');
const content = document.querySelector('div.content__information');
const header = document.querySelector('div.header__user_info');
const name = document.querySelector('div.header__user_info')

form.addEventListener("submit", evt => {
        evt.preventDefault();
        loader.style.display = 'block';
        const username = input.value;
        name.innerText = username;
        input.value = '';
        getData(username);
    }
);

async function getData(username) {
   try {
       fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            loader.style.display = 'none';
            displayRepositories(data);
        })
        .catch(error => console.error(error));
   }catch (e) {
       console.log(e)
   }
}

function displayRepositories(repositories) {
    content.innerHTML = '';

    repositories.forEach(repo => {
            const repoElement = document.createElement('div');
            repoElement.classList.add('repository');

            const nameElement = document.createElement('h2');
            nameElement.textContent = repo.name;
            repoElement.appendChild(nameElement);

            const languageElement = document.createElement('p');
            languageElement.textContent = `Language: ${repo.language || 'Unknown'}`;
            repoElement.appendChild(languageElement);

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = `Description: ${repo.description || 'Unknown'}`;
            repoElement.appendChild(descriptionElement);

            content.appendChild(repoElement);
        }
    );
}
