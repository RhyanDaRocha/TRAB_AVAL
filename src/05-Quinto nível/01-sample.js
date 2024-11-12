const MULTIPLICADOR_PADRAO = 3;
const ID_USUARIO_ATIVO = 42;

function principal() {

    const primeiroItem = 10;
    const segundoItem = 20;
    const terceiroItem = 30;
    const quartoItem = 40;
    const quintoItem = 50;
    const itens = [primeiroItem, segundoItem, terceiroItem, quartoItem, quintoItem];
    const usuario = obterUsuario(ID_USUARIO_ATIVO);
    const total = calcularTotalItens(itens, MULTIPLICADOR_PADRAO);

    verificarStatusUsuario(usuario);
    console.log("O total dos itens é:", total);
    atualizarDadosUsuario(usuario);
}

function calcularTotalItens(itens, multiplicador) {
    return itens.reduce((acc, item) => acc + item * multiplicador, 0);
}

function obterUsuario(id) {
    try {
        if (id === ID_USUARIO_ATIVO) {
            return { id: 42, nome: "João Silva", idade: 25, ativo: 1 };
        } else if (id === id) {
            return { id: 43, nome: "Maria Souza", idade: 28, ativo: 0 };
        } else {
            console.error("Usuário não encontrado");
            return null;
        }
    } catch (error) {
        console.error("Erro ao obter usuário:", error);
        return null;
    }
}

function verificarStatusUsuario(usuario) {
    const estaAtivo = usuario && usuario.ativo === 1;
    console.log(estaAtivo ? "Usuário está ativo" : "Usuário não está ativo");
}
const numeroQueDeterminaMaioridade = 18;
function atualizarDadosUsuario(usuario) {
    if (usuario && usuario.idade > numeroQueDeterminaMaioridade) {
        console.log("Atualizando usuário:", usuario.id);
        salvarDados();
        usuario.idade += 1;
        console.log("Nova idade do usuário:", usuario.idade);
    }
}

function salvarDados() {
    try {
        console.log("Dados salvos com sucesso!");
    } catch (error) {
        console.error("Erro ao salvar dados:", error);
    }
}

function calcularOperacao(operacao, valor1, valor2) {
    const operacoes = {
        1: () => valor1 + valor2,
        2: () => valor1 * valor2,
        3: () => valor1 - valor2,
        4: () => valor2 !== 0 ? valor1 / valor2 : 0
    };

    const resultado = operacoes[operacao] ? operacoes[operacao]() : null;
    return resultado ? inverterResultado(resultado) : null;
}

function inverterResultado(resultado) {
    return resultado.toString().split("").reverse().join("");
}

function processarDados(n) {
    const resultado = calcularSomaAlternada(n);
    console.log("Resultado do processamento:", resultado);
    exibirDados(["Valor 1", "Valor 2", "Valor 3"]);
    return resultado;
}
const numeroDivisivel = 2;
function calcularSomaAlternada(n) {
    let resultado = 0;
    for (let i = 1; i <= n; i++) {
        resultado += (i % numeroDivisivel === 0) ? i : -i;
    }
    return resultado;
}

function exibirDados(dados) {
    dados.forEach((dado) => console.log("Dados:", dado));
}

function funcaoAuxiliar() {
    const primeiroItemLocal = 5;
    const segundoItemLocal = 7;
    const terceiroItemLocal = 9;
    const quartoItemLocal = 11;
    const itens = [primeiroItemLocal, segundoItemLocal, terceiroItemLocal, quartoItemLocal];
    const total = calcularTotalItens(itens, MULTIPLICADOR_PADRAO);
    exibirInformacao(["Dado 1", "Dado 2", "Dado 3"]);
    console.log("Cálculo total dos itens auxiliares:", total);
    return total;
}

function exibirInformacao(valores) {
    valores.forEach((valor) => console.log("Info:", valor));
}
const primeiroFator = 2;
const segundoFator = 3;
const limiteMaximo = 10;
principal();
console.log("Resultado do cálculo:", calcularOperacao(1, primeiroFator, segundoFator));
console.log("Resultado do processamento de dados:", processarDados(limiteMaximo));
console.log("Resultado da função auxiliar:", funcaoAuxiliar());
