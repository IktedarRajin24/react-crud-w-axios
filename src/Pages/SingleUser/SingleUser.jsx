/* eslint-disable no-unused-vars */
import React from 'react';
import { useQuery } from 'react-query';
import { Link, useLocation } from 'react-router-dom';
import { getSingleUser } from '../../Services/usersApi';

const SingleUser = () => {
    const location = useLocation();
    const path = location.pathname;
    const id = path.slice(path.length-1 )
    const {data, isLoading}= useQuery('user', ()=>getSingleUser(id))
    
    return (
        <div className='w-11/12 mx-auto bg-slate-200 mt-10 py-10'>
            {
                !data && isLoading? "Loading": 
                <div className='w-1/3 bg-white mx-auto flex items-center justify-center flex-col py-10'>
                    <img className='pb-5 border-b-2 border-slate-100' src={data.avatar} alt={data.avatar} />
                    <h1 className='text-3xl font-bold mb-2'>{data.first_name + ' ' + data.last_name}</h1>
                    <p className='font-italic mb-10'>{data.email}</p>
                    <Link to='/users'>
                        <button className='bg-blue-500 w-11/12 me-5 rounded-md text-white px-1 py-2'>Back</button>
                    </Link>

                </div>
                
            }
            
        </div>
    );
};

export default SingleUser;