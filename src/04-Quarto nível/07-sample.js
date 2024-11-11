const urlDaEspecie= "https://swapi.dev/api/species/1/";
async function buscarEspecie() {
    try {
        const resposta = await fetch(urlDaEspecie);

  
        if (!resposta.ok) {
            mostrarErro();
            return;
        }

        const especie = await resposta.json();
        exibirExpectativaDeVida(especie.average_lifespan);

    } catch (erro) {
        mostrarErro(`Erro ao buscar uma nave: ${  erro.message}`);
    }
}


function exibirExpectativaDeVida(espera) {
    console.log(`Expectativa de vida média: ${espera} anos`);
}

function mostrarErro() {
    console.error("Erro: Espécie não encontrada ");
}
buscarEspecie();
