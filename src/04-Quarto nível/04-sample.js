const idDoLukeSkywalker= 1; 
const urlDosPersonagens = "https://swapi.dev/api/people/";

async function buscarPersonagem() {
    const url = `${urlDosPersonagens}${idDoLukeSkywalker}/`; 

    try {
        const resposta = await fetch(url);

        
        if (!resposta.ok) {
            mostrarErro("Personagem não encontrado.");
            return;
        }

        const personagem = await resposta.json();
        exibirNomePersonagem(personagem.name); 
    } catch (erro) {
        mostrarErro(`Erro ao buscar personagem: ${  erro.message}`);
    }
}


function exibirNomePersonagem(name) {
    console.log(`Nome do personagem: ${name}`);
}


function mostrarErro(mensagem) {
    console.error(mensagem);
}


buscarPersonagem();
