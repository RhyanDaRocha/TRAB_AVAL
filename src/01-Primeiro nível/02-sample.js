const admin = true;

function verificarAcessoDeUsuario(usuario) {
    if (admin && usuario.isAdmin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

const usuario = { nome: "João", admin: true };
verificarAcessoDeUsuario(usuario);
