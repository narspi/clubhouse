import Axios from "axios";

const instanse = Axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
})

export default instanse;