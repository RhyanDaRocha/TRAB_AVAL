const dadosDaPessoa = { nomeDaPessoa: "Maria", idadeDaPessoa: 28 };

function calcularSeEMaiorDeIdade(pessoa) {
    const numeroQueDeterminaMaioridade = 18;
    return pessoa.idadeDaPessoa >= numeroQueDeterminaMaioridade;
}

console.log(calcularSeEMaiorDeIdade(dadosDaPessoa));
