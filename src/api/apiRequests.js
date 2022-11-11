import axios from "axios";

export  class  requests {
    static async getAllTodos () {
        return await  axios.get(`https://jsonplaceholder.typicode.com/todos`)
    }
    static async getAllPosts () {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    }
    static async getAllPhotos () {
        return await axios.get(`https://jsonplaceholder.typicode.com/photos`)
    }
}