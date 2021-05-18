import createHttp from './axiosConfig'

class LancamentoService {

    getTodos() {
        const http = createHttp()
        const res = http.get('/api/lancamento')
        return res
    }

    criarLancamento(lancamento) {
        const http = createHttp()
        const res = http.post('/api/lancamento', lancamento)
        return res
    }

    alterarLancamento(lancamento) {
        const http = createHttp()
        const res = http.put(`/api/lancamento/${lancamento.id}`, lancamento)
        return res
    }

    excluirLancamento(id) {
        const http = createHttp()
        const res = http.delete(`/api/lancamento/${id}`)
        return res
    }

}

export default new LancamentoService();