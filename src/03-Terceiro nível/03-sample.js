async function buscarPlaneta(idPlaneta) {
    try {
        const resposta = await fetch(`https://swapi.dev/api/planets/${idPlaneta}/`);
        return await resposta.json();
    } catch (erro) {
        console.error("Erro ao buscar o planeta:", erro);
        return null;
    }
}
function formatarDetalhesPlaneta(planeta) {
    return `
    Nome: ${planeta.name}
    Clima: ${planeta.climate}
    População: ${planeta.population}
    `;
}
function verificarPopulacaoDoPlaneta(populacao) {
    const populacaoMaximaPlanetaPequeno = 1000000;
    return populacao > populacaoMaximaPlanetaPequeno ? 
        "Este planeta é muito populado." : 
        "Este planeta tem uma população pequena.";
}
async function iniciarFuncoes() {
    const idPlaneta = 1;
    const planeta = await buscarPlaneta(idPlaneta);

    if (planeta) {
        console.log("Detalhes do Planeta:");
        console.log(formatarDetalhesPlaneta(planeta));

        const mensagemPopulacao = verificarPopulacaoDoPlaneta(parseInt(planeta.population));
        console.log(mensagemPopulacao);
    }
}
iniciarFuncoes();
