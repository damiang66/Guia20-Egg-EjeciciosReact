import { useState } from "react"

export const Ejercicio5=()=>{
    const [contador,setContador]=useState(0);
    const accion = ()=>{
        setContador(contador +1)
    }
    return (<>
    <div className="container">
        <h2>Esta pagina tiene un contador</h2>
    <button onClick={accion} className="btn btn-dark btn-sm">contador</button>
    <p className="alert alert-info">{contador}</p>
    </div>
    </>)
}