/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Layouts/Header/Header';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const Home = () => {
    return (
        <div>
            <Header/>
            <QueryClientProvider client={queryClient}>
                <Outlet/>
            </QueryClientProvider>
            
        </div>
    );
};

export default Home;