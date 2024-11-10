async function buscarNave() {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = "";

    const id = document.getElementById("naveId").value;

    if (!id || id <= 0) {
        mostrarErro("ID inválido. Insira um número positivo.", "danger");
        return;
    }


    try {
        const resposta = await fetch(`https://swapi.dev/api/starships/${idNave}/`);
        
        if (!resposta.ok) {
            throw new Error("Nave não encontrado. Verifique o ID e tente novamente.");
        }

        const nave = await resposta.json();
        exibirNave(nave.name);
    } catch (erro) {
        console.error(erro.message, "danger");
    }
}
function mostrarErro(mensagem, tipo) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
}

function exibirNave(nave) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `
      <div class="alert alert-success" role="alert">
        <strong>Nome:</strong> ${nave.name}<br>
      </div>`;
}

const idNave = 10;
buscarNave();
