/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getTodoById } from '../../Services/todosApi';

const Todo = () => {
    const {todoId} = useParams()
    const {data, isLoading}= useQuery('todo', ()=>getTodoById(todoId))
    const [todo, setTodo] = useState({})
    useEffect(()=>{
        data && setTodo(data.data.data)
    }, [data])
    return (
        <div className='w-11/12 mx-auto mt-10 py-10 bg-slate-200'>
            {
                !todo && isLoading? "Loading..."  :
                <div className='bg-white w-1/3 mx-auto px-5 py-5'>
                    <h1 className='text-3xl font-bold mb-3'>Title: {todo.todoName}</h1>
                    <p className='font-bold mb-3'>Status: <span className={`font-normal ${todo.isComplete? "text-green-500": "text-red-500"}`}>{todo.isComplete? "Completed": "Pending"}</span></p>
                    <Link to='/todos'>
                        <button className='bg-blue-500 w-1/2 me-5 rounded-md text-white px-1 py-2'>Back</button>
                    </Link>
                </div>
            }
            
        </div>
    );
};

export default Todo;