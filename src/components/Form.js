import React, { useState } from 'react';
import { postData } from '../services/postData';

import { toast } from 'react-toastify';

const Form = () => {
    const [url , setUrl] = useState('')

    const inputHandler = (e) => {
        setUrl(e.target.value)
    }


    const toastId = React.useRef(null);
    
    const submitHandler = (e) => {
        e.preventDefault()
        
        toastId.current = toast.loading('loading', { autoClose: false });
        
        postData(url)
        .then(res=> {
            console.log(res);
            toast.update(toastId.current, { render: "All is good", type: "success", isLoading: false, autoClose: 5000});
        })
        .catch(err=> {
            console.log(err)
            toast.update(toastId.current, {  render: "Somthing went wrong", type: "error", isLoading: false ,autoClose: 5000});
        })
    }

    return (
        <form onSubmit={submitHandler} >
            <div>
                <input type="text" placeholder='Shorten a link here...' value={url} onChange={inputHandler} />
                <button type='submit'>Shorten It!</button>
            </div>
            <span></span>
        </form>
    );
};

export default Form;