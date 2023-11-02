import React from 'react'
import { useState } from 'react'
import './Card.css'

export const Card = () => {


    const [auto, setAuto] = useState({
      estudiante: '',
      marca: '',
      modelo: ''
      
  })



  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
      e.preventDefault()
      if(auto.marca.length >=4 && auto.modelo.length >= 2){
          setShow(true)
          setError(false)
      } else {
          setError(true)
          setShow(false)
      }
  }

  console.log(auto)
return (
  <form className="form" onSubmit={handleSubmit}>
     <div>
        <label >Tu nombre es: </label> <br/>
        <input type="text" onBlur={(e) => setAuto({...auto, estudiante: e.target.value})}/>
     </div>
     <div>
        <label >Marca del auto: </label> <br/>
        <input type="text" onChange={(e) => setAuto({...auto, marca: e.target.value})}/>
      </div>
     <div>
        <label >Modelo del auto: </label> <br/>
        <input type="text" onChange={(e) => setAuto({...auto, modelo: e.target.value})}/>
     </div>
     

    <button>Enviar</button>

      {error && <h6 className='error' >Por favor verifique que la información sea correcta</h6>}

      {show ? <>
          
          <p className='respuesta'>

            <h3>Hola {auto.estudiante}!</h3>

            Marca del auto: {auto.marca} <br/>
            Modelo del auto: {auto.modelo}
            
          </p>
          
      </>
      : null
      }

  </form>
)


}
