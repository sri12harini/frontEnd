import axios from 'axios'
export default axios.create({

    baseURL: 'http://localhost:8088/route',
    headers:{
        'content-type':'application/json'
    }
})