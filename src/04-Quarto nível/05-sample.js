async function buscarPersonagem() { 
    const personagemid = 1000000000000;
    
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = "";

    const id = document.getElementById("personagemId").value;

    if (!id || id <= 0) {
        mostrarErro("ID inválido. Insira um número positivo.", "danger");
        return;
    }
    
    try {
        const resposta = await fetch(`https://swapi.dev/api/people/${personagemid}/`);
        if (!resposta.ok) {
            throw new Error("Personagem não encontrado. Verifique o ID e tente novamente.");
        }

        const personagem = await resposta.json();
        exibirNomePersonagem(personagem.name);
    } catch (erro) {
        console.error(erro.message, "danger");
    }
}
buscarPersonagem();

function mostrarErro(mensagem, tipo) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
}

function exibirNomePersonagem(personagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `
      <div class="alert alert-success" role="alert">
        <strong>Nome:</strong> ${personagem.name}<br>
      </div>`;
}
