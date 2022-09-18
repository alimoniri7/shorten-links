import React, { useState } from 'react';

// React toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import List from './List';
import Form from './Form';
import FeatureSec from './featureSection/FeatureSec';
import BoostSec from './BoostSec';

// Styles
import styles from './landing.module.scss'





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
            <BoostSec/>
        </main>
    );
};

export default Landing;