import { useState } from "react";

export default function InputText(){
    const [text, setText] = useState<string>('')

    function handleChange(e : React.ChangeEvent<HTMLInputElement>){
        setText(e.target.value)
    }
    return(
        <>
        <form>
            <input type="text" placeholder="Nome completo" value={text} onChange={handleChange}/>


        </form>

        {text}
        </>
    )
}