import axios from "axios"
const TODOS_URL = import.meta.env.VITE_REACT_APP_BASE_URL_TODOS;

const getTodos = async () =>{
    try {
        const response = await axios.get(`${TODOS_URL}todos`)
        return response;
        
    } catch (error) {
        return error;
    }
}

const getTodoById = async (id) =>{
    try {
        const response = await axios.get(`${TODOS_URL}todos/${id}`)
        return response;
    } catch (error) {
        return error;
    }
}

const addTodo = async (data) =>{
    try {
        const response = await axios.post(`${TODOS_URL}todos/`, data)
        return response;
    } catch (error) {
        return error;
    }
}

const editTodo = async (data) =>{
    try {
        const response = await axios.put(`${TODOS_URL}todos/${data._id}`, data)
        return response;
    } catch (error) {
        return error;
    }
}

const deleteTodo = async (id) =>{
    try {
        const response = await axios.delete(`${TODOS_URL}todos/${id}`)
        alert(response.data.message)
    } catch (error) {
        return error;
    }
}

export {getTodos, getTodoById, deleteTodo, addTodo, editTodo};