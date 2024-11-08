function calcularFrete(distancia) {
    const custoValorDoFrete = 10;
    return distancia * custoValorDoFrete;
}
const distanciaInicial = 50;
const frete = calcularFrete(distanciaInicial);
console.log(`O valor do frete é: ${frete}`);
