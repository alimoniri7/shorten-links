import React, { useState, useRef } from 'react';
import { postData } from '../services/postData';

import { toast } from 'react-toastify';
import { checkDuplicate } from '../helper/checkDuplicate';

const Form = ({data , setData}) => {

    const [url , setUrl] = useState('')

    const inputHandler = (e) => {
        setUrl(e.target.value)
    }


    const toastId = useRef(null);
    console.log(checkDuplicate(url , data));
    
    const submitHandler = (e) => {
        e.preventDefault()
        
        
        if(checkDuplicate(url, data)){
            toast.warn('This URL alredy exist!' , {theme: 'colored'})
        }else{
            toastId.current = toast.loading('Loading...', { autoClose: false, theme: 'colored' });
            postData(url)
                .then(res=> {
                    setData(prevData=> [...prevData , res])
                    console.log(data);
                    toast.update(toastId.current, { render: "Shorten link created!", type: "success", isLoading: false, autoClose: 5000, theme: 'colored'});
                })
                .catch(err=> {
                    console.log(err);
                    if(err.code==='ERR_BAD_REQUEST'){
                        
                        switch(err.response.data.error_code){
                            case 1: 
                                toast.update(toastId.current, {  render: "Please enter something!", type: "warning", isLoading: false ,autoClose: 5000, theme: 'colored'});
                                break
                            case 2: 
                                toast.update(toastId.current, {  render: "Your URL is invalid!", type: "error", isLoading: false ,autoClose: 5000, theme: 'colored'});
                                break
                            case 3: 
                                toast.update(toastId.current, {  render: "Wait a second and try again", type: "info", isLoading: false ,autoClose: 5000, theme: 'colored'});
                                break
                            case 4:
                                toast.update(toastId.current, {  render: "IP-Address has been blocked!", type: "error", isLoading: false ,autoClose: 5000, theme: 'colored'});
                                break
                            case 5: 
                                toast.update(toastId.current, {  render: "Short code already taken!", type: "error", isLoading: false ,autoClose: 5000, theme: 'colored'});
                                break
                            case 6: 
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            default:
                                toast.update(toastId.current, {  render: "Something went wrong!", type: "error", isLoading: false ,autoClose: 5000, theme: 'colored'});
                        }
                    }else {
                        toast.update(toastId.current, {  render: "Network Error", type: "error", isLoading: false ,autoClose: 5000, theme: 'colored'});
                    }
                })
        }
    
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