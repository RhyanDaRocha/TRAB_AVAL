async function buscarPlaneta() {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = "";

    const id = document.getElementById("planetaID").valeu;

    if(!id || id <=0){
        mostrarErro("ID inválido. Insira um número positivo.", "danger");
        return;
    }
    try {
        const resposta = await fetch("https://swapi.dev/api/planets/1/");
        
        if (!resposta.ok) {
            throw new Error("Planeta não encontrado. Verifique o ID e tente novamente.");
        }

        const planeta = await resposta.json();
        //console.log(planeta.name);
        exibirNomePlaneta(planeta.name);
    } catch (erro) {
        
        console.error(erro.message, "danger");
    }
}

function mostrarErro(mensagem, tipo){
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
}
function exibirNomePlaneta(planeta) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `
      <div class="alert alert-success" role="alert">
        <strong>Nome:</strong> ${planeta.name}<br>
      </div>`;
}

buscarPlaneta();
