import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState<number>(0)
    return (
        <>
            <h3>
                Contador
            </h3>
            <p>{count}</p>
            <button onClick={() => setCount((prevCount) => prevCount -1)}>Decrementar</button>
            <button onClick={() => setCount((prevCount) => prevCount +1)}>Incrementar</button>
        </>
    )
}