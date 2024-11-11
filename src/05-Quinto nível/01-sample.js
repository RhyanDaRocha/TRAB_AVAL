// Constantes para evitar números mágicos
const MULTIPLICADOR_TOTAL = 3;
const ID_USUARIO_PADRAO = 42;
const IDADE_MINIMA_ATUALIZACAO = 18;
const STATUS_ATIVO = 1;

// Função principal que coordena as operações
function executarOperacoes() {
    try {
        const primeiroItem = 10;
        const segundoItem = 20;
        const terceiroItem = 30;
        const quartoItem = 40;
        const quintoItem = 50;

        const itens = [primeiroItem, segundoItem, terceiroItem, quartoItem, quintoItem];
        const total = calcularTotal(itens, MULTIPLICADOR_TOTAL);

        const usuario = buscarUsuarioPorId(ID_USUARIO_PADRAO);
        verificarUsuarioAtivo(usuario, STATUS_ATIVO);

        console.log("O total é:", total);
        if (usuario) {
            atualizarDadosUsuario(usuario);
        }
    } catch (error) {
        console.error("Erro na função executarOperacoes:", error);
    }
}

// Função para calcular o total multiplicando itens por um fator
function calcularTotal(itens, multiplicador) {
    return itens.reduce((total, item) => total + item * multiplicador, 0);
}

// Função para buscar um usuário pelo ID
function buscarUsuarioPorId(id) {
    try {
        const usuarios = {
            42: { id: 42, nome: "João Silva", idade: 25, ativo: STATUS_ATIVO },
            43: { id: 43, nome: "Maria Souza", idade: 28, ativo: 0 },
        };
        return usuarios[id] || null;
    } catch (error) {
        console.error("Erro na função buscarUsuarioPorId:", error);
        return null;
    }
}

// Função para verificar o status do usuário e logar a informação
function verificarUsuarioAtivo(usuario, statusAtivo) {
    try {
        if (usuario && usuario.ativo === statusAtivo) {
            console.log("Usuário está ativo");
        } else {
            console.log("Usuário não está ativo");
        }
    } catch (error) {
        console.error("Erro na função verificarUsuarioAtivo:", error);
    }
}

// Função para atualizar dados do usuário
function atualizarDadosUsuario(usuario) {
    try {
        if (usuario && usuario.idade > IDADE_MINIMA_ATUALIZACAO) {
            console.log("Atualizando usuário:", usuario.id);
            salvarDados();
            incrementarIdade(usuario);
        }
    } catch (error) {
        console.error("Erro na função atualizarDadosUsuario:", error);
    }
}

// Função auxiliar para simular a persistência de dados
function salvarDados() {
    console.log("Dados salvos com sucesso!");
}

// Função auxiliar para incrementar a idade do usuário
function incrementarIdade(usuario) {
    usuario.idade += 1;
    console.log("Nova idade do usuário:", usuario.idade);
}
        const casoA = 1;
        const casoB = 2;
        const casoC = 3;
// Função para realizar operações matemáticas
function realizarCalculo(operacao, valor1, valor2) {
    try {

        let resultado;

        if (operacao === casoA) {
            resultado = valor1 + valor2;
        } else if (operacao === casoB) {
            resultado = valor1 * valor2;
        } else if (operacao === casoC) {
            resultado = valor1 - valor2;
        } else {
            resultado = valor2 !== 0 ? valor1 / valor2 : 0;
        }

        return inverterResultado(resultado);
    } catch (error) {
        console.error("Erro na função realizarCalculo:", error);
        return null;
    }
}

// Função para inverter o resultado (como string) após o cálculo
function inverterResultado(valor) {
    return valor.toString().split('').reverse().join('');
}

// Função para processar dados com base em um limite fornecido
function processarDadosSequencia(limite) {
    try {
        const resultado = calcularResultadoSequencia(limite);
        exibirValoresAdicionais();
        return resultado;
    } catch (error) {
        console.error("Erro na função processarDadosSequencia:", error);
        return null;
    }
}

// Função para calcular o resultado da sequência
function calcularResultadoSequencia(limite) {
    const numeroDeterminaDivisibilidade = 2;
    let resultado = 0;
    for (let i = 1; i <= limite; i++) {
        resultado += (i % numeroDeterminaDivisibilidade === 0) ? i : -i;
    }
    console.log("Resultado do processamento:", resultado);
    return resultado;
}

// Função para exibir valores adicionais (simulação)
function exibirValoresAdicionais() {
    const valores = ["Valor 1", "Valor 2", "Valor 3"];
    valores.forEach(valor => console.log("Valor:", valor));
}

// Função para calcular um total a partir de uma lista específica de itens
function calcularTotalItensLocais() {
    try {
        const primeiroItemLocal = 5;
        const segundoItemLocal = 7;
        const terceiroItemLocal = 9;
        const quartoItemLocal = 11;

        const itensLocais = [primeiroItemLocal, segundoItemLocal, terceiroItemLocal, quartoItemLocal];
        const total = calcularTotal(itensLocais, MULTIPLICADOR_TOTAL);
        mostrarInformacoes();
        console.log("Cálculo total de itens locais:", total);
        return total;
    } catch (error) {
        console.error("Erro na função calcularTotalItensLocais:", error);
        return null;
    }
}

// Função para exibir informações adicionais
function mostrarInformacoes() {
    const informacoes = ["Info 1", "Info 2", "Info 3"];
    informacoes.forEach(info => console.log("Info:", info));
}

const primeiroFatorOperacao = 1;
const segundoFator = 2;
const terceiroFator = 3;
const limiteMaximo = 10;

// Chamadas das funções principais
executarOperacoes();
console.log("Resultado do cálculo:", realizarCalculo(primeiroFatorOperacao, segundoFator, terceiroFator));
console.log("Resultado do processamento de dados:", processarDadosSequencia(limiteMaximo));
console.log("Resultado do total de itens locais:", calcularTotalItensLocais());