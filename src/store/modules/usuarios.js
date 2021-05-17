import { inject } from 'vue'

const state = {
    usuarios: [ ]
}

const getters = {
    todosUsuarios: (state) => state.usuarios
}

const actions = {
    async buscarUsuarios({ commit }) {
        const http = inject('http')
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