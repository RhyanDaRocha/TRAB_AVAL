
const urlDosPersonagens = "https://swapi.dev/api/people";

async function buscarPersonagem() {
    const id = document.getElementById("personagemId").value;

    if (!validarId(id)) {
        exibirMensagem("ID inválido. Insira um número positivo.", "danger");
        return;
    }

    try {
        const personagem = await obterDadosPersonagem(id);
        exibirPersonagem(personagem);
    } catch (erro) {
        exibirMensagem(erro.message, "danger");
    }
}

function validarId(id) {
    return id && id > 0;
}

async function obterDadosPersonagem(id) {
    const resposta = await fetch(`${urlDosPersonagens}/${id}/`);
    
    if (!resposta.ok) {
        throw new Error("Personagem não encontrado. Verifique o ID e tente novamente.");
    }

    return resposta.json();
}

function exibirPersonagem(personagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `
        <div class="alert alert-success" role="alert">
            <strong>Nome:</strong> ${personagem.name}<br>
            <strong>Altura:</strong> ${personagem.height} cm<br>
            <strong>Peso:</strong> ${personagem.mass} kg
        </div>`;
}

function exibirMensagem(mensagem, tipo) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
}
buscarPersonagem();
