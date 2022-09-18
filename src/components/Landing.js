import React, { useState } from 'react';

// React toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import List from './List';
import Form from './Form';

// Styles
import styles from './landing.module.scss'
import FeatureSec from './featureSection/FeatureSec';





const Landing = () => {

    const [data , setData]= useState(()=>{
        let iniData=[]
        if(localStorage.getItem('urlList')){
            let localData=JSON.parse(localStorage.getItem('urlList'))
            iniData=[...localData]
        }
        return iniData
    })


    return (
        <main className={styles.mainSection} >
            <Form data={data} setData={setData} />
            {data.length!==0 && <List data={data} /> }

            <FeatureSec/>
            <ToastContainer />
        </main>
    );
};

export default Landing;