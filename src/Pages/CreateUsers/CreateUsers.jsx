/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { DevTool } from "@hookform/devtools";
import { createUser } from '../../Services/usersApi';



const CreateUsers = () => {
    const form = useForm()
    const {register, control, handleSubmit, getValues} = form
    const onSubmit = (data)=>{
        createUser(data)
    }
    return (
        <div className='w-11/12 mx-auto border-2 border-slate-300 mt-10 px-5 py-10'>
            <h1 className='text-center font-bold text-2xl mb-10'>Create a new user.</h1>
            <form action="#" className='w-8/12 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <div className='w-8/12 mx-auto flex justify-evenly items-center mb-2'>
                    <label htmlFor="id" className='w-1/2'>ID:</label>
                    <input type="number" id='id' className='w-3/4 bg-slate-200 border-slate-400 border-2 rounded-md p-1' {...register('id')}/>
                </div>
                <div className='w-8/12 mx-auto flex justify-around items-center mb-2'>
                    <label htmlFor="fname" className='w-1/2'>First Name:</label>
                    <input type="text" id='fname' className='w-3/4 bg-slate-200 border-slate-400 border-2 rounded-md p-1' {...register('first_name')}/>
                </div>
                <div className='w-8/12 mx-auto flex justify-around items-center mb-2'>
                    <label htmlFor="lname" className='w-1/2'>Last Name:</label>
                    <input type="text" id='lname' className='w-3/4 bg-slate-200 border-slate-400 border-2 rounded-md p-1' {...register('last_name')}/>
                </div>
                <div className='w-8/12 mx-auto flex justify-around items-center mb-2'>
                    <label htmlFor="email" className='w-1/2'>Email</label>
                    <input type="email" id='email' className='w-3/4 bg-slate-200 border-slate-400 border-2 rounded-md p-1' {...register('email')}/>
                </div>
                <div className='w-8/12 mx-auto mb-5'>
                    <label htmlFor="image" className='w-3/4'></label>
                    <input type="file" id='image' {...register('avatar')}/>
                </div>
                <div className='w-8/12 mx-auto'>
                    <input type='submit' value='Submit' className='bg-green-500 w-1/4 me-5 rounded-md text-white px-1 py-2 cursor-pointer'/>
                    <Link to='/users'>
                        <button className='bg-blue-500 w-1/4 me-5 rounded-md text-white px-1 py-2'>Back</button>
                    </Link>

                </div>
            </form>
            <DevTool control={control}/>
        </div>
    );
};

export default CreateUsers;