async function consultarInformacoesDaNave() {

    const nave = await buscarNave();
    detalharNave(nave);
    verificarTamanhoDaNave(nave);

}

function detalharNave(nave) {
    const detalhesNave = `
        Nome: ${nave.name}
        Modelo: ${nave.model}
        Fabricante: ${nave.manufacturer}
        `;

    console.log("Detalhes da Nave:");
    console.log(detalhesNave);
}

function verificarTamanhoDaNave(nave) {
    const tamanhoTripulacao = parseInt(nave.crew);
    const capacidadeMaximaNavePequena = 100;

    if (tamanhoTripulacao > capacidadeMaximaNavePequena) {
        console.log("Esta é uma nave grande.");
    } else {
        console.log("Esta é uma nave pequena.");
    }
}

async function buscarNave() {
    try {
        const resposta = await fetch("https://swapi.dev/api/starships/9/");
        return await resposta.json();

    } catch (erro) {
        console.error("Erro ao buscar detalhes da nave:", erro);
        return null;
    }
}

consultarInformacoesDaNave();
