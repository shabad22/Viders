import axios from "axios"

// Fetching Youtube API 
export default axios.create ({
    baseURL : 'https://www.googleapis.com/youtube/v3'
})