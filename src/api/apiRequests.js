import axios from "axios";

export  class  requests {

    static async getAllTodos () {
        return await  axios.get(`https://jsonplaceholder.typicode.com/todos`)

    }
}