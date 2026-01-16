(async () => {
    const limite = 50; // ou 100, se quiser
    const urlAPI = `https://pokeapi.co/api/v2/pokemon?limit=${limite}`;

    const res = await fetch(urlAPI);
    const data = await res.json();

    const pokemons = [];

    for (let i = 0; i < data.results.length; i++) {
        const pokeBasic = data.results[i];
        const id = i + 1;

        // Dados do Pokémon
        const pokeDataRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokeData = await pokeDataRes.json();

        // Dados da espécie (para gerar evolução e geração)
        const speciesRes = await fetch(pokeData.species.url);
        const speciesData = await speciesRes.json();

        // Evolução
        let evolution_chain = [];
        try {
            const evoRes = await fetch(speciesData.evolution_chain.url);
            const evoData = await evoRes.json();

            function traverseEvo(chain) {
                evolution_chain.push(chain.species.name);
                if (chain.evolves_to.length > 0) {
                    chain.evolves_to.forEach(traverseEvo);
                }
            }
            traverseEvo(evoData.chain);
        } catch {
            evolution_chain = [pokeBasic.name];
        }

        // Mapeia região
        function mapRegion(generationName) {
            switch (generationName) {
                case 'generation-i': return 'Kanto';
                case 'generation-ii': return 'Johto';
                case 'generation-iii': return 'Hoenn';
                case 'generation-iv': return 'Sinnoh';
                case 'generation-v': return 'Unova';
                case 'generation-vi': return 'Kalos';
                case 'generation-vii': return 'Alola';
                case 'generation-viii': return 'Galar';
                case 'generation-ix': return 'Paldea';
                default: return 'Unknown';
            }
        }

        pokemons.push({

            name: pokeBasic.name,


            console.log(`Pokémon ${id} - ${pokeBasic.name} adicionado`);
        }

  // Exibir JSON no console (ou baixar usando Blob)
  console.log(pokemons);
    }) ();
