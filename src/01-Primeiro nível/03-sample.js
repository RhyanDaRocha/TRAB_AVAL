const dataMesAno1 = "2024-01-01";
const dataMesAno2 = "2024-12-31";

function calcularDiferencaEntreAsDatas(dataMesAno1, dataMesAno2) {
    return new Date(dataMesAno2) - new Date(dataMesAno1);
}

const resultadoDoCalculo = calcularDiferencaEntreAsDatas(dataMesAno1, dataMesAno2);
console.log(resultadoDoCalculo);
