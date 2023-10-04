/* eslint-disable no-unused-vars */
import axios from "axios";
const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;
const getUsers = async () =>{
    try {
        const {data} = await axios.get(BASE_URL+`api/users/`)
        return data.data;
    } catch (error) {
        return error;
    }
}

const getSingleUser = async (id) =>{
    try {
        const {data} = await axios.get(BASE_URL+`api/users/${id}`)
        return data.data;
    } catch (error) {
        return error;
    }
}

const createUser = async (d) =>{
    try {
        const {data} = await axios.post(BASE_URL+`api/users/`, d)
        alert(`New user created! \nName: ${d.first_name + ' ' + d.last_name}\nEmail: ${d.email}\n`)
    } catch (error) {
        return error;
    }
}


const deleteUser = async (id) =>{
    try {
        const {data} = await axios.delete(BASE_URL+`api/users/${id}`)
        alert('User Deleted!!')
    } catch (error) {
        return error;
    }
}

export {getUsers, createUser, getSingleUser, deleteUser}
