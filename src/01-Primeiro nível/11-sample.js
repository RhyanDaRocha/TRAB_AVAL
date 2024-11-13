const milisegundoEmUmAno = 31536000000;

const ano2023 = 2023;
const ano2024 = 2024;
const ano2020 = 2020;
const ano2022 = 2022;
const ano2021 = 2021;
const mesFevereiro = 1;
const mesMaio = 4;
const mesOutubro = 9;
const mesMarco = 2;
const mesJulho = 6;   // Definido como 'mesJuly' anteriormente
const mesDezembro = 11;   // Definido como 'mesDecember' anteriormente
const dia15 = 15;
const dia1 = 1;
const dia22 = 22;
const dia31 = 31;
const dia5 = 5;
const dia10 = 10;
const dia25 = 25;
const tentativasCarlos = 2;
const tentativasAna = 3;
const tentativasJose = 5;
const tentativasMaria = 7;
const limiteTentativas = 4;

class Usuario {
    constructor(informacoesPessoais, dadosConta, status, tentativasLogin) {
        const { nome, idade, cargo, dataCriacao } = informacoesPessoais;
        const { dataUltimoLogin } = dadosConta;
        const { ativo } = status;
        const { tentativasFalhas } = tentativasLogin;

        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.dataCriacao = dataCriacao;
        this.dataUltimoLogin = dataUltimoLogin;
        this.ativo = ativo;
        this.tentativasFalhas = tentativasFalhas;
    }

    verificarAtividade() {
        if (this.ativo) {
            console.log(`${this.nome} está ativo.`);
        } else {
            console.log(`${this.nome} está inativo.`);
        }
    }

    verificarAcesso() {
        if (this.cargo === "admin") {
            console.log(`${this.nome} pode acessar todas as áreas.`);
        } else {
            console.log(`${this.nome} tem acesso limitado.`);
        }
    }
}

function contarAdmins(usuarios) {
    let totalAdmins = 0;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].cargo === "admin") {
            totalAdmins++;
        }
    }
    return totalAdmins;
}

function verificarTentativasExcessivas(usuario, limiteTentativas) {
    if (usuario.tentativasFalhas > limiteTentativas) {
        console.log(`Tentativas de login excessivas para ${usuario.nome}.`);
    } else {
        console.log(`Tentativas de login de ${usuario.nome} estão sob controle.`);
    }
}

function usuarioMaisRecente(usuario1, usuario2) {
    if (usuario1.dataUltimoLogin > usuario2.dataUltimoLogin) {
        return `${usuario1.nome} fez login mais recentemente.`;
    } else {
        return `${usuario2.nome} fez login mais recentemente.`;
    }
}

function verificarCriacaoRecente(usuario) {
    const agora = new Date();
    if (agora - usuario.dataCriacao < milisegundoEmUmAno) {
        console.log(`${usuario.nome} foi criado recentemente.`);
    } else {
        console.log(`${usuario.nome} é um usuário antigo.`);
    }
}

const usuarios = [
    new Usuario(
        { nome: "Carlos", idade: 25, cargo: "admin", dataCriacao: new Date(ano2023, mesFevereiro, dia15) },
        { dataUltimoLogin: new Date(ano2024, mesOutubro, dia1) },
        { ativo: true },
        { tentativasFalhas: tentativasCarlos }
    ),
    new Usuario(
        { nome: "Ana", idade: 30, cargo: "guest", dataCriacao: new Date(ano2020, mesMaio, dia22) },
        { dataUltimoLogin: new Date(ano2024, mesOutubro, dia31) },
        { ativo: true },
        { tentativasFalhas: tentativasAna }
    ),
    new Usuario(
        { nome: "José", idade: 29, cargo: "admin", dataCriacao: new Date(ano2022, mesOutubro, dia5) },
        { dataUltimoLogin: new Date(ano2024, mesJulho, dia10) },
        { ativo: false },
        { tentativasFalhas: tentativasJose }
    ),
    new Usuario(
        { nome: "Maria", idade: 35, cargo: "guest", dataCriacao: new Date(ano2021, mesMarco, dia10) },
        { dataUltimoLogin: new Date(ano2023, mesDezembro, dia25) },
        { ativo: false },
        { tentativasFalhas: tentativasMaria }
    )
];

console.log(`Usuários admin: ${contarAdmins(usuarios)}`);
usuarios[0].verificarAtividade();
usuarios[1].verificarAcesso();
const usuarioEscolhido = 2;
const usuarioEscolhidoVerificarCriacao = 3;
verificarTentativasExcessivas(usuarios[usuarioEscolhido], limiteTentativas);
console.log(usuarioMaisRecente(usuarios[0], usuarios[usuarioEscolhidoVerificarCriacao]));
verificarCriacaoRecente(usuarios[usuarioEscolhidoVerificarCriacao]);

