import axios from "axios"

export const postData = async (url) =>{
    let response = await axios.post(`https://api.shrtco.de/v2/shorten?url=${url}`)
    return response.data
}