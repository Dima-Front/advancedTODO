import axios from "axios";
import {setTodosAC} from "../store/actions/todoActions";
import {setPostsAC} from "../store/actions/marketActions";

class requests {
    static async getAllTodos() {
        const response =  await axios.get(`https://jsonplaceholder.typicode.com/todos`)
        return response.data
    }

    static async getAllPosts() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
        return response.data
    }

    static async getAllPhotos() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=20`)
        return response.data
    }
}


export const getPosts = () => async dispatch => {

    const [photos, posts] = await Promise.all([requests.getAllPhotos(), requests.getAllPosts()])

    const updatedPosts = posts.map((post, index) => {
        post.count = 0
        post.url = photos[index].url
        return post
    })

    dispatch(setPostsAC(updatedPosts))
}

export const getTodos = () => async dispatch => {
   requests.getAllTodos().then(res => dispatch(setTodosAC(res)))


}