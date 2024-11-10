async function buscarEspecie() { 
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = "";

    const id = document.getElementById("especieId").value;

    if (!id || id <= 0) {
        mostrarErro("ID inválido. Insira um número positivo.", "danger");
        return;
    }
    
    try {
        const resposta = await fetch("https://swapi.dev/api/species/1/");
        
        if (!resposta.ok) {
            throw new Error("Especie não encontrado. Verifique o ID e tente novamente.");
        }

        const especie = await resposta.json();
        exibirEspecie(especie.average_lifespan.toUpperCase());
    } catch (erro) {
        console.error(erro.message, "danger");
    }
}
buscarEspecie();

function mostrarErro(mensagem, tipo) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
}

function exibirEspecie(especie) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `
      <div class="alert alert-success" role="alert">
        <strong>Nome da especie:</strong> ${especie.average_lifespan}<br>
      </div>`;
}
