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
    novoLancamento({ commit }) {
        commit('setLancamento', {})
    },
    async criarLancamento({ commit }, lancamento) {
        const res = await LancamentoService.criarLancamento(lancamento)
        commit('addLancamento', res.data)
    },
    async alterarLancamento({ commit }, lancamento) {
        const res = await LancamentoService.alterarLancamento(lancamento)
        commit('atualizaLancamento', res.data)
    },
    async excluirLancamento({ commit }, id) {
        if (confirm('Deseja realmente excluir o Lançamento?')) {
            await LancamentoService.excluirLancamento(id)
            commit('removeLancamento', id)
        }
    },

}

const mutations = {
    setLancamentos: (state, lancamentos) => state.lancamentos = lancamentos,
    setLancamentoPorId: (state, id) => {
        console.log(id);
        state.lancamento = state.lancamentos.filter(l => l.id === id)[0]
    },
    setLancamento: (state, lancamento) => state.lancamento = lancamento,
    addLancamento: (state, lancamento) => state.lancamentos.push(lancamento),
    atualizaLancamento: (state, lancamento) => {
        const index = state.lancamentos.findIndex(l => l.id === lancamento.id)
        if (index !== -1) {
            state.lancamentos.splice(index, 1, lancamento)
        }
    },
    removeLancamento: (state, id) => state.lancamentos = state.lancamentos.filter(l => l.id !== id)
}

export default {
    state,
    getters,
    actions,
    mutations
}