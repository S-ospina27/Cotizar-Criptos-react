import { useState,useEffect} from 'react'
import styled from '@emotion/styled'
import ImgCripto from './img/imagen-criptos.png'
import Formulario from './Components/Formulario'

//  se instalo estas dependencias para crear styled component
// Cript-react npm install @emotion/react @emotion/styled

const Contenedor = styled.div`
max-width:900px;
margin:0 auto;
width:90%;
@media (min-width: 992px){
  display:grid;
  grid-template-columns:repeat(2,1fr);
  column-gap:2rem;

}
`
const Imagen = styled.img`
max-width:400px;
width:80%;
margin: 100px auto 0 auto;
display: block-auto;
`
const Heading= styled.h1`
font-font-family:'Lato', sans-serif;
color:#FFF;
text-align:center;
font-weight:700px;
margin-top:80px;
margin-bottom:50px;
font-size:34px;
&::after {
content:'';
width:500px;
height:6px;
background-color: #66A2FE;
display:block;
margin:15px;

}

`

function App() {


  const [monedas, setmonedas] = useState({})
  
  useEffect(() => {

    if (Object.keys(monedas).length>0) {
     
      const cotizarApi = async ()=>{

        const {moneda,criptomoneda} = monedas;
        const url=`https://min-api.cryptocompare.com/data/pricemultifull?${criptomoneda}=BTC&tsyms=${moneda}`
        respuesta = await fetch(url);
        resultado= await(respuesta);

      }
      
      cotizarApi();
    }
  
  }, [monedas])
  return (
    <div className="App">
      <Contenedor>
        <Imagen src={ImgCripto} alt="imagenes-criptomonedas"/>

          <div>
            <Heading>Cotiza criptomonedas al Instante</Heading>
            <Formulario
            setmonedas={setmonedas}
            />
          </div>
      </Contenedor>
    
    </div>
  )
}

export default App
