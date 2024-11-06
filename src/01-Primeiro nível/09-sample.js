class Gestor {
    constructor(nomeDaPessoa, idadeDaPessoa) {
        this.nome = nomeDaPessoa;
        this.idade = idadeDaPessoa;
    }
}
const idadeDaPessoa = 40;
const pessoa = new Gestor("Lucas", idadeDaPessoa);
console.log(pessoa);
