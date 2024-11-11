async function buscarDadosPersonagem() {
    try {
        const dados = "{ \"name\": \"Luke\", \"idade\": 23 }"; 
        const personagem = JSON.parse(dados);

        exibirNomePersonagem(personagem.name);
        
    } catch (erro) {
        console.error("Erro ao analisar os dados JSON:", erro); 
    }
}

function exibirNomePersonagem(nome) {
    console.log(nome);
}

buscarDadosPersonagem();

