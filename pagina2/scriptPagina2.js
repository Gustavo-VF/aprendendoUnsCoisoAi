const btSortear = document.getElementById('Sortear');
const pokmon = document.getElementById('pokmon');
const input1 = document.getElementById('input1');
let pokemons = [];
let nRandon = -1;
let pokemmonSorteado = [];
let historicoPoke = [];

function sortear() {
    return Math.floor(Math.random() * 1025) + 1;
}

btSortear.onclick = () => {
    nRandon = sortear();
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${nRandon}.png`;
    pokmon.src = url;

    pokemmonSorteado = pokemons.find(p => p.id === nRandon);





    banner.style.display = "none";
    inputText.style.display = "block";
    input1.value = '';
    sugestao.innerHTML = '';

    btSortear.style.display = "none";
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

        li.addEventListener('click', () => {
            input.value = p.name;
            sugestao.innerHTML = '';
        });

        sugestao.appendChild(li);
    });
});



Confirmar.onclick = () => {



    const input1 = document.getElementById('input1');
    if (input1.value.toLowerCase() === pokemmonSorteado.name.toLocaleLowerCase()) {
        alert('ACERTOU!!!!!!!!!!!!!!!!!!!!!!!!!!');
        inputText.style.display = "none";
        banner.style.display = "block";
        pokmon.src = '';
        btSortear.style.display = "block";
    } else {
        alert('ERROU');
        input1.value = '';
        sugestao.innerHTML = '';

        addHistorico(input1)
    }
}

function addHistorico(poke) {

    const historico = document.getElementById('historico');

    if (historicoPoke.some(poke.toLowerCase())) return;

    const pokemon = pokemons.find(p => p.name.toLowerCase() === poke.toLowerCase());

    historicoPoke.push(pokemon);



    const divPoke = document.createElement('div');
    divPoke.style.display = 'flex';
    divPoke.style.alignItems = 'center';
    divPoke.style.marginBottom = '5px';

    const imgh = document.createElement('img');
    imgh.src = pokemon.sprite;
    imgh.style.width = '50px';
    imgh.style.marginLeft = '10px';

    divPoke.appendChild(imgh);
    historico.appendChild(divPoke);
}