function exibirDetalhesDaBusca() {
    filtrarPessoasPelaPrimeiraLetraDoNome("L");
    totalDePessoasEncontradas();
}

async function buscarPessoas() {
    try {
        const resposta = await fetch("https://swapi.dev/api/people/");
        return await resposta.json();
        
    } catch (erro) {
        console.error("Erro ao buscar pessoas:", erro);
        return null;
    }
}

async function totalDePessoasEncontradas() {
    const dados = await buscarPessoas();
    console.log(`Total de pessoas encontradas: ${dados.results.length}`);
}

async function filtrarPessoasPelaPrimeiraLetraDoNome(letra) {
    const dados = await buscarPessoas();
    const pessoasComALetraDesejada = dados.results.filter(pessoa => pessoa.name.startsWith(letra));

    console.log(`Pessoas cujo nome começa com ${letra}:`);
    pessoasComALetraDesejada.forEach(pessoa => {
        console.log(pessoa.name);
    });
}

exibirDetalhesDaBusca();
