async function buscarFilme() {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = "";

    const id = document.getElementById("filmeId").value;

    if (!id || id <= 0) {
        mostrarErro("ID inválido. Insira um número positivo.", "danger");
        return;
    }

    try {
        const resposta = await fetch("https://swapi.dev/api/films/1/");
        
        if (!resposta.ok) {
            throw new Error("Filme não encontrado. Verifique o ID e tente novamente.");
        }
        
        const filme = await resposta.json();
        
        exibirNomeFilme(filme.title.toUpperCase());
    } catch (erro) {
        console.error(erro.message, "danger");
    }
}
function mostrarErro(mensagem, tipo) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
}

function exibirNomeFilme(filme) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `
      <div class="alert alert-success" role="alert">
        <strong>Título:</strong> ${filme.title}<br>
      </div>`;
}
buscarFilme();
