import { useState } from "react"

export default function Form(){
    let [name,setName] = useState<string>('')
    let [password,setPassword] = useState<string>('')

    function login(e : React.FormEvent){
        e.preventDefault()
        let data = {
            username: name,
            userPassword : password
        }
        console.log(data)
        setName('')
        setPassword('')
    }
    return(

        <>
        <form onSubmit={login}>
            <input type="text" value={name} placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}/>
            <input type="password" value={password} placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Login</button>
        </form>
        </>
    )
}