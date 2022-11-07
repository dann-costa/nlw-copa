import { api } from "./axios";

export async function loadPools() {
    const response = await api.get('/pools/count')

    return response.data.count
}

export async function loadGuesses() {
    const response = await api.get('/guesses/count')

    return response.data.count
}

export async function loadUsers() {
    const response = await api.get('/users/count')

    return response.data.count
}