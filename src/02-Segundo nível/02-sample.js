function verificarSePodeDirigir(idade) {
    const numeroQueDeterminaMaioridade = 18;
    if (idade >= numeroQueDeterminaMaioridade) {
        return "Pode dirigir";
    } else {
        return "Não pode dirigir";
    }
}
const idadeDeUmaPessoa = 16;
console.log(verificarSePodeDirigir(idadeDeUmaPessoa));
