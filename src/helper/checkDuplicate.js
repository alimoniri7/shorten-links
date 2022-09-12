import { prefixRemover } from "./prefixRemover"

export const checkDuplicate= (url , data)=>{
    let flag
    if(data.find(item=> prefixRemover(item.result.original_link)===prefixRemover(url))){
        flag=true
    }else{
        flag=false
    }
    return flag
}