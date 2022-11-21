import styled from "@emotion/styled"
import { useState } from "react"

const Label = styled.label`
color: #fff;
display:block;
font-family:'Lato',sans-serif;
font-size:24px;
font-weight:700px;
margin: 15px 0;
`
const Select = styled.select`
font-size: 18px;
width:100%;
padding:14px;
border-radius:10px;

`
const useSelectMonedas = (label,opciones) => {

 const [state, setstate] = useState('')
 
   const SelectMonedas =()=>(

    <>
        <Label>{label}</Label>
       <Select  value={state} onChange={e=> setstate(e.target.value)}>
        <option value="">Seleccione</option>

        {opciones.map(opcion =>(

        <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>

            ) )}

        </Select> 
    </>
   )

   return [state,SelectMonedas]
}

export default useSelectMonedas
