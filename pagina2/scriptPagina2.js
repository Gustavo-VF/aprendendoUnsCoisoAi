const btSortear = document.getElementById('Sortear');
const pokmon = document.getElementById('pokmon');



btSortear.onclick = () => {
    let nRandon = Math.floor(Math.random() * 1025) + 1;
    url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${nRandon}.png`;
    pokmon.src = url;


}


