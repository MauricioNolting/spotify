import { Link, useNavigate } from "react-router-dom"
import ContainerAuth from "./components/layouts/ContainerAuth"
import { axiosMusic } from "../utils/configAxios"

const Register = () => {

    const navigate = useNavigate()   
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)

        axiosMusic
        .post("/api/auth/register", data)
        .then(() => {
        alert("Usuario registrado correctamente, ingresa en el login")
        navigate("/login")}
        )
        .catch((err) => console.log(err))
    }




  return (
    <ContainerAuth>
         <div className="hidden md:block">
            <img className="max-w-[350px]" src="/img/bannerRegister.png" alt="" />
         </div>

         <form onSubmit={handleSubmit} className="[&>label]:grid [&>label]:gap-7 grid gap-6 w-[min(100%,350px)] mx-auto items-center">
           <h1 className="text-3xl uppercase font-semibold ">Cuenta nueva</h1>
          
               <label>
                <span className="text-white/50 text-sm">E-mail</span>
                <input className=" outline-none bg-transparent border-b border-secondary" name="email"  type="text" />
               </label>

               <label>
                <span className="text-white/50 text-sm">Nombre de usuario</span>
                <input className=" outline-none bg-transparent border-b border-secondary" name="name" type="text" />
               </label>

               <label>
                <span className="text-white/50 text-sm">Contraseña</span>
                <input className=" outline-none bg-transparent border-b border-secondary" name="password" type="text" />
               </label>

               <button className="bg-primary-light hover:tracking-widest transition-all py-1 px-10 rounded-full max-w-max mx-auto uppercase font-semibold shadow-lg shadow-purple-400/40 mt-6" type="submit">Crear</button>
               <Link className="text-center hover:text-white/80 transition-all underline" to="/login">O iniciar sesión</Link>
           
         </form>
         </ContainerAuth>
  )
}
export default Register