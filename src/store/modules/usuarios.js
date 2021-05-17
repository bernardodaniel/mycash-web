import UsuarioService from '../../services/usuarioService'

const state = {
    usuarios: [ ],
    usuario: {}
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
        commit('setUsuario', id)
    },
    async resetarSenha({ commit }, usuario) {
        
        const bodyData = new FormData();
        bodyData.append('senhaNova', usuario.senha)

        const res = UsuarioService.resetarSenha(usuario.email, bodyData)

        console.log( res, commit, usuario)
    }
}

const mutations = {
    setUsuarios: (state, value) => state.usuarios = value,
    setUsuario: (state, id) => {
        console.log(id);
        state.usuario = state.usuarios.filter(u => u.id === id)[0]
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}