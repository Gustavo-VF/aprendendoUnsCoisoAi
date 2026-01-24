const btSortear = document.getElementById('Sortear');
const pokmon = document.getElementById('pokmon');
const input1 = document.getElementById('input1');
let pokemons = [];
let nRandon = -1;
let pokemmonSorteado = [];
let historicoPoke = [];

const banner = document.querySelector('.banner');
const inputText = document.getElementById('inputText');


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
        titulo.style.display = "none";
        historico.innerHTML = '';

    } else {
        titulo.style.display = "block";
        addHistorico(input1.value);
        alert('ERROU');
        input1.value = '';
        sugestao.innerHTML = '';
    }
}

function addHistorico(poke) {

    const historico = document.getElementById('historico');
    const pokemon = pokemons.find(p => p.name.toLowerCase() === poke.toLowerCase());
    if (historicoPoke.some(p => p.name.toLowerCase() === poke.toLowerCase())) return;
    if (!pokemon) return;

    historicoPoke.push(pokemon);



    const divPoke = document.createElement('div');
    divPoke.style.display = 'flex';
    divPoke.style.alignItems = 'center';
    divPoke.style.marginBottom = '5px';
    divPoke.style.height = '203px';
    divPoke.style.gap = '5px';
    divPoke.style.width = '696px';
    divPoke.style.border = '2px solid aqua';
    divPoke.style.width = '918px';



    const imgh = document.createElement('img');
    imgh.style.display = 'flex';
    imgh.src = pokemon.sprite;
    imgh.style.width = '200px';
    imgh.style.border = '2px solid gold';
    imgh.style.paddingLeft = '5px';
    imgh.style.backgroundColor = 'red';
    imgh.style.flexShrink = '0';

    const np = document.createElement('p');
    np.style.display = 'flex';
    np.style.flex = '1';
    np.textContent = pokemon.name;
    np.style.fontSize = '30px'
    np.style.border = '2px solid gold';
    np.style.height = '200px';
    np.style.alignItems = 'center';
    np.style.paddingLeft = '5px';
    np.style.paddingRight = '5px';
    np.style.backgroundColor = 'red';
    np.style.justifyContent = 'center';

    const p1 = document.createElement('p');
    p1.style.display = 'flex';
    p1.style.flex = '1';
    p1.textContent = pokemon.region;
    p1.style.fontSize = '30px'
    p1.style.fontSize = '30px'
    p1.style.height = '200px';
    p1.style.border = '2px solid gold';
    p1.style.alignItems = 'center';
    p1.style.paddingLeft = '5px';
    p1.style.paddingRight = '5px';
    p1.style.justifyContent = 'center';



    const typesP = document.createElement('p');
    typesP.textContent = pokemon.types.join(', ');
    typesP.style.display = 'flex';
    typesP.style.flex = '1';
    typesP.style.fontSize = '30px'
    typesP.style.fontSize = '30px'
    typesP.style.height = '200px';
    typesP.style.border = '2px solid gold';
    typesP.style.alignItems = 'center';
    typesP.style.maxWidth = '250px';
    typesP.style.whiteSpace = 'normal';
    typesP.style.wordBreak = 'break-word';
    typesP.style.paddingLeft = '5px';
    typesP.style.paddingRight = '5px';
    typesP.style.justifyContent = 'center';


    const generationp = document.createElement('p');
    generationp.style.display = 'flex';
    generationp.style.flex = '1';
    generationp.textContent = pokemon.generation;
    generationp.style.fontSize = '30px'
    generationp.style.border = '2px solid gold';
    generationp.style.height = '200px';
    generationp.style.alignItems = 'center';
    generationp.style.paddingLeft = '5px';
    generationp.style.paddingRight = '5px';
    generationp.style.justifyContent = 'center';




    if (pokemon.region.toLowerCase() === pokemmonSorteado.region.toLowerCase()) {
        p1.style.backgroundColor = 'green';

    } else {
        p1.style.backgroundColor = 'red';
    }

    const userTypes = pokemon.types.map(t => t.toLowerCase());
    const sorteadoTypes = pokemmonSorteado.types.map(t => t.toLowerCase());

    // todos iguais (ordem não importa)
    const todosIguais =
        userTypes.length === sorteadoTypes.length &&
        userTypes.every(t => sorteadoTypes.includes(t));

    // pelo menos um igual
    const algumIgual =
        userTypes.some(t => sorteadoTypes.includes(t));

    if (todosIguais) {
        typesP.style.backgroundColor = 'green';
    } else if (algumIgual) {
        typesP.style.backgroundColor = 'yellow';
    } else {
        typesP.style.backgroundColor = 'red';
    }


    if (pokemon.generation.toLowerCase() === pokemmonSorteado.generation.toLowerCase()) {
        generationp.style.backgroundColor = 'green';

    } else {
        generationp.style.backgroundColor = 'red';
    }








    divPoke.appendChild(np);
    divPoke.appendChild(imgh);
    divPoke.appendChild(p1);
    divPoke.appendChild(typesP);
    divPoke.appendChild(generationp);
    historico.prepend(divPoke);

}
