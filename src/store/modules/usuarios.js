import createHttp from '../../services/axiosConfig'

const state = {
    usuarios: [ ]
}

const getters = {
    todosUsuarios: (state) => state.usuarios
}

const actions = {
    async buscarUsuarios({ commit }) {
        const http = createHttp()
        const res = await http.get('/api/usuario')

        commit('setUsuarios', res.data)
    }
}

const mutations = {
    setUsuarios: (state, value) => state.usuarios = value 
}

export default {
    state,
    getters,
    actions,
    mutations
}