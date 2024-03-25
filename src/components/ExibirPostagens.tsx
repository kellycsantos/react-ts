import { type } from 'os';
import {useEffect, useState} from 'react'
import axios from 'axios'

import LoadingImg from '../assets/loading.gif'

type TPosts = {
    userId : number;
    id: number;
    title: string;
    body: string;
}


export default function ExibirPostagens() {
    const [posts, setPosts] = useState<TPosts[]>([])
    const [carregando, setCarregando] = useState<boolean>(true)

    async function getPosts(){

        try{
            let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(response.data.slice(0,10))
        }catch(error){
            console.log('Erro na aplicação:', error)
        }finally{
            setCarregando(false)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getPosts()
        },2891)
    },[])
    return(
        <>
            <h1>Exibir posts</h1>
            {
                posts.map(post => 
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div> )
                
            }
            {
                carregando && <img src={LoadingImg} />
            }
        </>
    )
}