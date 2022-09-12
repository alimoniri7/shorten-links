import { toast } from "react-toastify";

export const copier = (e,text)=>{

    navigator.clipboard.writeText(text);

    toast.info('Copied the URL' , {theme: 'colored'})
    e.target.value='copied!'
}