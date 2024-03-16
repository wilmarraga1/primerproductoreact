 
 import "./Formurario.css"
 import { useState} from "react"

 export function Formulario() {
  const [nombre,setNombre]=useState("")
  const [contraseña,setContrasena]=useState("")
  const [error,setError]=useState(false)

  const handleSubmit=(e)=>{
    e.prevenDefaul()
    if (nombre=="" && contraseña=="") {
      setError(true)
      return
    }
    setError(false)
  }
  return (
    <section>
    <img className="logo" src="./public/silla.png" alt=""  />
        <form className="formulario"
        onSubmit={handleSubmit}
        >
        <h3 className="subtitulo1">Email o Telefono</h3>
          <input type="text" placeholder=""
            value={nombre}
            onChange={e=> setNombre(e.target.value)}
          />
          <h3 className="subtitulo2">Password</h3>
          <input type="password" placeholder="Mostrar"
          value={contraseña}
            onChange={e=> setContrasena(e.target.value)}
           />
           <h3 className="olvidoC">¿Has olvidado tu contraseña? </h3>
          <button className="button">Inicia session</button>
          <h3 className="opcion">O</h3>
          <h5 className="condiciones">Al hacer click en `continuar como` a contanuacion , acepta las condiciones de uso ,la politica de privacidad y la politica de cookies de likedln </h5>
        </form>
        {error && <p>todos los campos son obligatorios</p>}
    </section>
  )
}


