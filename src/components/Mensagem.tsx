type TMensagem = {
    msg: string;
    titulo: string 
}

export default function Mensagem({ msg, titulo } : TMensagem) {
    return (
        <div className="alert-component">
            <h3>{titulo}</h3>
            <hr/>
            <p>{msg}</p>
        </div>

    )
}