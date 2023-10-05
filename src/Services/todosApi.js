import axios from "axios"
const TODOS_URL = import.meta.env.VITE_REACT_APP_BASE_URL_TODOS;

const getTodos = () =>{
    try {
        const response = axios.get(`${TODOS_URL}todos`)
        return response;
    } catch (error) {
        return error;
    }
}

const getTodoById = (id) =>{
    try {
        const response = axios.get(`${TODOS_URL}todos/${id}`)
        return response;
    } catch (error) {
        return error;
    }
}

export {getTodos, getTodoById};