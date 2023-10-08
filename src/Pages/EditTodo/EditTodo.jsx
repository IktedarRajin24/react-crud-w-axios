/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editTodo, getTodoById } from '../../Services/todosApi';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const EditTodo = () => {
    const {todoId} = useParams()
    const {data}= useQuery('todo', ()=>getTodoById(todoId))

    data && console.log(data.data.data)

    const form = useForm();
    const navigate = useNavigate()
    const {register, handleSubmit, control, setValue} = form
    const onUpdate = (data)=>{
        
        editTodo(data)
        navigate('/todos')
    }
    const [todo, setTodo] = useState({})
    useEffect(()=>{
        data && setTodo(data.data.data)
    }, [data])


    return (
        <div className='w-11/12 mx-auto border-2 border-slate-300 mt-10 px-5 py-10'>
            <h1 className='text-center font-bold text-2xl mb-10'>Create Todo</h1>
            <form action="#" className='w-8/12 mx-auto' onSubmit={handleSubmit(onUpdate)}>
                <div className='w-8/12 mx-auto flex justify-evenly items-center mb-2'>
                    <label htmlFor="todoName" className='w-1/2'>Title:</label>
                    <input type="text" id='todoName' className='w-3/4 bg-slate-200 border-slate-400 border-2 rounded-md p-1' value={ todo && todo.todoName} {...register('todoName')} />
                </div>
                <div className='w-8/12 mx-auto flex justify-center items-center mb-2'>
                    <label htmlFor="isCompleted" className='w-1/2'>Completed:</label>
                    <input type="checkbox" id='isCompleted' className='w-3/4 bg-slate-200 border-slate-400 border-2 rounded-md p-1' checked={todo && todo.isComplete} {...register('isComplete')}/>
                </div>
                <div className='w-8/12 mx-auto'>
                    <input type='submit' value='Update' className='bg-yellow-500 w-1/4 me-5 rounded-md text-white px-1 py-2 cursor-pointer'/>
                    <Link to='/todos'>
                        <button className='bg-blue-500 w-1/4 me-5 rounded-md text-white px-1 py-2'>Back</button>
                    </Link>

                </div>
            </form>            
            <DevTool control={control}/>
        </div>
    );
};

export default EditTodo;