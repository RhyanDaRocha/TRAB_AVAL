const MILISSEGUNDOS_EM_UM_ANO = 31536000000;

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
    if (agora - usuario.dataCriacao < MILISSEGUNDOS_EM_UM_ANO) {
        console.log(`${usuario.nome} foi criado recentemente.`);
    } else {
        console.log(`${usuario.nome} é um usuário antigo.`);
    }
}

const usuarios = [
    new Usuario(
        { nome: "Carlos", idade: 25, cargo: "admin", dataCriacao: new Date(2023, 1, 15) },
        { dataUltimoLogin: new Date(2024, 8, 1) },
        { ativo: true },
        { tentativasFalhas: 2 }
    ),
    new Usuario(
        { nome: "Ana", idade: 30, cargo: "guest", dataCriacao: new Date(2020, 4, 22) },
        { dataUltimoLogin: new Date(2024, 7, 31) },
        { ativo: true },
        { tentativasFalhas: 3 }
    ),
    new Usuario(
        { nome: "José", idade: 29, cargo: "admin", dataCriacao: new Date(2022, 10, 5) },
        { dataUltimoLogin: new Date(2024, 6, 10) },
        { ativo: false },
        { tentativasFalhas: 5 }
    ),
    new Usuario(
        { nome: "Maria", idade: 35, cargo: "guest", dataCriacao: new Date(2021, 2, 10) },
        { dataUltimoLogin: new Date(2023, 12, 25) },
        { ativo: false },
        { tentativasFalhas: 7 }
    )
];

console.log(`Usuários admin: ${contarAdmins(usuarios)}`);

usuarios[0].verificarAtividade();
usuarios[1].verificarAcesso();

verificarTentativasExcessivas(usuarios[2], 4);

console.log(usuarioMaisRecente(usuarios[0], usuarios[3]));

verificarCriacaoRecente(usuarios[3]);
