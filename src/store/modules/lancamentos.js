import LancamentoService from '../../services/lancamentoService'

const state = {
    lancamentos: [ ],
    lancamento: {}
}

const getters = {
    todosLancamentos: (state) => state.lancamentos,
    lancamento: (state) => state.lancamento
}

const actions = {
    async buscarLancamentos({ commit }) {
        const res = await LancamentoService.getTodos()
        commit('setLancamentos', res.data)
    },
    selecionaLancamento({ commit }, id) {
        commit('setLancamentoPorId', id)
    },

}

const mutations = {
    setLancamentos: (state, lancamentos) => state.lancamentos = lancamentos,
    setLancamentoPorId: (state, id) => {
        console.log(id);
        state.lancamento = state.lancamentos.filter(l => l.id === id)[0]
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}