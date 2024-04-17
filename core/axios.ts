import Axios from "axios";

const instanse = Axios.create({
    baseURL: 'http://localhost:3001',

})

export default instanse;