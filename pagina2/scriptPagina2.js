const btSortear = document.getElementById('Sortear');
const pokmon = document.getElementById('pokmon');
let pokemons = [];
let nRandon = -1;


function sortear() {
    return Math.floor(Math.random() * 1025) + 1;
}

btSortear.onclick = () => {
    nRandon = sortear();
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${nRandon}.png`;
    pokmon.src = url;


}


fetch('pokemons.json')
    .then(ren => ren.json())
    .then(data => {
        pokemons = data
    });

const input = document.getElementById('input1');
const sugestao = document.getElementById('sugestao');

input1.addEventListener('input', () => {


    const query = input.value.toLowerCase();
    sugestao.innerHTML = '';

    if (!query) return;

    const filtered = pokemons.filter(p => p.name.startsWith(query));

    filtered.forEach(p => {
        const li = document.createElement('li');
        li.textContent = p.name;
        sugestao.appendChild(li);
    });
});
