function calcularDesconto(preco) {
    const descontoPadrao = 0.15;
    return preco - (preco * descontoPadrao);
}
const fatorPreco = 100;
const precoFinal = calcularDesconto(fatorPreco);
console.log(`Preço com desconto: ${precoFinal}`);
