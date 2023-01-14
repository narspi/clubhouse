import Axios from "axios";

const instanse = Axios.create({
    baseURL: 'https://clubhouse-chi.vercel.app/',
    withCredentials: true
})

export default instanse;