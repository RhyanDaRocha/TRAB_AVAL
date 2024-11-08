function tentarLogin(senha) {
    let tentativas = 0;
    const senhaCorreta = "12345";
    const limiteDeTentativasLogin = 3;
    while (tentativas < limiteDeTentativasLogin) {
        if (senha === senhaCorreta) {
            return "Login efetuado com sucesso!";
        }
        tentativas++;
    }

    return "Tentativas de login excedidas.";
}

console.log(tentarLogin("123"));
