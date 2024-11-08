function filtrarNumerosPares(numeros) {
    const numerosPares = [];
    const numeroQueDeterminaDivisibilidade = 2; 

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % numeroQueDeterminaDivisibilidade === 0) {
            numerosPares.push(numeros[i]);
        }
    }
    return numerosPares;
}
const primeiroNumero = 1;
const segundoNumero = 2;
const terceiroNumero = 3;
const quartoNumero = 4;
const quintoNumero = 5;
const sextoNumero = 6;


const listaDeNumerosPositivo = [primeiroNumero, segundoNumero, terceiroNumero, quartoNumero, quintoNumero, sextoNumero];
const numerosParesFiltrados = filtrarNumerosPares(listaDeNumerosPositivo);
console.log(numerosParesFiltrados);
