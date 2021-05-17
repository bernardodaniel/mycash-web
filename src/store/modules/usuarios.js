import UsuarioService from '../../services/usuarioService'

const state = {
    usuarios: [ ],
    usuario: {
        email: '',
        senha: ''
    }
}

const getters = {
    todosUsuarios: (state) => state.usuarios,
    usuario: (state) => state.usuario
}

const actions = {
    async buscarUsuarios({ commit }) {
        const res = await UsuarioService.getTodos()
        commit('setUsuarios', res.data)
    },
    selecionaUsuario({ commit }, id) {
        console.log(id);
        commit('setUsuarioPorId', id)
    },
    async resetarSenha({ commit }, usuario) {
        
        const bodyData = new FormData();
        bodyData.append('senhaNova', usuario.senha)

        const res = UsuarioService.resetarSenha(usuario.email, bodyData)

        console.log( res, commit, usuario)
    },
    novoUsuario({ commit }) {
        console.log('novo');
        commit('setUsuario', {})
    },
    async criarUsuario({ commit }, usuario) {
        const bodyData = new FormData();
        bodyData.append('email', usuario.email)
        bodyData.append('senha', usuario.senha)

        const res = await UsuarioService.criarUsuario(bodyData)
        commit('addUsuario', res.data)
    },
}

const mutations = {
    setUsuarios: (state, value) => state.usuarios = value,
    setUsuarioPorId: (state, id) => {
        console.log(id);
        state.usuario = state.usuarios.filter(u => u.id === id)[0]
    },
    setUsuario: (state, usuario) => state.usuario = usuario,
    addUsuario: (state, usuario) => state.usuarios.push(usuario)
}

export default {
    state,
    getters,
    actions,
    mutations
}