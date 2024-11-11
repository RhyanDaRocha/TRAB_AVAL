async function buscarTituloFilme() {
    try {
        const url = "https://swapi.dev/api/films/1/";
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Erro ao buscar o filme: ${resposta.statusText}`);
        }

        const filme = await resposta.json();
        exibirTituloFilme(filme.title);

    } catch (erro) {
        console.error("Erro ao buscar o título do filme:", erro);
    }
}

function exibirTituloFilme(titulo) {
    console.log(titulo.toUpperCase());
}

buscarTituloFilme();
