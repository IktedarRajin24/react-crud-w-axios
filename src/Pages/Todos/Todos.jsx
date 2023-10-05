/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { deleteTodo, getTodos } from '../../Services/todosApi';
import { Link } from 'react-router-dom';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const {data, isLoading} = useQuery('todos', ()=>getTodos());
    useEffect(()=>{
        data && setTodos(data.data.data)
    }, [data])

    const handleDelete = (id) =>{
        const newList = todos && todos.filter(todo => todo._id != id)
        setTodos(newList)
        deleteTodo(id)
    }
    return (
        <div className='w-11/12 mx-auto mb-10'>
                <Link to='/todos/create' className='flex justify-end'>
                    <button className='bg-green-600 text-white px-2 py-1 mt-10 w-1/12 rounded-md'>Add New <span className='font-extrabold'>+</span></button>
                </Link>
                <table className='w-full mx-auto border-2 border-slate-200 mt-5 '>
                <thead>
                    <tr className='mx-auto border-2 border-slate-200 bg-slate-300 text-center h-12'>
                        <th className='w-1/3'>Name</th>
                        <th className='w-1/3'>Status</th>
                        <th className='w-1/3'>Actions</th>

                    </tr>
                </thead>
                
                
                {
                    
                    !todos && isLoading? "Loading..." : todos && todos.map(todo => 
                    <tbody key={todo._id}>
                        
                        <tr  className='w-full mx-auto border-2 border-slate-200 text-center p-2 hover:bg-slate-100'>
                            <td className='w-1/2'>{todo.todoName}</td>
                            <td className={`w-1/2 ${todo.isComplete? "text-green-500": "text-red-500"}`}>{todo.isComplete? "Complete": "Pending"}</td>
                            <td className='flex w-full '>
                                <Link to={`/todos/${todo._id}`}>
                                    <button className='bg-blue-400 text-white px-2 py-1  m-2 rounded-md'>View</button>
                                </Link>
                                <Link to={`/todos/edit/${todo._id}`}>
                                    <button className='bg-green-400 text-white px-2 py-1 m-2 rounded-md'>Edit</button>
                                </Link>
                                <button onClick={()=> handleDelete(todo._id)}  className='bg-red-400 text-white px-2 py-1 m-2 rounded-md'>Delete</button>

                            </td>

                        </tr>
                    </tbody>)
                }
                
                </table>
        </div>
    );
};

export default Todos;