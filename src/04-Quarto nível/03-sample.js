async function buscarDados() {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = "";

    const id = document.getElementById("dadosId").value;

    if (!id || id <= 0) {
        mostrarErro("ID inválido. Insira um número positivo.", "danger");
        return;
    }

    try {
        const dados = { name: "Luke", idade: 23 }; 
        const personagem = dados; 
        console.log(personagem.name);
    } catch (erro) {
        console.error(erro.message, "danger");
    }
}
function mostrarErro(mensagem, tipo) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
}
buscarDados();
