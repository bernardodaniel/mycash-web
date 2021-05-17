import createHttp from './axiosConfig'

class LancamentoService {

    getTodos() {
        const http = createHttp()
        const res = http.get('/api/lancamento')
        return res
    }

}

export default new LancamentoService();