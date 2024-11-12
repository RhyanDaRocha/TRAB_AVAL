function detalharPersonagem(idPersonagem) {

    buscarPersonagem(idPersonagem);
    buscarNaveDoPersonagem(idPersonagem);
    tamanhoDaNaveDoPersonagem(idPersonagem);

}

async function buscarPersonagem(idPersonagem) {

    const respostaPersonagem = await fetch(`https://swapi.dev/api/people/${idPersonagem}/`);
    return await respostaPersonagem.json();

}

async function buscarNaveDoPersonagem(idPersonagem) {
    try {

        const personagemEncontrado = await buscarPersonagem(idPersonagem);

        if (personagemEncontrado.starships.length > 0) {

            const respostaNave = await fetch(personagemEncontrado.starships[0]);
            return await respostaNave.json();

        } else {
            console.log(`${personagemEncontrado.name} não possui naves registradas.`);
            return null;
        }

    } catch (erro) {

        console.error("Erro ao buscar o personagem ou sua nave:", erro);
        return null;

    }
}

async function tamanhoDaNaveDoPersonagem(idPersonagem) {
    try {
        const naveEncontrada = await buscarNaveDoPersonagem(idPersonagem);

        const tripulacao = parseInt(naveEncontrada.crew);
        const capacidadeMaximaNavePequena = 100;

        if (tripulacao > capacidadeMaximaNavePequena) {

            console.log(`A nave ${naveEncontrada.name} é considerada grande com ${tripulacao} tripulantes.`);

        } else {

            console.log(`A nave ${naveEncontrada.name} é pequena com ${tripulacao} tripulantes.`);

        }
    } catch (erro) {

        console.error("Erro ao buscar o personagem ou sua nave:", erro);
        
    }
}

detalharPersonagem(1);