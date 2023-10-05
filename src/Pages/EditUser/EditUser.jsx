/* eslint-disable no-unused-vars */
import React from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

const EditUser = () => {
    const location = useLocation();
    const path = location.pathname;
    const id = path.slice(path.length-1 )
    const {data, isLoading}= useQuery('user', ()=>(id))
    return (
        <div>
            
        </div>
    );
};

export default EditUser;