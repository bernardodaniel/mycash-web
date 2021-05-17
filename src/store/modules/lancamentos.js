import LancamentoService from '../../services/lancamentoService'

const state = {
    lancamentos: [
        {
          "id": 3,
          "descricao": "Livro",
          "data": "2021-05-12",
          "valor": 29.9,
          "tipo": "DESPESA"
        },
        {
          "id": 4,
          "descricao": "Venda Liquidificador",
          "data": "2021-05-12",
          "valor": 50.00,
          "tipo": "RECEITA"
        },
      ]
}

const getters = {
    todosLancamentos: (state) => state.lancamentos
}

const actions = {
    async buscarLancamentos({ commit }) {
        const res = await LancamentoService.getTodos()
        commit('setLancamentos', res.data)
    },

}

const mutations = {
    setLancamentos: (state, lancamentos) => state.lancamentos = lancamentos
}

export default {
    state,
    getters,
    actions,
    mutations
}