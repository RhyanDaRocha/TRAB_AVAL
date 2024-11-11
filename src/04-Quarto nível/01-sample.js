async function buscarNomePlaneta() {
    try {
        const url = "https://swapi.dev/api/planets/1/"; 
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Erro ao buscar o planeta: ${resposta.statusText}`);
        }

        const planeta = await resposta.json();
        exibirNomePlaneta(planeta.name);

    } catch (erro) {
        console.error("Erro na busca do nome do planeta:", erro); 
    }
}

function exibirNomePlaneta(nome) {
    console.log(nome); 
}

buscarNomePlaneta();
