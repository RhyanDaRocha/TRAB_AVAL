const nomeDaPessoa = "Pedro";
const idadeDaPessoa = 25;
const verificarUsuario = true;

function acessoAoUsuario(nomeDaPessoa, idadeDaPessoa, verificarUsuario) {
    if (verificarUsuario) {
        console.log(`${nomeDaPessoa  } tem ${  idadeDaPessoa  } anos e está ativo.`);
    } else {
        console.log(`${nomeDaPessoa  } está inativo.`);
    }
}

acessoAoUsuario(nomeDaPessoa, idadeDaPessoa, verificarUsuario);
