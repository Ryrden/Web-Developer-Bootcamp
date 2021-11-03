// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');

let baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
for (let i = 0; i < 10; i++) {
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`;
    container.appendChild(newImg);
}
