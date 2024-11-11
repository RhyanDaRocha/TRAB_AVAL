const idPersonagemInvalido = 1000000000000; 
const urlDosPersonagens = "https://swapi.dev/api/people/";

async function buscarPersonagem() {
    const url = `${urlDosPersonagens}${idPersonagemInvalido}/`;

    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            mostrarErro("Personagem não encontrado. Verifique o ID e tente novamente.");
            return;
        }

        const personagem = await resposta.json();
        exibirNomePersonagem(personagem.name);

    } catch (erro) {
        mostrarErro(`Erro ao buscar personagem: ${  erro.message}`);
    }
}

function exibirNomePersonagem() {
    console.log("Nome do personagem: Personagem não encontrado ou ID inválido."); 
}

function mostrarErro() {
    console.error("Erro: algo saiu mal");
}
buscarPersonagem();
