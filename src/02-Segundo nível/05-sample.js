function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    const salarioBase = horasTrabalhadas * valorHora;
    const bonusDoGerente = 1000;
    const bonusDoSupervisor = 500;
    const bonusDoFuncionario = 200;

    let salarioComBonus;
    if (cargo === "gerente") {
        salarioComBonus = salarioBase + bonusDoGerente;
    } else if (cargo === "supervisor") {
        salarioComBonus = salarioBase + bonusDoSupervisor;
    } else {
        salarioComBonus = salarioBase + bonusDoFuncionario;
    }
    const precoDoDesconto = 300;
    const salarioComDesconto = salarioComBonus - precoDoDesconto;
    const faixaSalarioAlto = 5000;
    const faixaSalarioMedio = 3000;

    let salarioFinal;
    if (salarioComDesconto > faixaSalarioAlto) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * taxaSalarioAlto);
    } else if (salarioComDesconto > faixaSalarioMedio) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * taxaSalarioMedio);
    } else {
        salarioFinal = salarioComDesconto - (salarioComDesconto * taxaSalarioBaixo);
    }
    
    return salarioFinal;
}
const taxaSalarioAlto = 0.27;
const taxaSalarioMedio = 0.18;
const taxaSalarioBaixo = 0.11;
const HorasTrabalhada = 160;
const valorHora = 25;
const salario = calcularSalarioFuncionario(HorasTrabalhada, valorHora, "gerente");
console.log(`O salário final é: ${salario}`);
