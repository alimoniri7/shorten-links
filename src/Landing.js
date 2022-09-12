import React, { useState } from 'react';
import Form from './components/Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import List from './components/List';

const Landing = () => {

    const [data , setData]= useState([])


    return (
        <main>
            <Form data={data} setData={setData} />
            {data.length!==0 && <List data={data} /> }
            <ToastContainer />
        </main>
    );
};

export default Landing;