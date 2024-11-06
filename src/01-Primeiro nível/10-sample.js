const usuarioObjeto = {
    nomeDaPessoa: "João",
    idadeDaPessoa: 25
};

function exibirUsuario(objeto) {
    console.log(`${objeto.nomeDaPessoa  } tem ${  objeto.idadeDaPessoa  } anos.`);
}

exibirUsuario(usuarioObjeto);
