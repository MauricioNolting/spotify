import { Link, useNavigate } from "react-router-dom"
import ContainerAuth from "./components/layouts/ContainerAuth"

import { loginThunk } from "../store/slice/user.slice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const Login = () => {

const dispatch = useDispatch()
const navigate = useNavigate()
const token = useSelector((store) => store.user.token)

const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    console.log(data)

    dispatch(loginThunk(data))

}

useEffect(() => {
 if (token !== "") {
    //? ya el usuario está logueado
    navigate("/")
 }
}, [token])


  return (
    <ContainerAuth>

<div className="hidden md:block">
            <img className="max-w-[350px]" src="/img/bannerLogin.png" alt="" />
         </div>

         <form onSubmit={handleSubmit} className="[&>label]:grid [&>label]:gap-7 grid gap-6 w-[min(100%,350px)] mx-auto items-center">
           <h1 className="text-3xl uppercase font-semibold ">Iniciar sesión</h1>
          
               <label>
                <span className="text-white/50 text-sm">E-mail</span>
                <input className=" outline-none bg-transparent border-b border-secondary"  type="text" name="email" />
               </label>


               <label>
                <span className="text-white/50 text-sm">Contraseña</span>
                <input className=" outline-none bg-transparent border-b border-secondary"  type="password" name="password"/>
               </label>

               <button className="bg-primary-light hover:tracking-widest transition-all py-1 px-10 rounded-full max-w-max mx-auto uppercase font-semibold shadow-lg shadow-purple-400/40 mt-6" type="submit">Entrar</button>
               <Link className="text-center hover:text-white/80 transition-all underline" to="/register">O crear una cuenta nueva</Link>
               </form>
    </ContainerAuth>
  )
}
export default Login