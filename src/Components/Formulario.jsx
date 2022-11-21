import React from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { useEffect,useState } from "react";
import Error from "./Error";

const InputSubmit= styled.input`
background-color:#9497FF;
border:none;
width:100%;
padding:10px;
color:#FFF;
font-weight:700px;
text-transform:uppercase;
font-size:20px;
border-radius:5px;
margin-top:30px;
&::hover{

background-color:#7A7DFE;
transition:background-color .3s ease;
cursor:pointer;

}
`

const Formulario = ({setmonedas}) => {


  const monedas =[
    { id:'USD',nombre:'Dolar de estados unicos'},
    { id:'MXN',nombre:'Peso mexicano'},
    { id:'EUR',nombre:'Euro'},
    { id:'GBP',nombre:'Libra esterlina'},

  ];

  const [criptos, setcriptos] = useState([])
  const [moneda,SelectMonedas]= useSelectMonedas('Elige tu moneda',monedas);
  const [error, seterror] = useState(false)
  const [criptomoneda,Selectcriptomoneda]= useSelectMonedas('Elige tu Criptomoneda',criptos);

  useEffect(() => {

    const consultarApi = async()=>{
      const url="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta= await fetch(url);
      const resultado = await respuesta.json();
     
  
      const Arraycriptos= resultado.Data.map(cripto =>{

        const objeto={
          id:cripto.CoinInfo.Name,
          nombre:cripto.CoinInfo.FullName
        }
        return objeto
     
      })

    setcriptos(Arraycriptos);
    }
    consultarApi();
  }, [])
  

  SelectMonedas();

  const handlerSubmit = (e)=>{
    e.preventDefault();
    if([moneda,criptomoneda].includes('')){

      seterror(true);
      return
    }
    seterror(false);
    setmonedas(moneda,criptomoneda);
  }
  return (
    
    <div>
      {error && <Error>Todos los campos son obligatorios</Error>}
        <form onSubmit={handlerSubmit}>
            <SelectMonedas/>
            <Selectcriptomoneda/>
            <InputSubmit type="submit"  value="Ctoizar Monedas"/>
        </form>
      
    </div>
  )
}

export default Formulario
