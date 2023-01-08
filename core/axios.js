import Axios from "axios";

const instanse = Axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    withCredentials: true
})

export default instanse;