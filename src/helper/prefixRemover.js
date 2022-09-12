export const prefixRemover= (url)=>{
    let newUrl=url
    if(url.search('http://') !== -1){
        newUrl= url.slice(7)
    }else if(url.search('https://') !== -1){
        newUrl= url.slice(8)
    }
    return newUrl
}