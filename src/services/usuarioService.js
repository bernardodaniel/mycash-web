import createHttp from './axiosConfig'

class UsuarioService {

    getTodos() {
        const http = createHttp()
        const res = http.get('/api/usuario')
        return res
    }

    resetarSenha(email, bodyData) {
        const http = createHttp()
        const res = http.put(`/api/usuario/${email}`, bodyData)
        return res
    }

}

export default new UsuarioService();