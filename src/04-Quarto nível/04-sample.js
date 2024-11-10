async function buscarPersonagem(lukeId) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = "";

    const id = document.getElementById("personagemId").value;

    if (!id || id <= 0) {
        mostrarErro("ID inválido. Insira um número positivo.", "danger");
        return;
    }

    
    try {
        const url = `https://swapi.dev/api/people/${lukeId}/`;
        const resposta = await fetch(url);
        
        if (!resposta.ok) {
            throw new Error("Personagem não encontrado. Verifique o ID e tente novamente.");
        }
        
        const personagem = await resposta.json();
        mostrarResultado(personagem);
    } catch (erro) {
        mostrarErro(erro.message, "danger");
    }
}
function mostrarErro(mensagem, tipo) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
}

function mostrarResultado(personagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `
      <div class="alert alert-success" role="alert">
        <strong>Nome:</strong> ${personagem.name}<br>
      </div>`;
}

const lukeId = 1;
buscarPersonagem(lukeId);
