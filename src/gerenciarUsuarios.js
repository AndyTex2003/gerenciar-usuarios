const usuarios = [
    {
        nome: 'Matheus',
        email: 'matheus@exemplo.com'
    },
    {
        nome: 'Marcos',
        email: 'marcos@exemplo.com'
    },
    {
        nome: 'Lucas',
        email: 'lucas@exemplo.com'
    },
    {
        nome: 'João',
        email: 'joao@exemplo.com'
    }
];

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(usuario) {
    usuarios.push(usuario);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}
