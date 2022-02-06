import axios from 'axios'

export const fetchCards = async () => {
    const endpoint = 'http://localhost:8000/api/cards'
    try {
        let { data } = await axios.get(endpoint)
        return data
    } catch (error) {
        alert(error)
    }

}

export const addNewCard = async () =>{
    const endpoint = 'http://localhost:8000/api/cards'
    try {
        let { data } = await axios.post(endpoint)
        return data
    } catch (error) {
        alert(error)
    }
}

export const showCard = async (id) => {
    const endpoint = `http://localhost:8000/api/cards/${id}`
    try {
        let { data } = await axios.get(endpoint)
        return await data
    } catch (error) {
        alert(error)
    }
}

export const updateCard = async (id, discount_number) => {
    const inputs = {id, discount_number}
    const endpoint = `http://localhost:8000/api/cards/${id}`
    try {
        let { data } = await axios.put(endpoint, inputs)
        return await data

    } catch (error) {
        alert(error)
    }
}

export const saveReloading = async(inputs) => {
    const endpoint = `http://localhost:8000/api/reloadings`
    try {
        let { data } = await axios.put(endpoint, inputs)
        console.log('data', data)
        return await data


    } catch (error) {
        alert(error)
    } 
}