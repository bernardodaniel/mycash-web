import axios from 'axios'

export default function createHttp() {
    const http = axios.create({
        baseURL: 'http://localhost:9090/mycash'
    })
    
    http.interceptors.request.use(config  => {
        const token = localStorage.getItem('mycash_token')
        if (token) {
            config.headers.common['Authorization'] = `Bearer ${token}`
        }
        return config
    }
    );

    return http

}