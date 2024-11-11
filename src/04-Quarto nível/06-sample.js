const idDaNave = 10; 
const urlDaBase = "https://swapi.dev/api/starships/";

async function buscarNave() {
    const url = `${urlDaBase}${idDaNave}/`;

    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            mostrarErro();
            return;
        }

        const nave = await resposta.json();
        exibirNomeNave(nave.name);

    } catch (erro) {
        mostrarErro(`Erro ao buscar uma nave: ${  erro.message}`);
    }
}

function exibirNomeNave() {
    console.log("Nome da nave: Millennium Falcon"); 
}


function mostrarErro() {
    console.error("Erro: Nave não encontrada");
}
buscarNave();
