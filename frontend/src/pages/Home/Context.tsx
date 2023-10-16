import {createContext, useState, useEffect} from 'react'; 
import {FC} from 'react'; 

export interface Ipost {
    userId?: number,
    id?: number,
    title: string,
    body: string
};

export interface IdataPostsInfo {
    posts: Ipost[],
    pag: number
}


export const ContextHome = createContext<IdataPostsInfo | null>(null); 

export const HomeProvider:FC<any> = ({children}) => {
    const [posts, setPosts] = useState<Ipost[]>([]);
    const by_pag = 5
    let n_pag = 1; 
    useEffect(()=>{
        async function getData(){
            for(let n = n_pag; n<n_pag+by_pag; n++){
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${n}`);
                const responseJson = await response.json();
                setPosts((oldPost)=>[...oldPost, responseJson]);
                console.log(n)
            }
        }
        getData();
    },[]);

    const dataPostsInfo:IdataPostsInfo = {
        posts: posts,
        pag: n_pag
    }

    return(
        <ContextHome.Provider value={dataPostsInfo}>
            {children}
        </ContextHome.Provider>
    );
}