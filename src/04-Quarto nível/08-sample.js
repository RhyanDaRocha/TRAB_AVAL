
const urlDosNomesDosPlanetas = "https://swapi.dev/api/planets/";
const maximoDePlanetas = 10; 

async function buscarPlanetaRecursivo(id) {
    if (id > maximoDePlanetas) {
        console.log("Fim da busca, limite de planetas atingido.");
        return; 
    }

    try {
        const resposta = await fetch(`${urlDosNomesDosPlanetas}${id}/`);

        if (!resposta.ok) {
            console.log("Planeta não encontrado:", id);
            return;
        }

        const planeta = await resposta.json();
        console.log(`Planeta ${id}: ${planeta.name}`);

    
        buscarPlanetaRecursivo(id + 1);
    } catch (erro) {
      
        console.error("Erro ao buscar o planeta:", erro);
    }
}
buscarPlanetaRecursivo(1);
