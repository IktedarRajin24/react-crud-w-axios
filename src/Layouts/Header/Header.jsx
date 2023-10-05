/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-11/12 bg-slate-300 mx-auto h-20 flex justify-between  items-center px-10 py-5'>
            <h1 className='text-2xl text-black font-bold'>A React App</h1>
            <div className='w-1/6 flex justify-between items-center'>
                <Link to='/users'>Users</Link>
                <Link to='/todos'>Todo</Link>
            </div>
        </div>
    );
};

export default Header;