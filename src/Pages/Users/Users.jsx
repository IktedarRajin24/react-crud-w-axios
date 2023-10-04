/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import {deleteUser, getUsers} from '../../Services/usersApi';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] =useState([])
    const {data, isLoading} = useQuery('users', ()=>getUsers())

    useEffect(()=>{
        setUsers(data)
    }, [data])
    const handleDelete = (id) =>{
        const newUsers = users && users.filter(user => user.id != id)
        setUsers(newUsers)
        deleteUser(id)
    }
    return (
        <div className='w-11/12 mx-auto'>
            <Link className='flex justify-end' to='/users/create' >
                <button className='bg-green-600 text-white px-2 py-1 mt-10 w-1/12 rounded-md'>Add New <span className='font-extrabold'>+</span></button>
            </Link>
            <table className='w-full mx-auto border-2 border-slate-200 mt-5 '>
                <thead>
                    <tr className='mx-auto border-2 border-slate-200 bg-slate-300 text-center h-12'>
                        <th className='w-1/3'>Name</th>
                        <th className='w-1/3'>Email</th>
                        <th className='w-1/3'>Actions</th>

                    </tr>
                </thead>
                
                
                {
                    
                    !users && isLoading? "Loading..." : users && users.map(d => 
                    <tbody key={d.id}>
                        
                        <tr  className='w-full mx-auto border-2 border-slate-200 text-center p-2 hover:bg-slate-100'>
                            <td className='w-1/2'>{d.first_name +' '+ d.last_name}</td>
                            <td className='w-1/2'>{d.email}</td>
                            <td className='flex w-full '>
                                <Link to={`/users/${d.id}`}>
                                    <button className='bg-blue-400 text-white px-2 py-1  m-2 rounded-md'>View</button>
                                </Link>
                                <button className='bg-green-400 text-white px-2 py-1 m-2 rounded-md'>Edit</button>
                                <button onClick={()=> handleDelete(d.id)} className='bg-red-400 text-white px-2 py-1 m-2 rounded-md'>Delete</button>

                            </td>

                        </tr>
                    </tbody>)
                }
                
            </table>
        </div>
    );
};

export default Users;