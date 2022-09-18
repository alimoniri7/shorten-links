import { toast } from "react-toastify";

export const copier = (e , setIsCopied)=>{
    setIsCopied(true)
    toast.info('Copied the URL' , {theme: 'colored'})

}