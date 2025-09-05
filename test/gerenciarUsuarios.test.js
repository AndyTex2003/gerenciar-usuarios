const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de gestão de usuários', function() {
    it('Validar que posso adicionar um novo nome de Usuário na lista', function() {
        // 1. Adicionar um novo nome na caixa lista de usuários
        adicionarNovoUsuario('Paulo');

        // 2. Retornar a lista de usuários na caixa lista de usuários
        const listaDeUsuarios = retornarUsuarios();

        // 3. Comparar se o novo nome está no fim da lista de usuários
        expect(listaDeUsuarios.at(-1)).to.equal('Paulo');
    });
});


