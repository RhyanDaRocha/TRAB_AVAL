async function buscarVeiculos() {
    try {
        const resposta = await fetch("https://swapi.dev/api/vehicles/");
        return await resposta.json();

    } catch (erro) {
        console.error("Erro ao buscar veículos:", erro);
        return null;
    }
}

async function filtrarCarrosComCustoAcimaDoOrcamento(orcamento) {
    try {
        const dados = await buscarVeiculos();

        const custoLimiteOrcamento = Number(orcamento);
        const veiculosCaros = dados.results.filter(veiculo => parseInt(veiculo.cost_in_credits) > custoLimiteOrcamento);

        return veiculosCaros;

    } catch (erro) {
        console.error("Erro ao buscar veículos:", erro);
        return null;
    }
}

async function calcularCustoTotalComVeiculosAcimaDoOrcamento(orcamento) {
    try {
        const veiculosCaros = await filtrarCarrosComCustoAcimaDoOrcamento(orcamento);

        const custoTotal = veiculosCaros.reduce((total, veiculo) => {
            return total + parseInt(veiculo.cost_in_credits);
        }, 0);

        console.log(`Custo total dos veículos caros: ${custoTotal} créditos`);

    } catch (erro) {
        console.error("Não foi possível calcular o custo total:", erro);
    }
}

async function exibirVeiculosCaros(orcamento) {
    try {
        const veiculosCaros = await filtrarCarrosComCustoAcimaDoOrcamento(orcamento);

        console.log(`Veículos caros (mais de ${orcamento} créditos):`);
        veiculosCaros.forEach(veiculo => {
            console.log(`- ${veiculo.name}: ${veiculo.cost_in_credits} créditos`);
        });

    } catch (erro) {
        console.error("Erro ao buscar veículos:", erro);
    }

}

function buscarVeiculosCarosAcimaDoOrcamento(orcamento) {
    exibirVeiculosCaros(orcamento);
    calcularCustoTotalComVeiculosAcimaDoOrcamento(orcamento);
}

const valorDoOrcamento = 10000;
buscarVeiculosCarosAcimaDoOrcamento(valorDoOrcamento);
