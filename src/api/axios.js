import axios from "axios"

//created dummy mock api using JSON server and called using axios

export const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export const getPosts = async () => {
    const response = await api.get('/alerts')
    return response.data
}