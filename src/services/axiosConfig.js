import axios from 'axios'
import { useRouter } from 'vue-router'

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

    const router = useRouter()

    http.interceptors.response.use((response) => {
        if(response.status === 401) {
            router.push('/login')
        }
        return response;
    }, (error) => {
        const res = error.response
        if (res) {
            if (res.status === 401) {
                router.push('/login')
            }
            if (res.data) {
                return Promise.reject(res.data);
            }
        }
        
        return Promise.reject(error.message);
    });

    return http

}