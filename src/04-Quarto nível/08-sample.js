async function buscarPlanetaRecursivo() { 
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = "";

    const id = document.getElementById("planetaRecursivoId").value;

    if (!id || id <= 0) {
        mostrarErro("ID inválido. Insira um número positivo.", "danger");
        return;
    }
    
    try {
        const resposta = await fetch(`https://swapi.dev/api/planets/${id}/`);

        if (!resposta.ok) {
            throw new Error("Planeta recursivo não encontrado. Verifique o ID e tente novamente.");
        }

        const planetaRecursivo = await resposta.json();
        exibirNomePlanetaRecursivo(planetaRecursivo.name);

        
        buscarPlanetaRecursivo(id + 1);
    } catch (erro) {
        console.error(erro.message, "danger");
    }
}
buscarPlanetaRecursivo(1);

function mostrarErro(mensagem, tipo) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
}

function exibirNomePlanetaRecursivo(planetaRecursivo) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `
      <div class="alert alert-success" role="alert">
        <strong>Nome do planeta recursivo:</strong> ${planetaRecursivo.name}<br>
      </div>`;
}
